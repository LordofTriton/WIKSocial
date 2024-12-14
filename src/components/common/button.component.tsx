import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { NeutralColor, PrimaryColor, ShadeColor } from "../../configs/colors.config";
import { Text } from "./text.component";
import { Box } from "./box.component";
import { Spinner } from "./spinner.component";

interface IProps {
    children?: string | ReactNode;
    onClick: () => void;
    style?: CSSProperties,
    textColor?: string;
    backgroundColor?: string;
    loading?: boolean;
    disabled? :boolean;
    mode?: "primary" | "secondary";
    icon?: ReactNode;
}

export const Button: React.FC<IProps> = ({
    children,
    onClick,
    style,
    textColor,
    backgroundColor,
    loading,
    disabled,
    mode,
    icon
}) => {

    const styles: CSSProperties = {
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor ?? mode === "secondary" ? ShadeColor.white : PrimaryColor.CD,
        borderWidth: 1.2,
        borderColor: mode === "secondary" ? NeutralColor.CD : PrimaryColor.CD,
        opacity: disabled ? 0.5 : 1,
        flexDirection: "row",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        ...style
    }

    return (
        <Box style={styles} onClick={() => disabled || loading ? null : onClick()}>
            {
                loading ?
                <Spinner size={30} color={mode === "secondary" ? PrimaryColor.CD : ShadeColor.white} /> :
                typeof children === "string" ?
                <>
                    { icon }
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: textColor ?? mode === "secondary" ? NeutralColor.DCCC : ShadeColor.white,
                        marginLeft: icon ? 10 : 0
                    }}>
                        {children}
                    </Text>
                </> :
                children
            }
        </Box>
    );
};