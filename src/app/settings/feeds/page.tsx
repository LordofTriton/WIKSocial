"use client"

import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { HomeDetaultTabEnum } from "../../../constants/enums/misc.enums";
import { useState, useEffect } from "react";
import { useApp } from "../../../providers/app.provider";
import { FeedSortTypeEnum } from "../../../constants/enums/feed.enums";

export default function FeedsSettingsPage() {
    const { activeSettings, updateActiveSettings } = useApp();

    const [settingsData, setSettingsData] = useState({
        homeDefault: activeSettings?.homeDefault ?? "",
        feedSort: activeSettings?.feedSort ?? "",
        blurSensitiveContent: activeSettings?.blurSensitiveContent ?? true
    });

    useEffect(() => {
        setSettingsData({
            homeDefault: activeSettings?.homeDefault ?? "",
            feedSort: activeSettings?.feedSort ?? "",
            blurSensitiveContent: activeSettings?.blurSensitiveContent ?? true
        });
    }, [activeSettings]);
    
    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl">
            <div className="flex flex-row justify-center items-center px-5 py-3 border-b-2 border-whitesmoke dark:border-night">
                <Link href="/settings"><ArrowLeftIcon className="w-8 h-8 text-night dark:text-gray-300 mr-3 cursor-pointer rounded-full hover:bg-whitesmoke p-1" /></Link>
                <span className="flex flex-1 text-base font-semibold text-night dark:text-gray-300">Ribbon</span>
                { (settingsData.homeDefault !== activeSettings?.homeDefault || settingsData.feedSort !== activeSettings?.feedSort || settingsData.blurSensitiveContent !== activeSettings?.blurSensitiveContent) && ( <span className="text-base font-semibold text-tang-blue dark:text-celestial-blue cursor-pointer" onClick={() => updateActiveSettings({ ...activeSettings, ...settingsData })}>Save</span> ) }
            </div>

            <div className="flex flex-col mt-3 py-2 px-6 pb-10">
                <span className="text-base font-medium text-night dark:text-gray-300 mb-2">Home Default</span>
                <select className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mb-4 cursor-pointer" value={settingsData.homeDefault} onChange={(e) => setSettingsData({ ...settingsData, homeDefault: e.target.value })}>
                    <option value={HomeDetaultTabEnum.POPULAR}>Popular</option>
                    <option value={HomeDetaultTabEnum.FRESH}>Fresh</option>
                    <option value={HomeDetaultTabEnum.MY_FEED}>My Feed</option>
                </select>
                
                <span className="text-base font-medium text-night dark:text-gray-300 mb-2 mt-3">Sorting my Feed</span>
                <select className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mb-4 cursor-pointer" value={settingsData.feedSort} onChange={(e) => setSettingsData({ ...settingsData, feedSort: e.target.value })}>
                    <option value={FeedSortTypeEnum.POPULARITY}>Popularity</option>
                    <option value={FeedSortTypeEnum.DATE}>Date</option>
                </select>
                
                <span className="text-base font-medium text-night dark:text-gray-300 mb-2 mt-3">Adult Content</span>
                <select className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mb-4 cursor-pointer" value={String(settingsData.blurSensitiveContent)} onChange={(e) => setSettingsData({ ...settingsData, blurSensitiveContent: e.target.value === "true" ? true : false })}>
                    <option value={"true"}>Blur 18+ entries in the feed.</option>
                    <option value={"false"}>Show All</option>
                </select>
            </div>
        </div>
    );
}
