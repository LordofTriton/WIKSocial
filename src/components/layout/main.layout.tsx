"use client"

import { ReactNode } from "react";
import { LeftNav } from "../nav/left.nav";
import { TopNav } from "../nav/top.nav";
import { useApp } from "../../providers/app.provider";
import { HeadNav } from "../nav/head.nav";
import { SecondaryAd } from "../ads/secondary.ad";

interface IProps {
    children?: ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {

    return (
        <div className="min-h-screen relative bg-whitesmoke dark:bg-night">
            <TopNav />

            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-row justify-center tablet:justify-between relative mobile:max-w-mobile-layout-content lg-mobile:max-w-lg-mobile-layout-content tablet:max-w-tablet-layout-content desktop:max-w-desktop-layout-content">
                    <LeftNav />

                    <div className="w-full max-w-page-content sticky top-0">
                        { children }
                    </div>

                    <SecondaryAd />
                </div>
            </div>
        </div>
    );
};