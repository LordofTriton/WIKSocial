import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}

export const Box: React.FC<IProps> = ({
    children,
    ...rest
}) => {

    rest.className = {
        display: "flex",
        padding: "0px",
        margin: "0px",
        boxSizing: "border-box",
        transition: "all 0.5s",
        flexDirection: "column",
        ...rest.style
    }

    return (
        <div className="flex " {...rest}>
            {children ?? null}
        </div>
    );
};