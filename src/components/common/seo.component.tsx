import Head from "next/head";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    title?: string;
}

const SEO: React.FC<IProps> = ({
    title
}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>OmniPure Admin</title>
            <meta name="description" content="Admin Portal for OmniPure Connect" />
            
            <meta name="theme-color" content="#ffffff" />

            <link rel="icon" href="/logo.ico" />
            <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/icons/touch-icon-ipad.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icons/touch-icon-iphone-retina.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="167x167"
                href="/icons/touch-icon-ipad-retina.png"
            />

            <link rel="manifest" href="/manifest.json" />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://omni-pure.com" />
            <meta name="twitter:title" content="OmniPure Admin - Portal" />
            <meta name="twitter:description" content="OmniPure Admin - Portal" />
            <meta name="twitter:image" content="/icons/twitter.png" />
            
            <meta property="og:type" content="website" />
            <meta property="og:title" content="OmniPure Admin - Portal" />
            <meta property="og:description" content="OmniPure Admin - Portal" />
            <meta property="og:site_name" content="OmniPure Admin - Portal" />
            <meta property="og:url" content="https://omni-pure.com" />
            <meta property="og:image" content="/icons/upload-icon.png" />
            
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_2048.png"
                sizes="2048x2732"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_1668.png"
                sizes="1668x2224"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_1536.png"
                sizes="1536x2048"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_1125.png"
                sizes="1125x2436"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_1242.png"
                sizes="1242x2208"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_750.png"
                sizes="750x1334"
            />
            <link
                rel="apple-touch-startup-image"
                href="/images/apple_splash_640.png"
                sizes="640x1136"
            />
        </Head>
    )
}

export default SEO;