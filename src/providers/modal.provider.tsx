"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useApp } from './app.provider';
import { LoginModal } from '../components/modals/auth/login.modal';

interface IModalContext {
    currentModal: string;
    setCurrentModal: (value: string) => void;

    closeModal: () => void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within an ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { router, pathname, searchParams } = useApp();
    const [currentModal, setCurrentModal] = useState<string | null>(null);

    useEffect(() => {
        const modal = searchParams.get("modal");
        if (modal) setCurrentModal(modal);
    }, [searchParams]);

    return (
        <ModalContext.Provider
            value={{ currentModal, setCurrentModal, closeModal: () => { router.push(pathname, { scroll : false }); setCurrentModal(null); } }}
        >
            {children}

            <LoginModal />
            
        </ModalContext.Provider>
    );
};
