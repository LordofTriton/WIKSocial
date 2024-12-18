import type { Metadata } from "next";
import { Roboto, Russo_One } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../providers/app.provider";
import { ToastProvider } from "../providers/toast.provider";
import { MainLayout } from "../components/layout/main.layout";
import { ModalProvider } from "../providers/modal.provider";
import { cookies } from 'next/headers';
import { CACHE_KEYS } from "../config/cache.config";
import { GetRedis } from "../util/redis.util";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const russoOne = Russo_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: 'WIK -- Games, Movies, Series, Development, Community',
  description: 'A platform for discussing games and movies. Gaming industry news, reviews, analytics, memes. Create your posts, comment on others, rate content, ...',
  keywords: ['Games', 'Movies', 'Series', 'Development', 'Community'],
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
  cachedData: any
}>) {
  const cookieStore = await cookies();

  const sessionId = cookieStore.get("sessionId");

  const accessCodeData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_ACCESS_CODE) : null;
  const activeUserData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_USER) : null;
  const activeSettingsData = sessionId ? await GetRedis(sessionId.value, CACHE_KEYS.REDIS_SETTINGS) : null;

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased relative`}>
        <AppProvider cachedData={{ activeUserData, activeSettingsData, accessCodeData }}>
            <ToastProvider>
              <ModalProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </ModalProvider>
            </ToastProvider>
        </AppProvider>
      </body>
    </html>
  );
}