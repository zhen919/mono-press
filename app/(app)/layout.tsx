import {PropsWithChildren} from "react";
import Header from "@/components/Header";
import {Metadata} from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { zhCN } from '@clerk/localizations'

export const metadata: Metadata = {
  title: "App",
  description: "next app",
};


export default function RootLayout({children}: PropsWithChildren) {

    return (
        <ClerkProvider localization={zhCN}>
            <html lang="zh-CN" suppressHydrationWarning>
            <body className="m-0 h-full p-0">
            <div>
                <Header />

                <main className="relative z-[1] pt-[4.5rem] mt-18 fill-content">
                    {children}
                </main>
                <div className="page-head-gradient"></div>
            </div>
            </body>
            </html>
        </ClerkProvider>
    );

}
