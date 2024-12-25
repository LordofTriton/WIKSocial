"use client"

import { SlOptions } from "react-icons/sl";
import useDrop from "../../hooks/misc/useDrop";
import { FaRegHeart } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import { BiHide } from "react-icons/bi";
import { Post as PostEntity } from "../../constants/entities/post.entity";
import { useEffect, useState } from "react";
import EditorJsHtml from 'editorjs-html';

interface IProps {
    data: PostEntity;
}

export const Post: React.FC<IProps> = ({ data }) => {
    const [postData, setPostData] = useState<PostEntity>(data);
    const [postContent, setPostContent] = useState<string[]>([]);
    const { state: showOptionsDrop, setState: setShowOptionsDrop, ref: optionsDropRef } = useDrop();

    useEffect(() => {
        if (!data) return;

        const editorJsHtml = EditorJsHtml();
        const convertedHtml = editorJsHtml.parse(JSON.parse(data.content)); // 'savedData' is the JSON from the database
        setPostContent(convertedHtml);
    }, [data]);

    return (
        <div className="w-full rounded-xl bg-white dark:bg-eerie-black mb-3 overflow-hidden">
            <div className="flex flex-row justify-between items-center pt-5 px-4 pb-2">
                <div className="w-10 h-10 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer relative" style={{ backgroundImage: `url(${data?.author?.profileImage?.uri})` }}>
                    {
                        data.community && (
                            <div className="w-5 h-5 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer border border-white dark:border-eerie-black absolute right-0 bottom-0" style={{ backgroundImage: `url(${data?.community?.profileImage?.uri})` }}>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-1 flex-col justify-center items-start pl-3">
                    <span className="text-base font-medium text-night dark:text-gray-400">{data?.author?.username ?? "Placeholder"}</span>
                    <span className="text-sm font-normal text-night dark:text-gray-400">
                        Oftop
                        <span className="text-sm font-normal text-night dark:text-gray-500 pl-2">06:30</span>
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center relative h-full">
                    <span className="text-sm font-medium text-night bg-whitesmoke dark:text-gray-300 dark:bg-ash px-3 py-1 rounded-xl mr-3 cursor-pointer hover:bg-celestial-blue hover:text-white dark:hover:bg-raisin-black">Subscribe</span>
                    <SlOptions className="w-8 h-8 text-night dark:text-gray-300 p-2 hover:bg-whitesmoke dark:hover:bg-ash rounded-full cursor-pointer" onClick={() => setShowOptionsDrop(true)} />

                    {
                        showOptionsDrop && (
                            <div ref={optionsDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full right-0 shadow-md border border-transparent dark:border-glass">
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night">
                                    <FaRegHeart className="w-5 h-5 ml-1" />
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Reaction</span>
                                </div>
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => { e.stopPropagation(); }}>
                                    <GoGift className="w-5 h-5 ml-1" />
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Gift Plus</span>
                                </div>
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => { e.stopPropagation(); }}>
                                    <FiFlag className="w-5 h-5 ml-1" />
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Complain</span>
                                </div>
                                <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => { e.stopPropagation(); }}>
                                    <BiHide className="w-5 h-5 ml-1" />
                                    <span className="text-sm flex-1 font-medium px-3 py-0">Hide</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="px-4 py-3" dangerouslySetInnerHTML={{ __html: postContent }}></div>
        </div>
    );
};