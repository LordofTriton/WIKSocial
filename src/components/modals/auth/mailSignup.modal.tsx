"use client"

import { useModal } from "../../../providers/modal.provider";
import Modal from "../../common/modal.component";
import { useApp } from "../../../providers/app.provider";
import { useMailSignupModal } from "../../../hooks/components/modals/auth/mailSignupModal.hook";

export const MailSignupModal = () => {
    const {
        router,
        activeUser,

        signupData,
        setSignupData,

        onSubmit,
        loading,

        currentModal,
        toggleModal,
        closeModal
    } = useMailSignupModal();

    return (
        <Modal
            open={currentModal === "signup.mail"}
            onClose={() => closeModal()}
            onGoBack={() => toggleModal("signup")}
        >
            <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-2xl text-black dark:text-gray-300 font-semibold mt-5">Sign Up</span>

                <div className="w-3/4 mt-10 mb-10">
                    <input type="text" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Username" value={signupData.username} onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />
                    <input type="email" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Mail" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
                    <input type="password" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5" placeholder="Password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />

                    <button className={`form-button w-full rounded-xl bg-tang-blue text-white py-2.5 mt-4 ${loading ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`} onClick={() => onSubmit()}>Register</button>
                </div>
            </div>
        </Modal>
    );
};