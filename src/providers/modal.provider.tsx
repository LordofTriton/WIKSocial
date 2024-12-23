"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useApp } from './app.provider';

// Auth
import { LoginModal } from '../components/modals/auth/login.modal';
import { SignupModal } from '../components/modals/auth/signup.modal';
import { MailLoginModal } from '../components/modals/auth/mailLogin.modal';
import { MailSignupModal } from '../components/modals/auth/mailSignup.modal';

// Post
import { CreatePostModal } from '../components/modals/post/createPost.modal';

interface IModalContext {
    currentModal: string;
    setCurrentModal: (value: string) => void;

    toggleModal: (modalName: string) => void;
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
    const { pathname, searchParams, darkMode } = useApp();
    const [currentModal, setCurrentModal] = useState<string | null>(null);

    useEffect(() => {
        const modal = searchParams.get("modal");
        if (modal) setCurrentModal(modal);
    }, [searchParams]);

    const toggleModal = (modalName: string) => {
        const newParam = `?modal=${modalName}`;
        window.history.replaceState({ ...window.history.state, as: newParam, url: newParam }, '', newParam);
        setCurrentModal(modalName);
    }

    const closeModal = () => {
        window.history.replaceState({ ...window.history.state, as: pathname, url: pathname }, '', pathname);
        setCurrentModal(null);
    }

    return (
        <ModalContext.Provider
            value={{ currentModal, setCurrentModal, toggleModal, closeModal }}
        >
            {children}

            <LoginModal />
            <SignupModal />

            <MailLoginModal />
            <MailSignupModal />

            <CreatePostModal />
            
        </ModalContext.Provider>
    );
};
