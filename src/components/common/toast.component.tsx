"use client"

import { useEffect, useRef } from "react";
import { Icon } from "./icon.component";
import { ToastTypeEnum } from "../../constants/enums/misc.enums";
import { Toast } from "../../constants/models/toast.model";
import { Text } from "./text.component";
import { Box } from "./box.component";

interface IProps {
    data: Toast;
    onRemove: () => void;
}

export const ToastMessage: React.FC<IProps> = ({
    data,
    onRemove
}) => {

    return (
        <Box style={{
            width: "500px",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "10px 10px",
            marginTop: "15px",
            alignItems: "center",
            pointerEvents: "auto"
        }}>
            {/* <img
                src={
                    data.type === ToastTypeEnum.SUCCESS ? Asset.SuccessImage :
                    data.type === ToastTypeEnum.ERROR ? Asset.ErrorImage : Asset.LogoImage2
                }
                style={{
                    width: 35,
                    height: 35
                }}
            /> */}

            <Box style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0px 15px"
            }}>
                <Text size={13} style={{
                    flex: 1,
                    color: "black",
                    fontWeight: "500",
                }}>
                    {data.message}
                </Text>
            </Box>

            <Box style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                cursor: "pointer"
            }} onClick={() => onRemove()}>
                <Icon.IoClose size={20} color="black" />
            </Box>

        </Box>
    );
};