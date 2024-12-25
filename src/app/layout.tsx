import 'reflect-metadata';

import type { Metadata } from "next";
import { Roboto, Russo_One } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../providers/app.provider";
import { ToastProvider } from "../providers/toast.provider";
import { MainLayout } from "../components/layout/main.layout";
import { ModalProvider } from "../providers/modal.provider";
import { cookies } from "next/headers";
import { ThemeProvider } from "../providers/theme.provider";

import Database from "../orm/database";

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
}>) {
  await Database.initialize();

  const SetCookie = async (key: string, value: any) => {
    'use server'
    const cookieStore = await cookies();
    cookieStore.set(key, value);
  }

  const GetCookie = async (key: string) => {
    'use server'
    const cookieStore = await cookies();
    const result = cookieStore.get(key);
    return result ?? null;
  }

  const DeleteCookie = async (key: string) => {
    'use server'
    const cookieStore = await cookies();
    cookieStore.delete(key);
  }

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased relative`}>
        <AppProvider getCookie={GetCookie} deleteCookie={DeleteCookie}>
          <ThemeProvider>
            <ToastProvider>
              <ModalProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </ModalProvider>
            </ToastProvider>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}