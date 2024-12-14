"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '../constants/entities/user.entity';
import DatetimeHelper from '../helpers/datetime.helper';
import { STORE_KEYS } from '../config/store.config';
import Cache from '../util/cache.util';

interface IAppContext {
  activeUser: Partial<User> | null;
  updateActiveUser: (data: Partial<User>) => void;

  accessCode: string;
  updateAccessCode: (code: string) => void;

  isAuthenticated: boolean;
  isFetchingData: boolean;

  logOutUser: (callback: () => void) => void;
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
  const [activeUser, setActiveUser] = useState<Partial<User> | null>(null);

  const [accessCode, setAccessCode] = useState<string>("")
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsFetchingData(true);
      setIsAuthenticated(false);

      const activeUserData = await Cache.getData(STORE_KEYS.ACTIVE_USER);
      const accessCodeData = await Cache.getData(STORE_KEYS.ACCESS_CODE);
      
      const parsedUser: Partial<User> = JSON.parse(activeUserData);

      if (activeUserData) setActiveUser(parsedUser);

      if (accessCodeData && activeUserData) {
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

  const updateAccessCode = async (token: string) => {
    await Cache.saveData(STORE_KEYS.ACCESS_CODE, token);
    setAccessCode(token);
    setIsAuthenticated(token.length > 0);
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

        isAuthenticated,
        isFetchingData,

        accessCode,
        updateAccessCode,

        logOutUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
