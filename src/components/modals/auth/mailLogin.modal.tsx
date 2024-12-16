"use client"

import Modal from "../../common/modal.component";
import { useMailLoginModal } from "../../../hooks/components/modals/auth/mailLoginModal.hook";

export const MailLoginModal = () => {
    const {
        router,
        activeUser,

        loginData,
        setLoginData,

        onSubmit,
        loading,

        currentModal,
        toggleModal,
        closeModal
    } = useMailLoginModal()

    return (
        <Modal
            open={currentModal === "login.mail"}
            onClose={() => closeModal()}
            onGoBack={() => toggleModal("login")}
        >
            <div className="flex flex-col flex-1 justify-center items-center">
                <span className="text-2xl text-black dark:text-gray-300 font-semibold mt-5">Sign in to your account</span>

                <div className="w-3/4 mt-10">
                    <input type="text" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5 mb-4" placeholder="Mail" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                    <input type="password" className="form-input rounded-xl w-full bg-whitesmoke focus:bg-white border-0 text-night text-md border focus:border-red-300 py-3 px-5" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />

                    <button className="form-button w-full rounded-xl bg-tang-blue text-white py-2.5 mt-4" onClick={() => onSubmit()} disabled={loading}>Log In</button>
                </div>

                <span className="text-base text-tang-blue dark:text-gray-300 font-medium mt-5 mb-5">Forgot your password?</span>
            </div>
        </Modal>
    );
};