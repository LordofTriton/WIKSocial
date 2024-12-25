
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../providers/app.provider";
import { Action } from "../../../actions/action";

export const useHomePage = () => {
    const { router, activeUser } = useApp();

    const [feedPage, setFeedPage] = useState(1);

    const { data: feed, isFetching: feedLoading, refetch: refetchFeed } = useQuery({
        queryKey: ["home-feed", activeUser?.userId],
        queryFn: async () => {
            const result = await Action.GetHomeFeed({ userId: activeUser?.userId, page: feedPage, pageSize: 50 });

            if (result.success && result.data) return result.data;
            else return [];
        },
        enabled: typeof activeUser?.userId !== undefined,
    });

    return {
        router,
        activeUser,
        
        feed,
        feedLoading,

        feedPage,
        setFeedPage
    }
}