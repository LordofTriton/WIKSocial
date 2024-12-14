import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ShadeColor } from "../../configs/colors.config";
import { Font } from "../fonts.component";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children?: ReactNode;

    size?: number;
    weight?: number;
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

    rest.style = {
        display: block ? "block" : inline ? "inline" ? block && inline ? "inline-block" : "flex" : "flex" : "flex",
        textAlign: center ? "center" : undefined,
        color: color ?? ShadeColor.black,
        fontSize: size ? `${size}px` : "15px",
        fontFamily: Font.Poppins,
        fontWeight: weight ? `${weight}` : "300",
        padding: "0px",
        margin: "0px",
        ...rest.style
    }

    return (
        <span {...rest}>
            {children ?? ""}
        </span>
    );
};