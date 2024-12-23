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
import { useApp } from "../../providers/app.provider";
import { BsCompass, BsCompassFill } from "react-icons/bs";
import { LuMonitorCheck } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { PiCheckSquareOffset, PiCompass, PiCompassFill } from "react-icons/pi";
import Link from "next/link";

const menuButtons = [
    {
        label: "Popular",
        icon: <OutlineFireIcon className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <SolidFireIcon className="w-6 h-6 text-celestial-blue" />,
        route: "/",
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
    },
    {
        label: "Messages",
        icon: <OutlineChatBubbleLeftEllipsisIcon className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <SolidChatBubbleLeftEllipsisIcon className="w-6 h-6 text-celestial-blue" />,
        route: "/messages",
        alert: false
    },
    {
        label: "Rating",
        icon: <PiCompass className="w-6 h-6 text-night dark:text-gray-300" />,
        activeIcon: <PiCompassFill className="w-6 h-6 text-celestial-blue" />,
        route: "/discovery",
        alert: false
    }
]

export const LeftNav = () => {
    const pathname = usePathname();
    const { toggleDarkMode } = useApp();

    return (
        <div className="hidden tablet:block tablet:w-80 max-w-left-layout-content sticky top-16 pt-5 pr-4" style={{ height: "calc(100vh - 4rem)" }}>
            <div>
                {
                    menuButtons.map((button, index) =>
                        <Link href={button.route} key={index}>
                            <div className={`flex flex-row ${pathname.includes(button.route) ? "bg-white dark:bg-ash" : "hover:bg-white dark:hover:bg-ash"} rounded-xl justify-between items-center px-3 py-3 mb-1 cursor-pointer text-night dark:text-gray-300`}>
                                { pathname.includes(button.route) ? button.activeIcon : button.icon }

                                <span className={`text-base ${!pathname.includes(button.route) ? "text-night dark:text-gray-300" : ""} flex-1 font-medium px-3 py-0`}>{button.label}</span>

                                {button.alert && ( <div className="w-2 h-2 rounded-full bg-celestial-blue"></div> )}
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};