"use client"

import { useEffect, useRef } from "react";
import { ToastTypeEnum } from "../../constants/enums/misc.enums";
import { Toast } from "../../constants/models/toast.model";
import { Text } from "./text.component";
import { Box } from "./box.component";
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface IProps {
    data: Toast;
    onRemove: () => void;
}

export const ToastMessage: React.FC<IProps> = ({
    data,
    onRemove
}) => {

    return (
        <div className="w-80 flex flex-row bg-white dark:bg-eerie-black rounded-xl px-3 mt-2 justify-center items-center pointer-events-auto fade-in-out-right">
            {
                data.type === ToastTypeEnum.SUCCESS ? <CheckCircleIcon className="w-8 h-8 text-green-400" /> :
                data.type === ToastTypeEnum.ERROR ? <XCircleIcon className="w-8 h-8 text-red-500" /> :
                <InformationCircleIcon className="w-8 h-8 text-purple-400" />
            }

            <div className="flex flex-1 flex-row justify-start items-center mx-3 my-5">
                <span className="flex flex-1 text-sm text-black font-medium">{data.message}</span>
            </div>

            <div className="flex w-8 h-8 justify-center items-center cursor-pointer" onClick={() => onRemove()}>
                <XMarkIcon className="w-6 h-6 text-black" />
            </div>
        </div>
    );
};