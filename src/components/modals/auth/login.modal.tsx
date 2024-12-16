"use client"

import { FcGoogle } from "react-icons/fc";
import { useModal } from "../../../providers/modal.provider";
import Modal from "../../common/modal.component";
import { FaVk, FaYandexInternational } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export const LoginModal = () => {
    const { currentModal, closeModal } = useModal();

    return (
        <Modal
            open={currentModal === "login"}
            onClose={() => closeModal()}
        >
            <div className="flex flex-col flex-1 justify-center items-center">
                <div className="bg-alice-blue rounded-xl mt-3 px-2 py-3 border border-gray-500 border-solid">
                    <h4 className="font-russoOne text-black dark:text-white text-xl">WIK</h4>
                </div>

                <span className="text-2xl text-black dark:text-gray-300 font-semibold mt-5">Sign in to your account</span>

                <div className="w-3/4 mt-6">
                    <div className="bg-whitesmoke flex flex-row justify-center items-center rounded-xl px-5 py-3 mb-3 cursor-pointer hover:bg-gray-200">
                        <FcGoogle className="w-6 h-6" />
                        <div className="flex flex-1 flex-row justify-center items-center">
                            <span className="text-md text-black dark:text-gray-300 font-semibold">Continue with Google</span>
                        </div>
                        <div className="w-6 h-6"></div>
                    </div>
                    <div className="bg-whitesmoke flex flex-row justify-center items-center rounded-xl px-5 py-3 mb-3 cursor-pointer hover:bg-gray-200">
                        <FaYandexInternational className="w-6 h-6 text-black" />
                        <div className="flex flex-1 flex-row justify-center items-center">
                            <span className="text-md text-black dark:text-gray-300 font-semibold">Continue with Yandex</span>
                        </div>
                        <div className="w-6 h-6"></div>
                    </div>
                    <div className="bg-whitesmoke flex flex-row justify-center items-center rounded-xl px-5 py-3 mb-3 cursor-pointer hover:bg-gray-200">
                        <FaVk className="w-6 h-6 text-black" />
                        <div className="flex flex-1 flex-row justify-center items-center">
                            <span className="text-md text-black dark:text-gray-300 font-semibold">Continue with Vkontakte</span>
                        </div>
                        <div className="w-6 h-6"></div>
                    </div>
                    <div className="bg-whitesmoke flex flex-row justify-center items-center rounded-xl px-5 py-3 mb-3 cursor-pointer hover:bg-gray-200">
                        <GoMail className="w-6 h-6 text-black" />
                        <div className="flex flex-1 flex-row justify-center items-center">
                            <span className="text-md text-black dark:text-gray-300 font-semibold">Mail</span>
                        </div>
                        <div className="w-6 h-6"></div>
                    </div>
                </div>

                
                <span className="text-base text-black dark:text-gray-300 font-semibold mt-4">
                    Don't have an account?
                    <a className="text-md text-tang-blue font-semibold" href="?modal=signup"> Sign Up!</a>
                </span>

                
                <a className="text-xs text-tang-blue mt-4" href="/support#login">How do I log in via FB, Apple, or X?</a>
            </div>
        </Modal>
    );
};