"use client"

import { useModal } from "../../../providers/modal.provider";
import Modal from "../../common/modal.component";
import { useApp } from "../../../providers/app.provider";

export const MailSignupModal = () => {
    const { router } = useApp();
    const { currentModal, toggleModal, closeModal } = useModal();

    return (
        <Modal
            open={currentModal === "signup.mail"}
            onClose={() => closeModal()}
            onGoBack={() => toggleModal("signup")}
        >
            <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-2xl text-black dark:text-gray-300 font-semibold mt-5">Sign Up</span>

                <div className="w-3/4 mt-10 mb-10">
                    <input type="text" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Username" />
                    <input type="email" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Mail" />
                    <input type="password" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5" placeholder="Password" />

                    <button className="form-button w-full rounded-xl bg-tang-blue text-white py-2.5 mt-4">Register</button>
                </div>
            </div>
        </Modal>
    );
};