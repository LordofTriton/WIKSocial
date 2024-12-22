"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '../constants/entities/user.entity';
import DatetimeHelper from '../helpers/datetime.helper';
import { Settings } from '../constants/entities/settings.entity';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, usePathname, useParams, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';
import { Params } from 'next/dist/server/request/params';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config/queryClient.config';
import { UpdateUserRequest } from '../constants/requests/user.requests';
import { WikMapper } from '../util/mapper.util';
import { UpdateSettingsRequest } from '../constants/requests/settings.requests';
import { Action } from '../actions/action';
import { protectedRoutes } from '../config/routes.config';
import { CACHE_KEYS } from '../config/cache.config';
import { ClearRedis, GetRedis, SetRedis } from '../util/redis.util';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

interface IAppContext {
  activeUser: Partial<User> | null;
  updateActiveUser: (data: Partial<User>, updateDb?: boolean) => Promise<void>;
  
  activeSettings: Partial<Settings> | null;
  updateActiveSettings: (data: Partial<Settings>, updateDb?: boolean) => Promise<void>;

  accessCode: string;
  updateAccessCode: (code: string) => Promise<void>;

  darkMode: boolean;
  toggleDarkMode: () => void;

  isAuthenticated: boolean;

  logOutUser: (callback?: () => void) => void;
  deleteUser: (callback?: () => void) => void;

  router: AppRouterInstance;
  pathname: string;
  params: Params;
  searchParams: ReadonlyURLSearchParams;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children, getCookie, deleteCookie }: { children: ReactNode, getCookie: (key: string) => Promise<RequestCookie>, deleteCookie: (key: string) => Promise<void> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const [activeUser, setActiveUser] = useState<Partial<User> | null>(null);
  const [activeSettings, setActiveSettings] = useState<Partial<Settings> | null>(null);
  
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const [accessCode, setAccessCode] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {    
      const sessionId = await getCookie("sessionId");
      if (!sessionId) return setIsAuthenticated(false);

      const accessCodeData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_ACCESS_CODE) : null;
      const activeUserData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_USER) : null;
      const activeSettingsData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_SETTINGS) : null;

      const parsedUser: Partial<User> = JSON.parse(activeUserData);
      const parsedSettings: Partial<Settings> = JSON.parse(activeSettingsData);

      if (activeUserData) setActiveUser(parsedUser);
      
      if (activeSettingsData && parsedSettings) {
        setActiveSettings(parsedSettings);
        setDarkMode(parsedSettings.darkMode ?? false);
      }
  
      if (accessCodeData && activeUserData) {
        const loginTimedOut = DatetimeHelper.hoursBetween(parsedUser.lastLogin ?? 0, Date.now()) > 24;

        if (loginTimedOut) {
          await ClearRedis(activeUserData.userId);
          await deleteCookie("sessionId");
          setIsAuthenticated(false);
        }
        else {
          setAccessCode(accessCodeData);
          setIsAuthenticated(accessCodeData.length > 0);
        }
      }
      else setIsAuthenticated(false);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) return;

    if (!isAuthenticated && protectedRoutes.includes(pathname)) logOutUser(() => router.push("/"));
  }, [router, isAuthenticated, pathname]);

  const updateActiveUser = async (data: Partial<User>, updateDb: boolean = true) => {
    if (!data || !data.userId) return;
    const sessionId = await getCookie("sessionId");
    if (!sessionId) return;
    
    setActiveUser(data);
    
    await SetRedis(sessionId.value, CACHE_KEYS.REDIS_USER, JSON.stringify(data));
    if (updateDb) await Action.UpdateUser({ userId: data.userId, ...WikMapper.map(data, UpdateUserRequest) });
  };

  const updateActiveSettings = async (data: Partial<Settings>, updateDb: boolean = true) => {
    if (!data || !data.userId) return;
    const sessionId = await getCookie("sessionId");
    if (!sessionId) return;

    setActiveSettings(data);
    setDarkMode(data.darkMode);

    await SetRedis(sessionId.value, CACHE_KEYS.REDIS_SETTINGS, JSON.stringify(data));
    if (updateDb) await Action.UpdateSettings({ userId: activeUser.userId, ...WikMapper.map(data, UpdateSettingsRequest) });
  };

  const updateAccessCode = async (code: string) => {
    const sessionId = await getCookie("sessionId");
    if (!sessionId) return;

    setAccessCode(code);
    setIsAuthenticated(code.length > 0);
    
    await SetRedis(sessionId.value, CACHE_KEYS.REDIS_ACCESS_CODE, code);
  };

  const toggleDarkMode = async () => {
    const updatedSettings = { ...activeSettings, darkMode: !darkMode };
    updateActiveSettings(updatedSettings);
  };

  const logOutUser = async (callback?: () => void) => {
    await deleteCookie("sessionId");
    await ClearRedis(activeUser.userId);

    setActiveUser(null);
    setActiveSettings(null);
    setAccessCode("");
    setIsAuthenticated(false);

    if (callback) callback();
  };

  const deleteUser = async (callback?: () => void) => {
    if (!activeUser || !activeUser.userId) return;

    await Action.DropUser(activeUser?.userId);
    await logOutUser(callback);
  };

  return (
    <AppContext.Provider
      value={{
        activeUser,
        updateActiveUser,
        
        activeSettings,
        updateActiveSettings,

        isAuthenticated,

        accessCode,
        updateAccessCode,
        
        darkMode,
        toggleDarkMode,

        logOutUser,
        deleteUser,

        router,
        pathname,
        params,
        searchParams
      }}
    >
      <QueryClientProvider client={queryClient}>
        { isAuthenticated !== null ? children : null }
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
