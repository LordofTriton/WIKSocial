"use client"

import { FcGoogle } from "react-icons/fc";
import { useModal } from "../../../providers/modal.provider";
import Modal from "../../common/modal.component";
import { FaVk, FaYandexInternational } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { useApp } from "../../../providers/app.provider";

export const SignupModal = () => {
    const { router } = useApp();
    const { currentModal, toggleModal, closeModal } = useModal();

    return (
        <Modal
            open={currentModal === "signup"}
            onClose={() => closeModal()}
            onGoBack={() => toggleModal("login")}
        >
            <div className="flex flex-col flex-1 justify-center items-center">
                <div className="bg-alice-blue rounded-xl mt-3 px-2 py-3 border border-gray-300 border-solid">
                    <h4 className="font-russoOne text-black dark:text-white text-xl">WIK</h4>
                </div>

                <span className="text-2xl text-black dark:text-gray-300 font-semibold mt-5">Sign Up</span>

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
                    <div className="bg-whitesmoke flex flex-row justify-center items-center rounded-xl px-5 py-3 mb-3 cursor-pointer hover:bg-gray-200" onClick={() => toggleModal("signup.mail")}>
                        <GoMail className="w-6 h-6 text-black" />
                        <div className="flex flex-1 flex-row justify-center items-center">
                            <span className="text-md text-black dark:text-gray-300 font-semibold">Mail</span>
                        </div>
                        <div className="w-6 h-6"></div>
                    </div>
                </div>
                
                <span className="w-40 text-sm text-black dark:text-gray-300 font-normal mt-5 text-center">
                    By registering, you agree with the
                    <span className="text-tang-blue cursor-pointer" onClick={() => router.push("/terms")}> Terms of Use.</span>
                </span>
            </div>
        </Modal>
    );
};