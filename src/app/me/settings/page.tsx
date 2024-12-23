"use client"

import { BellIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PiCheckSquareOffset } from "react-icons/pi";

export default function MeSettingsPage() {
    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl mt-5">
            <div className="px-6 py-4 border-b-2 border-whitesmoke dark:border-night">
                <span className="text-base font-semibold text-night dark:text-gray-300">Settings</span>
            </div>

            <div className="py-2 px-1.5">
                <Link href="/me/settings/blog">
                    <div className="flex flex-row justify-center items-center rounded-xl cursor-pointer px-7 py-3 hover:bg-whitesmoke text-night dark:text-gray-300 dark:hover:bg-ash">
                        <UserIcon className="w-7 h-7 mr-4" />
                        <div className="flex flex-col flex-1">
                            <span className="text-md font-semibold">Blog</span>
                            <span className="text-sm font-normal">Title, Description</span>
                        </div>
                    </div>
                </Link>
                <Link href="/me/settings/feeds">
                    <div className="flex flex-row justify-center items-center rounded-xl cursor-pointer px-7 py-3 hover:bg-whitesmoke mt-3 text-night dark:text-gray-300 dark:hover:bg-ash">
                        <PiCheckSquareOffset className="w-7 h-7 mr-4" />
                        <div className="flex flex-col flex-1">
                            <span className="text-md font-semibold">Ribbon</span>
                            <span className="text-sm font-normal">Feed Settings, Filtering, Blocked</span>
                        </div>
                    </div>
                </Link>
                <Link href="/me/settings/general">
                    <div className="flex flex-row justify-center items-center rounded-xl cursor-pointer px-7 py-3 hover:bg-whitesmoke mt-3 text-night dark:text-gray-300 dark:hover:bg-ash">
                        <Cog6ToothIcon className="w-7 h-7 mr-4" />
                        <div className="flex flex-col flex-1">
                            <span className="text-md font-semibold">Main</span>
                            <span className="text-sm font-normal">Login Methods, Account Deletion</span>
                        </div>
                    </div>
                </Link>
                <Link href="/me/settings/notifications">
                    <div className="flex flex-row justify-center items-center rounded-xl cursor-pointer px-7 py-3 hover:bg-whitesmoke mt-3 text-night dark:text-gray-300 dark:hover:bg-ash">
                        <BellIcon className="w-7 h-7 mr-4" />
                        <div className="flex flex-col flex-1">
                            <span className="text-md font-semibold">Notifications</span>
                            <span className="text-sm font-normal">Notifications, Letters</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
