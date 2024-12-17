"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Toast } from '../constants/models/toast.model';
import { ToastTypeEnum } from '../constants/enums/misc.enums';
import { ToastMessage } from '../components/common/toast.component';
import { Box } from '../components/common/box.component';

interface IToastContext {
    success: (message: string, delay?: number) => void;
    error: (message: string, delay?: number) => void;
    info: (message: string, delay?: number) => void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toastQueue, setToastQueue] = useState<Toast[]>([
        {
            id: 1,
            message: "Hello World!",
            type: ToastTypeEnum.SUCCESS,
            delay: 10000000000
        }
    ]);

    const addToast = (message: string, type: string, delay?: number) => {
        const toastId = Date.now();

        setToastQueue((prevQueue) => prevQueue.concat({ 
            id: toastId,
            message,
            delay: delay ?? 5000,
            type
        }));
        setTimeout(() => removeToast(toastId), delay ?? 5000);
    };

    const removeToast = (id: number) => {
        setToastQueue((prevQueue) => prevQueue.filter((toast) => id !== toast.id))
    }

    return (
        <ToastContext.Provider value={{
            info: (message: string, delay?: number) => addToast(message, ToastTypeEnum.INFO, delay),
            success: (message: string, delay?: number) => addToast(message, ToastTypeEnum.SUCCESS, delay),
            error: (message: string, delay?: number) => addToast(message, ToastTypeEnum.ERROR, delay)
        }}>
            {children}

            {
                toastQueue.length > 0 && (
                    <div className="flex fixed inset-0 flex-col p-5 justify-start items-end z-20">
                        {
                            toastQueue.map((toast, index) =>
                                <ToastMessage data={toast} onRemove={() => removeToast(toast.id)} key={index} />
                            )
                        }
                    </div>
                )
            }
        </ToastContext.Provider>
    );
};