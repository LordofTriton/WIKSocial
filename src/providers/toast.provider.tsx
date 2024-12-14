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
    const [toastQueue, setToastQueue] = useState<Toast[]>([]);

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
                    <Box style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        top: 0,
                        right: 0,
                        flexDirection: "column-reverse",
                        padding: 25,
                        pointerEvents: "none",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                        {
                            toastQueue.map((toast, index) =>
                                <ToastMessage data={toast} onRemove={() => removeToast(toast.id)} key={index} />
                            )
                        }
                    </Box>
                )
            }
        </ToastContext.Provider>
    );
};