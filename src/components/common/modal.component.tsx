import React from "react";
import { IoClose } from "react-icons/io5";
import { Text } from "./text.component";
import { Box } from "./box.component";
import { Icon } from "../icons.component";
import { NeutralColor, ShadeColor } from "../../configs/colors.config";

interface IProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    width?: number;
    showClose?: boolean;
    closeOnClickOut?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ 
    open,
    onClose,
    title,
    width,
    showClose,
    closeOnClickOut,
    children
}) => {
    return(
        <Box style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            background: ShadeColor.glass,
            backdropFilter: "blur(10px)",
            display: open ? "flex" : "none",
            justifyContent: "space-around",
            alignItems: "center",
            overflow: "hidden",
            overflowY: "auto",
            padding: "50px 0px"
        }} onClick={() => closeOnClickOut ? onClose() : null}>

            <Box style={{
                width: width ? `${width}px` : "500px",
                maxWidth: "90%",
                height: "fit-content",
                borderRadius: "10px",
                backgroundColor: ShadeColor.white,
                border: "1px solid #e5e5e5",
                boxShadow: "0 .125rem .25rem #e5e5e5",
                flexDirection: "column"
            }} onClick={(e) => e.stopPropagation()}>
                <Box style={{
                    width: "100%",
                    padding: "20px",
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}>
                    <Text size={17} weight={600} color={NeutralColor.CM}>
                        {title ?? ""}
                    </Text>

                    {
                        showClose && (
                            <Icon.IoClose style={{
                                width: "25px",
                                height: "25px",
                                cursor: "pointer",
                                color: NeutralColor.CM
                            }} onClick={() => onClose()} />
                        )
                    }
                </Box>
                
                {children}
            </Box>

        </Box>
    )
}

export default Modal;