import {PropsWithChildren} from "react";
import Header from "@/components/Header";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "App",
  description: "next app",
};

export default function RootLayout({children}: PropsWithChildren) {

    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <body className="m-0 h-full p-0">
        <div>
            <Header />

            <main className="relative z-[1] px-4 pt-[4.5rem] mt-18 fill-content md:px-0">
                {children}
            </main>
            <div className="page-head-gradient"></div>
        </div>
        </body>
        </html>
    );

}
