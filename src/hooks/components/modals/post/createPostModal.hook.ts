
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../../providers/app.provider";
import { useToast } from "../../../../providers/toast.provider";
import { WikResponse } from "../../../../constants/responses/response";
import { AuthUserResponse } from "../../../../constants/responses/auth.responses";
import { useModal } from "../../../../providers/modal.provider";
import { Action } from "../../../../actions/action";
import { Community } from "../../../../constants/entities/community.entity";

export const useCreatePostModal = () => {
    const { router, activeUser } = useApp();

    const [postContent, setPostContent] = useState(null);

    const [communitySearchQuery, setCommunitySearchQuery] = useState("");
    const [selectedCommunity, setSelectedCommunity] = useState<Community>();

    const [adultContent, setAdultContent] = useState(false);

    const createPost = () => {
        // console.log('Saved data:', data);
        // setPostContent(data);
        // Optionally, send data to your backend here
    };

    // const { mutate: createPost, isPending: loading } = useMutation({
    //     mutationFn: async () => await Action.Login(loginData),
    //     onSuccess: (response: WikResponse<AuthUserResponse> | null) => {
    //         if (!response) return;
    //         console.log(response)

    //         if (response.success && response.data) onSuccess(response.data);
    //         else onFailure(response);
    //     },
    //     onError: (error) => console.log(error.message ?? "An error occurred.")
    // });

    return {
        router,
        activeUser,

        postContent,
        setPostContent,

        createPost,
        // loading,

        selectedCommunity,
        setSelectedCommunity,

        communitySearchQuery,
        setCommunitySearchQuery,

        adultContent,
        setAdultContent
    }
}