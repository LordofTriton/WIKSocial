
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../../providers/app.provider";
import { useToast } from "../../../../providers/toast.provider";
import { WikResponse } from "../../../../constants/responses/response";
import { AuthUserResponse } from "../../../../constants/responses/auth.responses";
import { useModal } from "../../../../providers/modal.provider";
import { Action } from "../../../../actions/action";

export const useMailLoginModal = () => {
    const { router, activeUser, updateAccessCode, updateActiveUser, updateActiveSettings } = useApp();
    const { currentModal, toggleModal, closeModal } = useModal();

    const toast = useToast();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const onSuccess = async (data: AuthUserResponse) => {
        closeModal();
        toast.success("Login successful!");

        let user = await Action.FindUser({ userId: data.userId }, { settings: true });
        
        if (user.data) await updateActiveUser(user.data, false);
        if (user.data.settings) await updateActiveSettings(user.data.settings, false);
        
        await updateAccessCode(data.accessCode);
    }

    const onFailure = async (response: WikResponse<any>) => {
        toast.error(response.message);
    }

    const { mutate: onSubmit, isPending: loading } = useMutation({
        mutationFn: async () => await Action.Login(loginData),
        onSuccess: (response: WikResponse<AuthUserResponse> | null) => {
            if (!response) return;

            if (response.success && response.data) onSuccess(response.data);
            else onFailure(response);
        },
        onError: (error) => console.log(error.message ?? "An error occurred.")
    });

    return {
        router,
        toast,
        activeUser,

        loginData,
        setLoginData,

        onSubmit,
        loading,

        currentModal,
        toggleModal,
        closeModal
    }
}