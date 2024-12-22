
"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useApp } from "../../../providers/app.provider";

export const useMePage = () => {
    const { router, activeUser } = useApp();

    const [activeTab, setActiveTab] = useState<"POSTS" | "COMMENTS">("POSTS");

    return {
        router,
        activeUser,

        activeTab,
        setActiveTab
    }
}