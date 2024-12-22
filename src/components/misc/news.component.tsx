"use client"

import { 
    ChatBubbleOvalLeftIcon, ChevronDownIcon, ChevronUpIcon
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tempNews } from "../../data/temp/news.temp";
import useDrop from "../../hooks/misc/useDrop";

export const News = () => {
    const pathname = usePathname();
    const { state: showSortDrop, setState: setShowSortDrop, ref: sortDropRef } = useDrop();

    return (
        <>
            <div className="hidden tablet:block relative px-5 py-2">
                <span className="inline-flex items-center mt-4 text-base text-night dark:text-gray-300 cursor-pointer hover:text-platinum dark:hover:text-gray-500">
                    Today
                    <ChevronUpIcon className="w-4 h-4 ml-2" />
                </span>

                {
                    showSortDrop && (
                        <div ref={sortDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full left-0 shadow-md border border-transparent dark:border-glass">
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night">
                                <span className="text-sm flex-1 font-medium px-3 py-0">Today</span>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => {e.stopPropagation();}}>
                                <span className="text-sm flex-1 font-medium px-3 py-0">24 hours</span>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => {e.stopPropagation();}}>
                                <span className="text-sm flex-1 font-medium px-3 py-0">Week</span>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => {e.stopPropagation();}}>
                                <span className="text-sm flex-1 font-medium px-3 py-0">Month</span>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => {e.stopPropagation();}}>
                                <span className="text-sm flex-1 font-medium px-3 py-0">Year</span>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2 hover:bg-whitesmoke py-2 rounded-xl cursor-pointer text-night dark:text-gray-300 dark:hover:text-night" onClick={(e) => {e.stopPropagation();}}>
                                <span className="text-sm flex-1 font-medium px-3 py-0">All the time</span>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="w-full mb-4 bg-white dark:bg-eerie-black px-5 py-4 tablet:rounded-xl">
                {
                    tempNews.map((news, index) =>
                        <div className="mb-3" key={index}>
                            <span className="block text-base font-medium text-night dark:text-gray-300" key={index}>
                                {news.title}

                                <span className="inline-flex text-sm items-center text-night dark:text-gray-300 hover:text-celestial-blue dark:hover:text-celestial-blue cursor-pointer">
                                    <ChatBubbleOvalLeftIcon className="w-4 h-4 mr-1 ml-2" />
                                    {news.commentCount}
                                </span>
                            </span>
                        </div>
                    )
                }

                <span className="inline-flex items-center mt-4 text-base text-night dark:text-gray-300 cursor-pointer hover:text-platinum dark:hover:text-gray-500">
                    Show more...
                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                </span>
            </div>
        </>
    );
};