
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
        toast.success("Login successful!");
        await updateAccessCode(data.userId, data.accessCode);

        let user = await Action.FindUser({ userId: data.userId });
        if (user.data) await updateActiveUser(user.data, false);

        let settings = await Action.FindSettings(data.userId);
        if (settings.data) await updateActiveSettings(settings.data, false);

        closeModal();
    }

    const onFailure = async (response: WikResponse<any>) => {
        toast.error(response.message);
    }

    const { mutate: onSubmit, isPending: loading } = useMutation({
        mutationFn: async () => await Action.Login(loginData),
        onSuccess: (response: WikResponse<AuthUserResponse> | null) => {
            if (!response) return;
            console.log(response)

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