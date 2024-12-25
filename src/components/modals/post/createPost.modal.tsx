"use client"

import { useModal } from "../../../providers/modal.provider";
import Modal from "../../common/modal.component";
import Editor from "../../editor/editor.component";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useDrop from "../../../hooks/misc/useDrop";
import { useCreatePostModal } from "../../../hooks/components/modals/post/createPostModal.hook";
import { SlGlobe, SlOptions } from "react-icons/sl";
import { FiEye } from "react-icons/fi";
import { TbRating18Plus } from "react-icons/tb";
import { LuTimerReset } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

export const CreatePostModal = () => {
    const { state: showCommunitiesDrop, setState: setShowCommunitiesDrop, ref: communitiesDropRef } = useDrop();
    const { state: showOptionsDrop, setState: setShowOptionsDrop, ref: optionsDropRef } = useDrop();

    const {
        router,
        activeUser,

        createPost,
        createPostLoading,

        selectedCommunity,
        setSelectedCommunity,

        communitySearchQuery,
        setCommunitySearchQuery,

        communities,
        communitiesLoading,

        newPost,
        setNewPost,

        currentModal,
        toggleModal,
        closeModal
    } = useCreatePostModal();

    return (
        <Modal
            open={currentModal === "create.post"}
            onClose={() => closeModal()}
            width="w-3/6"
            closeOnClickOut
        >
            <div className="w-full bg-white dark:bg-eerie-black">
                <div className="flex flex-row justify-between items-center px-4 pb-2 pl-8">
                    <div className="w-12 h-12 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer relative" style={{ backgroundImage: `url(${activeUser?.profileImage?.uri ?? ""})` }}>
                        {
                            selectedCommunity && (
                                <div className="w-6 h-6 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer border border-white dark:border-eerie-black absolute right-0 bottom-0" style={{ backgroundImage: `url(${selectedCommunity?.profileImage?.uri})` }}>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-start pl-3">
                        <span className="text-base font-medium text-night dark:text-gray-400">{activeUser?.username ?? ""}</span>
                        <div className="relative">
                            <span className="inline-flex items-center text-sm font-normal text-night dark:text-gray-400 cursor-pointer" onClick={() => setShowCommunitiesDrop(true)}>
                                {selectedCommunity?.name ?? "Public"}
                                <ChevronDownIcon className="w-3 h-3 ml-1" />
                            </span>

                            {
                                showCommunitiesDrop && (
                                    <div ref={communitiesDropRef} className="w-56 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full left-0 shadow-md border border-transparent dark:border-glass z-10">
                                        <input type="email" className="form-input rounded-lg w-full bg-whitesmoke dark:bg-ash border-0 text-night dark:text-gray-300 text-md border focus:border-red-300 py-1 px-3 mb-4" placeholder="Search" value={communitySearchQuery} onChange={(e) => setCommunitySearchQuery(e.target.value)} />

                                        <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke dark:hover:bg-ash py-2 rounded-xl cursor-pointer text-night dark:text-gray-300" onClick={(e) => { e.stopPropagation(); setSelectedCommunity(null); setShowCommunitiesDrop(false) }}>
                                            <SlGlobe className="w-5 h-5 ml-1" />
                                            <span className="text-sm flex-1 font-medium px-3 py-0">Public</span>
                                        </div>

                                        {
                                            communities && communities.length > 0 && communities.map((community, index) =>
                                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke dark:hover:bg-ash py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 mt-3" key={index} onClick={(e) => { e.stopPropagation(); setSelectedCommunity(null); setShowCommunitiesDrop(false) }}>
                                                    <div className="w-5 h-5 ml-1 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(${community?.profileImage?.uri})` }}></div>
                                                    <span className="text-sm flex-1 font-medium px-3 py-0">{community?.name}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <Editor onChange={(data) => setNewPost({ ...newPost, content: data })} />

                <div className="w-full flex flex-row justify-start items-center pl-8">
                    <button className={`text-lg font-medium text-white rounded-xl bg-celestial-blue px-4 py-2 ${createPostLoading ? "opacity-50" : ""}`} onClick={() => createPost()}>Publish</button>
                    <div className="relative py-2 mx-4">
                        <SlOptions className="w-8 h-8 text-night dark:text-gray-300 p-1 hover:bg-whitesmoke dark:hover:bg-ash rounded-full cursor-pointer" onClick={() => setShowOptionsDrop(true)} />

                        {
                            showOptionsDrop && (
                                <div ref={optionsDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute bottom-full left-0 shadow-md border border-transparent dark:border-glass z-10">
                                    <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:bg-ash" onClick={(e) => { e.stopPropagation(); }}>
                                        <FiEye className="w-5 h-5 ml-1" />
                                        <span className="text-sm flex-1 font-medium px-3 py-0">Preview</span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:bg-ash" onClick={(e) => { e.stopPropagation(); setNewPost({ ...newPost, sensitiveContent: !newPost.sensitiveContent }); setShowOptionsDrop(false); }}>
                                        <TbRating18Plus className="w-5 h-5 ml-1" />
                                        <span className="text-sm flex-1 font-medium px-3 py-0">{newPost.sensitiveContent ? "Unmark 18+" : "Mark 18+"}</span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:bg-ash" onClick={(e) => { e.stopPropagation(); }}>
                                        <LuTimerReset className="w-5 h-5 ml-1" />
                                        <span className="text-sm flex-1 font-medium px-3 py-0">Version History</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <span className="inline-flex items-center text-base flex-1 font-medium px-0 py-0 text-whitesmoke dark:text-gray-500">
                        Saved
                        <FaCheck className="w-3 h-3 ml-2" />
                    </span>
                </div>
            </div>
        </Modal>
    );
};