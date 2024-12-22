"use client"

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useApp } from "../../../../providers/app.provider";
import { FcGoogle } from "react-icons/fc";
import { FaVk, FaYandexInternational } from "react-icons/fa";

export default function MainSettingsPage() {
    const { router, activeUser, updateActiveUser, deleteUser } = useApp();
    const [editMail, setEditMail] = useState(false);

    const [userData, setUserData] = useState({
        email: activeUser?.email ?? ""
    });

    useEffect(() => {
        setUserData({ email: activeUser?.email ?? "" });
    }, [activeUser]);
    
    return (
        <div className="bg-white dark:bg-eerie-black rounded-xl">
            <div className="flex flex-row justify-center items-center px-5 py-3 border-b-2 border-whitesmoke dark:border-night">
                <Link href="/me/settings"><ArrowLeftIcon className="w-8 h-8 text-night dark:text-gray-300 mr-3 cursor-pointer rounded-full hover:bg-whitesmoke p-1" /></Link>
                <span className="flex flex-1 text-base font-semibold text-night dark:text-gray-300">Main</span>
                { userData.email !== activeUser?.email && ( <span className="text-base font-semibold text-tang-blue dark:text-celestial-blue cursor-pointer" onClick={() => { updateActiveUser({ ...activeUser, ...userData }); setEditMail(false); }}>Save</span> )}
            </div>

            <div className="flex flex-col mt-3 py-2 px-6 pb-10">
                <span className="text-base font-semibold text-night dark:text-gray-300">Mail</span>

                {
                    editMail ? <input type="text" className="form-input rounded-lg w-96 bg-whitesmoke dark:bg-ash focus:bg-white border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-3 px-5 mt-3" placeholder="Mail" value={userData?.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /> :
                    <>
                        <span className="text-base font-medium text-night dark:text-gray-300 mt-1">{activeUser?.email ?? ""}</span>
                        <span className="text-base font-semibold text-celestial-blue cursor-pointer mt-1" onClick={() => setEditMail(true)}>Change</span>
                    </>
                }

                <span className="text-base font-semibold text-night dark:text-gray-300 mt-8">Password</span>

                <span className="text-base font-medium text-night dark:text-gray-300 mt-1">********</span>
                <span className="text-base font-semibold text-celestial-blue cursor-pointer mt-1" onClick={() => null}>Change</span>

                <span className="text-base font-semibold text-night dark:text-gray-300 mt-8">Plus Subscription</span>

                <span className="text-base font-medium text-night dark:text-gray-300 mt-1">Not Active</span>
                <span className="text-base font-semibold text-celestial-blue cursor-pointer mt-1" onClick={() => null}>Buy</span>

                <span className="text-base font-semibold text-night dark:text-gray-300 mt-8">Linked Accounts</span>

                <div className="flex flex-row justify-start items-center mt-2">
                    <div className="flex flex-row justify-center items-center bg-whitesmoke dark:bg-ash rounded-xl px-3 py-2 mr-3 cursor-pointer">
                        <FcGoogle className="w-6 h-6" />
                        <span className="text-base font-medium text-night dark:text-gray-300 ml-2">Google</span>
                    </div>
                    <div className="flex flex-row justify-center items-center bg-whitesmoke dark:bg-ash rounded-xl px-3 py-2 mr-3 cursor-pointer">
                        <FaYandexInternational className="w-6 h-6 text-black dark:text-gray-300" />
                        <span className="text-base font-medium text-night dark:text-gray-300 ml-2">Yandex</span>
                    </div>
                    <div className="flex flex-row justify-center items-center bg-whitesmoke dark:bg-ash rounded-xl px-3 py-2 mr-3 cursor-pointer">
                        <FaVk className="w-6 h-6 text-black dark:text-gray-300" />
                        <span className="text-base font-medium text-night dark:text-gray-300 ml-2">Vkontakte</span>
                    </div>
                </div>

                <span className="text-base font-semibold text-night dark:text-gray-300 mt-8">Danger Zone</span>

                <span className="text-base font-semibold text-celestial-blue cursor-pointer mt-2" onClick={() => deleteUser(() => router.push("/"))}>Delete Account</span>
                
            </div>
        </div>
    );
}
