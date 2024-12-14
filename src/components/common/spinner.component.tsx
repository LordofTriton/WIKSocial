"use client"

import { PrimaryColor } from '../../configs/colors.config';
import styles from "../../styles/component/spinner.module.css"
import { Box } from './box.component';

interface IProps {
    size?: number | 'small' | 'large';
    color?: string;
}

export const Spinner: React.FC<IProps> = ({ size = 'large', color = PrimaryColor.CD }) => {
    return (
        <Box className={`w-${size === "small" ? "15" : size === "large" ? "25" : size} h-${size === "small" ? "15" : size === "large" ? "25" : size} border-4 border-t-transparent border-b-transparent border-l-blue-500 border-r-blue-500 rounded-full animate-spin`}></Box>
    );
};

export const Dots: React.FC<IProps> = ({ size = 'large', color = PrimaryColor.CD }) => {
    return (
        <Box className={styles.spinner} style={{
            width: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            height: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            borderLeft: `3px solid ${color}`,
            borderRight: `3px solid ${color}`
        }}></Box>
    );
};

export const Loader: React.FC<IProps> = ({ size = 'large', color = PrimaryColor.CD }) => {
    return (
        <Box className={styles.spinner} style={{
            width: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            height: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            borderLeft: `3px solid ${color}`,
            borderRight: `3px solid ${color}`
        }}></Box>
    );
};
