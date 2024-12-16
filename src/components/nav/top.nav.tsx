"use client"

import { ArrowRightStartOnRectangleIcon, BellIcon, BookmarkIcon, Cog6ToothIcon, CurrencyDollarIcon, MagnifyingGlassIcon, PencilIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { BsCircleHalf } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";

export const TopNav = () => {
    const [showAccDrop, setShowAccDrop] = useState(false);

    return (
        <div className="flex flex-row h-16 sticky top-0 z-10 bg-alice-blue dark:bg-raisin-black justify-between items-center px-28">
            <h4 className="font-russoOne text-black dark:text-white text-4xl">WIK</h4>

            <div className="flex flex-row justify-end items-center">
                <div className="flex justify-center items-center cursor-pointer mr-6">
                    <MagnifyingGlassIcon className="w-6 h-6 text-black dark:text-white" />
                </div>

                <div className="flex justify-center items-center cursor-pointer mr-5">
                    <BellIcon className="w-6 h-6 text-black dark:text-white" />
                </div>

                <div className="flex flex-row justify-between items-center cursor-pointer bg-white dark:bg-jet-black rounded-full px-5 py-2 mr-4 shadow-md">
                    <PencilIcon className="w-5 h-5 text-black dark:text-gray-300 mr-2" />
                    <span className="text-base text-black dark:text-gray-300 font-medium">To write</span>
                </div>
                
                <div className="h-full flex flex-row justify-between items-center cursor-pointer relative">
                    <div className="w-11 h-11 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: "url(/assets/images/avatars/One.png)" }}>
                    </div>
                    <ChevronDownIcon className="w-7 h-4 text-black dark:text-white" />

                    <div className="flex flex-col bg-white dark:bg-eerie-black rounded-xl absolute top-full -right-6 p-4">
                        <span className="text-base text-black dark:text-gray-300 font-semibold mb-3">My Profile</span>

                        <div className="flex flex-row justify-between items-center">
                            <div className="w-14 h-14 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: "url(/assets/images/avatars/One.png)" }}>
                            </div>
                            <div className="flex flex-col flex-1 w-64 pl-4">
                                <span className="text-xl text-black dark:text-gray-300 font-semibold">LordTriton</span>
                                <span className="text-base text-black dark:text-gray-300 font-medium">Personal Blog</span>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-6 px-2 hover:bg-whitesmoke py-2 rounded-xl">
                            <PencilSquareIcon className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Drafts</span>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke py-2 rounded-xl">
                            <BookmarkIcon className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Bookmarks</span>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke py-2 rounded-xl">
                            <CurrencyDollarIcon className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Donations</span>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke py-2 rounded-xl relative">
                            <Cog6ToothIcon className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Settings</span>
                            <BsCircleHalf className="w-5 h-5 text-black dark:text-gray-300"  />
                        </div>
                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke py-2 rounded-xl">
                            <SlDiamond className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Plus Subscription</span>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke py-2 rounded-xl">
                            <ArrowRightStartOnRectangleIcon className="w-7 h-7 text-black dark:text-gray-300 mr-1" />
                            <span className="text-base text-night flex-1 font-medium px-3 py-0">Exit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};