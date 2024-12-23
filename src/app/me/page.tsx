"use client"

import { BellIcon, Cog6ToothIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PiCheckSquareOffset } from "react-icons/pi";
import { useMePage } from "../../hooks/pages/me/mePage.hook";
import useDrop from "../../hooks/misc/useDrop";

export default function MePage() {
    const { state: showProfileDrop, setState: setShowProfileDrop, ref: profileDropRef } = useDrop();

    const {
        router,
        activeUser,

        activeTab,
        setActiveTab
    } = useMePage();

    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl overflow-hidden mt-4">
            <div className="w-full h-52 bg-platinum dark:bg-ash relative flex justify-center items-center">
                <div className="flex flex-row justify-center items-center bg-whitesmoke dark:bg-eerie-black px-2 py-1 rounded-md cursor-pointer">
                    <PhotoIcon className="w-4 h-4 text-night dark:text-white mr-2" />
                    <span className="text-sm font-medium text-night dark:text-white">Add cover</span>
                </div>
                <div className="w-24 h-24 bg-cover bg-center bg-no-repeat rounded-full absolute left-6 -bottom-14 border-4 border-white dark:border-eerie-black" style={{ backgroundImage: `url(${activeUser?.profileImage?.uri ? activeUser.profileImage.uri : "/assets/images/avatars/One.png"})` }}>
                    <div className="w-full h-full bg-black opacity-0 hover:opacity-70 rounded-full flex justify-center items-center cursor-pointer" onClick={() => setShowProfileDrop(true)}>
                        <PhotoIcon className="w-7 h-7 text-gray-300 dark:text-gray-300" />
                    </div>

                    {
                        showProfileDrop && (
                            <div ref={profileDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full left-0 border-1 border-ash shadow-lg">
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke dark:hover:bg-ash py-2 rounded-xl cursor-pointer text-night dark:text-gray-300">
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Look</span>
                                </div>
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke dark:hover:bg-ash py-2 rounded-xl cursor-pointer text-night dark:text-gray-300" onClick={(e) => {e.stopPropagation();}}>
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Change</span>
                                </div>
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke dark:hover:bg-ash py-2 rounded-xl cursor-pointer text-night dark:text-gray-300" onClick={(e) => {e.stopPropagation();}}>
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Video Avatar</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="px-6">
                <div className="w-full h-16 flex flex-row justify-end items-center">
                    <Cog6ToothIcon className="w-78 h-8 p-1 rounded-md bg-whitesmoke text-night dark:bg-ash dark:text-gray-300 hover:bg-whitesmoke dark:hover:bg-gray-200 dark:hover:text-night cursor-pointer" onClick={() => router.push("/me/settings")} />
                </div>

                <h1 className="flex flex-1 text-2xl font-medium text-night dark:text-gray-300">{activeUser?.username ?? ""}</h1>

                <span className="flex flex-1 text-base font-normal text-gray-300 dark:text-gray-500">from 13.12.2024</span>

                <div className="flex flex-row justify-start items-center mt-2">
                    <span className="text-base font-normal text-night dark:text-gray-400 mr-3">0 followers</span>
                    <span className="text-base font-normal text-night dark:text-gray-400">0 subscription</span>
                </div>

                <div className="w-full mt-4 flex flex-row justify-start items-center">
                    <p className={`text-base font-normal text-night dark:text-gray-400 mr-3 py-4 border-b-4 ${activeTab === "POSTS" ? "border-celestial-blue" : "border-transparent"} cursor-pointer mr-2`} onClick={() => setActiveTab("POSTS")}>Posts</p>
                    <p className={`text-base font-normal text-night dark:text-gray-400 mr-3 py-4 border-b-4 ${activeTab === "COMMENTS" ? "border-celestial-blue" : "border-transparent"} cursor-pointer`} onClick={() => setActiveTab("COMMENTS")}>Comments</p>
                </div>
            </div>
        </div>
    );
}
