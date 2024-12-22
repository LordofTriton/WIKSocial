"use client"

export const SecondaryAd = () => {

    return (
        <div className="hidden desktop:block w-106 max-w-right-layout-content sticky top-16 py-5" style={{ height: "calc(100vh - 4rem)" }}>
            <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl" style={{ backgroundImage: "url(/assets/images/rightAd.jpg)" }}></div>
        </div>
    );
};