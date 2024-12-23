"use client"

import { ArrowRightStartOnRectangleIcon, BellIcon, BookmarkIcon, Cog6ToothIcon, CurrencyDollarIcon, MagnifyingGlassIcon, PencilIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { BsCircleHalf } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import useDrop from "../../hooks/misc/useDrop";
import { useApp } from "../../providers/app.provider";
import { useModal } from "../../providers/modal.provider";
import Link from "next/link";
import { FaAndroid } from "react-icons/fa";
import { PrimaryAd } from "../ads/primary.ad";

export const TopNav = () => {
    const { activeUser, toggleDarkMode, isAuthenticated, logOutUser, router } = useApp();
    const { toggleModal } = useModal();

    const { state: showAccDrop, setState: setShowAccDrop, ref: accountDropRef } = useDrop();
    const { state: showThemeDrop, setState: setShowThemeDrop, ref: themeDropRef } = useDrop();

    return (
        <>
            <div className="hidden lg-mobile:block"><PrimaryAd /></div>

            <div className="flex h-16 sticky top-0 z-10 bg-alice-blue dark:bg-raisin-black justify-center items-center">
                <div className="w-full flex flex-row justify-between items-center mobile:max-w-mobile-layout-content lg-mobile:max-w-lg-mobile-layout-content tablet:max-w-tablet-layout-content desktop:max-w-desktop-layout-content">
                    <Link href="/"><h4 className="font-russoOne text-black dark:text-white text-4xl">WIK</h4></Link>

                    <div className="w-auto h-full flex-row justify-end items-center hidden tablet:flex">
                        <div className="flex justify-center items-center cursor-pointer mr-6">
                            <MagnifyingGlassIcon className="w-6 h-6 text-black dark:text-white" />
                        </div>

                        <div className="flex justify-center items-center cursor-pointer mr-5">
                            <BellIcon className="w-6 h-6 text-black dark:text-white" />
                        </div>

                        <div className="flex flex-row justify-between items-center cursor-pointer bg-white dark:bg-jet-black rounded-full px-5 py-2 mr-4 shadow-md" onClick={() => toggleModal("create.post")}>
                            <PencilIcon className="w-5 h-5 text-black dark:text-gray-300 mr-2" />
                            <span className="text-base text-black dark:text-gray-300 font-medium">To write</span>
                        </div>

                        <div className="h-full relative flex justify-center items-center">
                            {
                                isAuthenticated ?
                                    <div className="flex flex-row justify-between items-center" onClick={() => setShowAccDrop(true)}>
                                        <div className="w-11 h-11 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer" style={{ backgroundImage: `url(${activeUser?.profileImage?.uri ? activeUser.profileImage.uri : "/assets/images/avatars/One.png"})` }}>
                                        </div>
                                        <ChevronDownIcon className="w-7 h-4 text-black dark:text-white cursor-pointer" />
                                    </div> :
                                    <div className="flex flex-row justify-center items-center bg-tang-blue rounded-full px-5 py-2 cursor-pointer" onClick={() => toggleModal("login")}>
                                        <span className="text-base text-white font-medium">Log In</span>
                                    </div>
                            }

                            {
                                showAccDrop && (
                                    <div ref={accountDropRef} className="flex flex-col bg-white dark:bg-eerie-black rounded-xl absolute top-full -right-6 p-4 shadow-md">
                                        <span className="text-base text-black dark:text-gray-300 font-semibold mb-3">My Profile</span>

                                        <div className="flex flex-row justify-between items-center hover:bg-whitesmoke dark:hover:bg-ash rounded-xl px-2 py-2 cursor-pointer" onClick={() => router.push("/me")}>
                                            <div className="w-14 h-14 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(${activeUser?.profileImage?.uri ? activeUser.profileImage.uri : "/assets/images/avatars/One.png"})` }}>
                                            </div>
                                            <div className="flex flex-col flex-1 w-64 pl-4">
                                                <span className="text-xl text-black dark:text-gray-300 font-semibold">{activeUser?.username ?? ""}</span>
                                                <span className="text-base text-black dark:text-gray-300 font-medium">Personal Blog</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-row justify-between items-center mt-4 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer">
                                            <PencilSquareIcon className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Drafts</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer">
                                            <BookmarkIcon className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Bookmarks</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer">
                                            <CurrencyDollarIcon className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Donations</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer" onClick={() => router.push("/me/settings")}>
                                            <Cog6ToothIcon className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Settings</span>
                                            <div className="relative">
                                                <BsCircleHalf className="w-5 h-5" onClick={(e) => { e.stopPropagation(); setShowThemeDrop(true) }} />

                                                {
                                                    showThemeDrop && (
                                                        <div ref={themeDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full right-0 shadow-md">
                                                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night">
                                                                <span className="text-sm flex-1 font-medium px-3 py-0">As on the device</span>
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => { e.stopPropagation(); toggleDarkMode(); setShowThemeDrop(false) }}>
                                                                <span className="text-sm flex-1 font-medium px-3 py-0">Light</span>
                                                            </div>
                                                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => { e.stopPropagation(); toggleDarkMode(); setShowThemeDrop(false) }}>
                                                                <span className="text-sm flex-1 font-medium px-3 py-0">Dark</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer">
                                            <SlDiamond className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Plus Subscription</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3 px-2 hover:bg-whitesmoke dark:hover:bg-ash text-night dark:text-gray-300 py-2 rounded-xl cursor-pointer" onClick={() => logOutUser(() => { setShowAccDrop(false); router.push("/", { scroll: false }); })}>
                                            <ArrowRightStartOnRectangleIcon className="w-7 h-7 mr-1" />
                                            <span className="text-base flex-1 font-medium px-3 py-0">Exit</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center bg-celestial-blue rounded-full px-3 py-2 cursor-pointer tablet:hidden">
                        <FaAndroid className="w-8 h-4" />
                        <span className="text-sm flex-1 font-semibold pl-1 pr-2 text-white">To the application</span>
                    </div>
                </div>
            </div>

            <div className="block mobile:hidden"><PrimaryAd /></div>
        </>
    );
};