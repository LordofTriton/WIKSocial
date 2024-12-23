"use client"

import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useApp } from "../../../../providers/app.provider";

export default function BlogSettingsPage() {
    const { activeUser, updateActiveUser } = useApp();

    const [userData, setUserData] = useState({
        username: activeUser?.username ?? "",
        bio: activeUser?.bio ?? ""
    });

    useEffect(() => {
        setUserData({ username: activeUser?.username ?? "", bio: activeUser?.bio ?? "" });
    }, [activeUser]);

    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl mt-5">
            <div className="flex flex-row justify-center items-center px-5 py-3 border-b-2 border-whitesmoke dark:border-night">
                <Link href="/me/settings"><ArrowLeftIcon className="w-8 h-8 text-night dark:text-gray-300 mr-3 cursor-pointer rounded-full hover:bg-whitesmoke dark:hover:bg-ash p-1" /></Link>
                <span className="flex flex-1 text-base font-semibold text-night dark:text-gray-300">Blog</span>
                { (userData.username !== activeUser?.username || userData.bio !== activeUser?.bio) && ( <span className="text-base font-semibold text-tang-blue dark:text-celestial-blue cursor-pointer" onClick={() => updateActiveUser({ ...activeUser, ...userData })}>Save</span> ) }
            </div>

            <div className="flex flex-col mt-3 py-2 px-6 pb-10">
                <span className="text-base font-medium text-night dark:text-gray-300 mb-2">Name</span>
                <input type="text" className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Username" value={userData?.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                
                <span className="text-base font-medium text-night dark:text-gray-300 mb-2 mt-3">Description</span>
                <textarea className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mb-4 resize-none" placeholder="A few words about myself" value={userData?.bio} onChange={(e) => setUserData({ ...userData, bio: e.target.value })}></textarea>
            </div>
        </div>
    );
}
