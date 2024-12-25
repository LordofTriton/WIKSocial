
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../../providers/app.provider";
import { useToast } from "../../../../providers/toast.provider";
import { WikResponse } from "../../../../constants/responses/response";
import { useModal } from "../../../../providers/modal.provider";
import { Action } from "../../../../actions/action";
import { Community } from "../../../../constants/entities/community.entity";
import { CreatePostRequest } from "../../../../constants/requests/post.requests";
import { Post } from "../../../../constants/entities/post.entity";

export const useCreatePostModal = () => {
    const { router, activeUser } = useApp();
    const toast = useToast();
    
    const { currentModal, toggleModal, closeModal } = useModal();

    const [newPost, setNewPost] = useState<CreatePostRequest>({
        userId: activeUser?.userId ?? 0,
        communityId: null,
        content: null,
        sensitiveContent: false
    });

    const [communitySearchQuery, setCommunitySearchQuery] = useState("");
    const [selectedCommunity, setSelectedCommunity] = useState<Community>();

    const { data: communities, isFetching: communitiesLoading, refetch: refetchCommunities } = useQuery({
        queryKey: ["createPost-communities", activeUser?.userId, communitySearchQuery],
        queryFn: async () => {
            const result = communitySearchQuery.length > 2 ? await Action.SearchCommunities({ query: communitySearchQuery, page: 1, pageSize: 50 }) : await Action.GetCommunities({ page: 1, pageSize: 50 });

            if (result.success && result.data) return result.data;
            else return [];
        },
        enabled: typeof activeUser?.userId !== undefined,
    });

    const { mutate: createPost, isPending: createPostLoading } = useMutation({
        mutationFn: async () => await Action.CreatePost(newPost),
        onSuccess: (response: WikResponse<Post> | null) => {
            if (!response) return;

            if (response.success && response.data) {
                toast.success(response.message);

                closeModal();
            }
            else toast.error(response.message);
        },
        onError: (error) => console.log(error.message ?? "An error occurred.")
    });

    return {
        router,
        activeUser,

        createPost,
        createPostLoading,

        selectedCommunity,
        setSelectedCommunity,

        communitySearchQuery,
        setCommunitySearchQuery,

        communities,
        communitiesLoading,

        newPost,
        setNewPost,

        currentModal,
        toggleModal,
        closeModal
    }
}