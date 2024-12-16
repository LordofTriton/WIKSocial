"use client"

export const RightSection = () => {

    return (
        <div className="w-3/12 hidden xl:block sticky top-16 py-5" style={{ height: "calc(100vh - 4rem)" }}>
            <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl" style={{ backgroundImage: "url(/assets/images/rightAd.jpg)" }}></div>
        </div>
    );
};