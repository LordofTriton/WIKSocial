"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '../constants/entities/user.entity';
import DatetimeHelper from '../helpers/datetime.helper';
import { STORE_KEYS } from '../config/store.config';
import Cache from '../util/cache.util';
import { Settings } from '../constants/entities/settings.entity';
import { NextRouter } from 'next/router';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, usePathname, useParams, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';
import { Params } from 'next/dist/server/request/params';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config/queryClient.config';

interface IAppContext {
  activeUser: Partial<User> | null;
  updateActiveUser: (data: Partial<User>) => void;
  
  activeSettings: Partial<Settings> | null;
  updateActiveSettings: (data: Partial<Settings>) => void;

  accessCode: string;
  updateAccessCode: (code: string) => void;

  darkMode: boolean;
  toggleDarkMode: () => void;

  isAuthenticated: boolean;
  isFetchingData: boolean;

  logOutUser: (callback: () => void) => void;

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

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const [activeUser, setActiveUser] = useState<Partial<User> | null>({} as User);
  const [activeSettings, setActiveSettings] = useState<Partial<Settings> | null>({} as Settings);
  
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const [accessCode, setAccessCode] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsFetchingData(true);
      setIsAuthenticated(false);

      const activeUserData = await Cache.getData(STORE_KEYS.ACTIVE_USER);
      const activeSettingsData = await Cache.getData(STORE_KEYS.ACTIVE_SETTINGS);
      const accessCodeData = await Cache.getData(STORE_KEYS.ACCESS_CODE);
      
      const parsedUser: Partial<User> = JSON.parse(activeUserData);
      const parsedSettings: Partial<Settings> = JSON.parse(activeUserData);

      if (activeUserData) setActiveUser(parsedUser);
      
      if (activeSettingsData && parsedSettings) {
        setActiveSettings(parsedSettings);
        setDarkMode(parsedSettings.darkMode ?? false);
      }

      if (accessCodeData && activeUserData && parsedUser) {
        setAccessCode(accessCodeData);
        setIsAuthenticated(accessCodeData.length > 0 && DatetimeHelper.hoursBetween(parsedUser.lastLogin ?? 0, Date.now()) < 24);
      }

      setIsFetchingData(false);
    };

    fetchUserData();
  }, []);

  const updateActiveUser = async (data: Partial<User>) => {
    await Cache.saveData(STORE_KEYS.ACTIVE_USER, JSON.stringify(data));
    setActiveUser(data);
  };

  const updateActiveSettings = async (data: Partial<Settings>) => {
    await Cache.saveData(STORE_KEYS.ACTIVE_SETTINGS, JSON.stringify(data));
    setActiveSettings(data);
  };

  const updateAccessCode = async (token: string) => {
    await Cache.saveData(STORE_KEYS.ACCESS_CODE, token);
    setAccessCode(token);
    setIsAuthenticated(token.length > 0);
  };

  const toggleDarkMode = async () => {
    const updatedSettings = { ...activeSettings, darkMode: !darkMode };
    setDarkMode(updatedSettings.darkMode);
    setActiveSettings(updatedSettings);

    await Cache.saveData(STORE_KEYS.ACTIVE_SETTINGS, JSON.stringify(updatedSettings));
  };

  const logOutUser = async (callback: () => void) => {
    await Cache.clearData();
    setActiveUser(null);
    setAccessCode("");
    setIsAuthenticated(false);
    setIsFetchingData(true);

    callback();
  };

  return (
    <AppContext.Provider
      value={{
        activeUser,
        updateActiveUser,
        
        activeSettings,
        updateActiveSettings,

        isAuthenticated,
        isFetchingData,

        accessCode,
        updateAccessCode,
        
        darkMode,
        toggleDarkMode,

        logOutUser,

        router,
        pathname,
        params,
        searchParams
      }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
