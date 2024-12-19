"use client"

import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface IProps {
    open: boolean;
    onClose?: () => void;
    onGoBack?: () => void;
    title?: string;
    width?: number;
    showClose?: boolean;
    closeOnClickOut?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ 
    open,
    onClose,
    onGoBack,
    title,
    width,
    closeOnClickOut,
    children
}) => {
    return open && (
        <div className="flex fixed inset-0 bg-tinted-glass z-20 backdrop-filter backdrop-blur-sm justify-center items-center" onClick={() => closeOnClickOut ? onClose() : null}>

            <div className="w-2/6 min-h-32 bg-white dark:bg-eerie-black rounded-xl p-5 fade-in-right">
                <div className={`flex flex-row ${onGoBack || title ? "justify-between" : "justify-end"} items-center`}>
                    { onGoBack ? <ChevronLeftIcon className="w-5 h-5 text-black dark:text-gray-300 mr-2 cursor-pointer" onClick={() => onGoBack()} /> : null}
                    { title ? <span className="flex flex-1 text-lg font-semibold text-black dark:text-gray-300">{title}</span> : null }
                    { onClose ? <XMarkIcon className="w-6 h-6 text-black dark:text-gray-300 cursor-pointer" onClick={() => onClose()} /> : null}
                </div>

                <div className="mt-2">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Modal;