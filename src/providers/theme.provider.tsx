"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useApp } from './app.provider';

interface IThemeContext {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within an ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { darkMode, toggleDarkMode } = useApp();

    return (
        <ThemeContext.Provider
            value={{ darkMode, toggleDarkMode }}
        >
            <div className={`${darkMode ? "dark" : ""}`}>
                {children}
            </div>
            
        </ThemeContext.Provider>
    );
};
