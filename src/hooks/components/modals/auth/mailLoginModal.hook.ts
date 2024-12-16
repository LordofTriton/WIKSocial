
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../../providers/app.provider";
import { useToast } from "../../../../providers/toast.provider";
import { WikResponse } from "../../../../constants/responses/response";
import { AuthUserResponse } from "../../../../constants/responses/auth.responses";
import { LoginAction } from "../../../../actions/auth/login.action";
import { useModal } from "../../../../providers/modal.provider";
import { FindUserAction } from "../../../../actions/user/findUser.action";

export const useMailLoginModal = () => {
    const { router, activeUser, updateAccessCode, updateActiveUser } = useApp();
    const { currentModal, toggleModal, closeModal } = useModal();

    const toast = useToast();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const onSuccess = async (data: AuthUserResponse) => {
        toast.success("Login successful!");
        await updateAccessCode(data.accessCode);

        let user = await FindUserAction({ userId: data.userId });
        if (!user.data) return;

        await updateActiveUser(user.data!);

        closeModal();
    }

    const onFailure = async (response: WikResponse<any>) => {
        toast.error(response.message);
    }

    const { mutate: onSubmit, isPending: loading } = useMutation({
        mutationFn: async () => await LoginAction(loginData),
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