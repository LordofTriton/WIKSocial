"use client"

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}

export const Box: React.FC<IProps> = ({
    children,
    ...rest
}) => {

    const baseClasses = "flex p-0 m-0 border-box transition-all duration-500 flex-col";

    return (
        <div className={`${baseClasses} ${rest.className}`} {...rest}>
            {children ?? null}
        </div>
    );
};