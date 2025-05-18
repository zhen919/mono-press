import React from 'react';
import {Metadata} from "next";
import Container from "@/components/Container";
import Image from "next/image";
import AvatarImage from "@/public/avatar.png";
import {Github, Mail} from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from 'react';
import Balancer from "react-wrap-balancer";
import CustomTooltip from "@/components/CustomTooltip";
import XIcon from "@/components/svg/XIcon";
import {PersonData} from "@/data/person-data";

export const metadata: Metadata = {
  title: "首页",
};

export default function HomePage() {
    return (
        <Container>
            <div className="flex flex-col justify-between h-[calc(100vh-9rem)] w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-4 lg:mt-20 h-1/2">
                    <div className="flex flex-col lg:w-1/2 lg:mt-0 lg:h-1/2">
                        <h1 className="text-4xl mb-4">
                            <span className="">你好 👋</span>
                        </h1>
                        <h2 className="text-2xl mt-4">
                            <span className="">I&#39;m John!</span>
                        </h2>
                        <Balancer className="mt-4 text-base/8 text-gray-700 w-full max-w-full">
                            我是一名.Net开发人员，从事着客户端和后端的开发，也对前端的技术很感兴趣，Vue和React，最近在学习Next.js和Tailwind CSS。<br />

                            往后想成为一名独立开发者，也会和大家分享一些我在学习和工作中遇到的有趣的事情。<br />
                        </Balancer>

                        <ul className="flex space-x-4 mt-8 lg:mt-24">
                            <li className="flex gap-2 group">
                                <CustomTooltip content="Email" side="bottom">
                                    <a href={PersonData.Email} target="_blank" className="flex">
                                        <Mail color="white" className="size-9 bg-red-700/80 rounded-full px-2 py-1 cursor-pointer hover:scale-102" />
                                    </a>
                                </CustomTooltip>
                            </li>
                            <li className="flex gap-2 group">
                                <CustomTooltip content="Github" side="bottom">
                                    <a href={PersonData.Github} target="_blank" className="flex">
                                        <Github color="white" className="size-9 bg-gray-900 rounded-full px-2 py-1 cursor-pointer hover:scale-102" />
                                    </a>
                                </CustomTooltip>
                            </li>
                            <li className="flex gap-2 group">
                                <CustomTooltip content="X" side="bottom">
                                    <a href={PersonData.X} target="_blank" className="flex">
                                        <span className="flex size-9 bg-gray-900 rounded-full px-2 py-1 cursor-pointer hover:scale-102">
                                             <XIcon className="m-auto" />
                                        </span>
                                    </a>
                                </CustomTooltip>
                            </li>
                        </ul>

                        {/*<span className="text-sm text-zinc-500">网站还在逐步建设中...</span>*/}

                    </div>
                    <div>
                        <ViewTransition name="avatar">
                            <Image src={AvatarImage} alt="avatar" className="size-60 rounded-full" />
                        </ViewTransition>

                    </div>
                </div>


                <div className="flex mb-8">
                    <span className="text-center mx-auto text-zinc-500 text-xs">
                        云朵之下，只有风经过的声响。
                    </span>
                </div>
            </div>
        </Container>
    );
}
