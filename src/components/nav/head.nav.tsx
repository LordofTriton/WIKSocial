"use client"

import { 
    FireIcon as OutlineFireIcon,
    ClockIcon as OutlineClockIcon,
    ChatBubbleLeftEllipsisIcon as OutlineChatBubbleLeftEllipsisIcon
} from "@heroicons/react/24/outline";
import { 
    FireIcon as SolidFireIcon,
    ClockIcon as SolidClockIcon,
    ChatBubbleLeftEllipsisIcon as SolidChatBubbleLeftEllipsisIcon
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { PiCheckSquareOffset, PiCompass, PiCompassFill } from "react-icons/pi";
import Link from "next/link";
import useDrop from "../../hooks/misc/useDrop";
import { IoFilter } from "react-icons/io5";
import DatetimeHelper from "../../helpers/datetime.helper";

const menuButtons = [
    {
        label: "Popular",
        icon: <OutlineFireIcon className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <SolidFireIcon className="w-6 h-6 text-celestial-blue" />,
        route: "/popular",
        alert: true
    },
    {
        label: "Fresh",
        icon: <OutlineClockIcon className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <SolidClockIcon className="w-6 h-6 text-celestial-blue" />,
        route: "/fresh",
        alert: false
    },
    {
        label: "My Feed",
        icon: <PiCheckSquareOffset className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <PiCheckSquareOffset className="w-6 h-6 text-celestial-blue" />,
        route: "/my-feed",
        alert: true
    }
]

export const HeadNav = () => {
    const pathname = usePathname();
    const { state: showSortDrop, setState: setShowSortDrop, ref: sortDropRef } = useDrop();

    return (
        <div className="bg-white dark:bg-eerie-black flex flex-row justify-between items-center border-b border-glass px-3 tablet:hidden mobile:mt-4 mobile:rounded-t-xl">
            <div>
            {
                menuButtons.map((button, index) =>
                    <Link href={button.route} key={index}>
                        <p className={`inline-flex items-center text-base font-normal text-night dark:text-gray-400 mx-2 py-3 border-b-4 ${pathname.includes(button.route) ? "border-celestial-blue dark:text-gray-300" : "border-transparent"} cursor-pointer mr-2`}>
                            {button.label}
                            {button.alert && ( <span className="block w-1 h-1 rounded-full bg-celestial-blue ml-2"></span> )}
                        </p>
                    </Link>
                )
            }
            </div>

            <div className="h-full relative pr-3">
                <IoFilter className="w-5 h-5 text-night dark:text-gray-300 cursor-pointer" onClick={() => setShowSortDrop(true)} />

                {
                    showSortDrop && (
                        <div ref={sortDropRef} className="w-48 bg-white dark:bg-eerie-black rounded-xl p-2 absolute top-full right-0 shadow-md border border-transparent dark:border-glass">
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
        </div>
    );
};