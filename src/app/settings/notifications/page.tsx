"use client"

import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useApp } from "../../../providers/app.provider";
import { useEffect, useState } from "react";
import { Settings } from "../../../constants/entities/settings.entity";

export default function NotificationsSettingsPage() {
    const { activeSettings, updateActiveSettings } = useApp();

    const [settingsData, setSettingsData] = useState(activeSettings ?? {} as Settings);

    useEffect(() => {
        setSettingsData(activeSettings ?? {} as Settings);
    }, [activeSettings]);

    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl">
            <div className="flex flex-row justify-center items-center px-5 py-3 border-b-2 border-whitesmoke dark:border-night">
                <Link href="/settings"><ArrowLeftIcon className="w-8 h-8 text-night dark:text-gray-300 mr-3 cursor-pointer rounded-full hover:bg-whitesmoke p-1" /></Link>
                <span className="flex flex-1 text-base font-semibold text-night dark:text-gray-300">Notifications</span>
                { settingsData !== activeSettings && ( <span className="text-base font-semibold text-tang-blue dark:text-celestial-blue cursor-pointer" onClick={() => updateActiveSettings(settingsData)}>Save</span> )}
            </div>

            <div className="flex flex-col mt-3 py-2 px-6 pb-10">
                <span className="text-base font-semibold text-night dark:text-gray-300">Letters to the mail</span>

                <div className="flex flex-row justify-center items-center mt-6">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailCommentReplies ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailCommentReplies: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Replies to my comments</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailCommentMentions ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailCommentMentions: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Mentions in comments</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailNewPostComment ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailNewPostComment: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">New comments on posts</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailNewPosts ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailNewPosts: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">New Posts</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailBestOfTheWeek ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailBestOfTheWeek: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Best of the Week</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.emailPostCommentRatings ?? false} onChange={(e) => setSettingsData({ ...settingsData, emailPostCommentRatings: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Post and Comment ratings</span>
                </div>
                
                <span className="text-base font-semibold text-night dark:text-gray-300 mt-7">Website notifications</span>
                
                <div className="flex flex-row justify-center items-center mt-6">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.commentReplies ?? false} onChange={(e) => setSettingsData({ ...settingsData, commentReplies: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Replies to my comments</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.commentMentions ?? false} onChange={(e) => setSettingsData({ ...settingsData, commentMentions: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Mentions in comments</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.newPostComment ?? false} onChange={(e) => setSettingsData({ ...settingsData, newPostComment: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">New comments on posts</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.newFollowers ?? false} onChange={(e) => setSettingsData({ ...settingsData, newFollowers: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">New Followers</span>
                </div>
                <div className="flex flex-row justify-center items-center mt-4">
                    <input type="checkbox" className="rounded text-celestial-blue bg-whitesmoke dark:bg-night w-5 h-5" checked={settingsData?.postCommentRatings ?? false} onChange={(e) => setSettingsData({ ...settingsData, postCommentRatings: e.target.checked })} />
                    <span className="flex flex-1 text-base font-medium text-night dark:text-gray-300 ml-3">Post and Comment ratings</span>
                </div>
            </div>
        </div>
    );
}
