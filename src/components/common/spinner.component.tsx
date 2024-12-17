"use client"

interface IProps {
    className?: string;
}

export const SpinLoader: React.FC<IProps> = ({ className }) => {
    return (
        <div className={`w-8 h-8 border-4 border-t-transparent border-b-transparent border-l-white border-r-white rounded-full animate-spin ${className ?? ""}`}></div>
    );
};
