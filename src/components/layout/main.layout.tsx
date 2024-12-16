"use client"

import { ReactNode } from "react";
import { OverSection } from "../ads/overSection.component";
import { RightSection } from "../ads/rightSection.component";
import { LeftNav } from "../nav/left.nav";
import { TopNav } from "../nav/top.nav";
import { useApp } from "../../providers/app.provider";
import { ThemeEnum } from "../../constants/enums/misc.enums";

interface IProps {
    children?: ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
    const { darkMode } = useApp();

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="relative bg-whitesmoke dark:bg-night">
                <OverSection />
                <TopNav />

                <div className="flex mx-auto justify-between relative w-11/12 px-10">
                    <LeftNav />

                    <div className="w-full md:w-10/12 xl:w-7/12 block sticky top-0 p-5 px-9">
                        { children }
                    </div>

                    <RightSection />
                </div>
            </div>
        </div>
    );
};