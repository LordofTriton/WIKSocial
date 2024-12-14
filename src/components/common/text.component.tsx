"use client"

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children?: ReactNode;

    size?: number;
    weight?: "thin"	| "extralight" | "light" | "normal"	| "medium" | "semibold" | "bold" | "extrabold" | "black";
    block?: boolean;
    inline?: boolean;
    center?: boolean;
    color?: string;
}

export const Text: React.FC<IProps> = ({
    children,

    size,
    weight,
    block,
    inline,
    center,
    color,
    
    ...rest
}) => {

    const baseClasses = `${block ? "block" : inline ? "inline" ? block && inline ? "inline-block" : "flex" : "flex" : "flex"} ${center ? "center" : ""} text-${color ?? "black"} text-${size ?? 15} font-sans font-${weight ?? "light"} p-0 m-0`;

    return (
        <span className={`${baseClasses} ${rest.className}`} {...rest}>
            {children ?? ""}
        </span>
    );
};