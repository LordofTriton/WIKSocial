"use client"

import { ReactNode } from "react";
import { OverSection } from "../ads/overSection.component";
import { RightSection } from "../ads/rightSection.component";
import { LeftNav } from "../nav/left.nav";
import { TopNav } from "../nav/top.nav";

interface IProps {
    children?: ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {

    return (
        <>
            <OverSection />
            <TopNav />

            <div className="flex mx-auto justify-between relative w-10/12">
                <LeftNav />

                <div className="w-full md:w-9/12 xl:w-1/2 block sticky top-0 bg-indigo-600 p-20">
                    { children }
                </div>

                <RightSection />
            </div>
        </>
    );
};