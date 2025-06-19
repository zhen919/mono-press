"use client";

import NavigateCom from "@/components/NavigateCom";
import {NavigateData} from "@/data/navigate-data";
import Image from "next/image";
import useScrollDetector from "@/hooks/use-scroll-detector";
import {cn} from "@/libs/utils";
import {usePathname} from "next/navigation";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    useUser,
} from '@clerk/nextjs';
import {LogOut, User, User2Icon} from "lucide-react";
import { useAuth } from '@clerk/nextjs';
import * as Popover from "@radix-ui/react-popover";
import {useState} from "react";

export default function Header() {

    const { signOut } = useAuth();
    const {user} = useUser();
    const showBg = useScrollDetector(120);
    const [showPopover, setShowPopover] = useState<boolean>(false);

    const pathname = usePathname();
    const currentPathname = `/${pathname.split('/')[1]}`;

    const handleSignOut = () => {
        setShowPopover(false);
        signOut({redirectUrl: window.location.href}).then();
    };

    const UserAvatar = () => {
        return (
            user && user.hasImage ? (
                <Image
                    src={user.imageUrl}
                    alt="currentUser avatar"
                    width={40}
                    height={40}
                    className="select-none rounded-full md:h-10 md:w-10 m-auto"
                    unoptimized
                />
            ) : <User2Icon width={40} height={40} className="m-auto" />
        );
    };

    return (
        <header className={cn(`fixed top-0 left-0 w-screen h-[4.5rem] z-[9]`, showBg && 'bg-gray-50 shadow-sm')}>
            <div className={`mx-auto grid grid-areas-[left_right] grid-cols-[auto_4.5rem] min-h-0 w-full h-full max-w-7xl items-center px-4 md:px-0 `}>

                <NavigateCom items={NavigateData} currentPath={currentPathname} />

                <SignedOut>
                    <SignInButton mode="modal">
                        <button
                            type="button"
                            className="cursor-pointer"
                        >
                            <div className="flex size-10 rounded-full px-3 text-sm ring-1 ring-zinc-900/5 ">
                                <User className="h-5 m-auto" />
                            </div>
                        </button>
                    </SignInButton>

                </SignedOut>
                <SignedIn>
                    <Popover.Root open={showPopover} onOpenChange={() => setShowPopover(!showPopover)}>
                        <Popover.Trigger asChild>
                            <button
                                className=""
                                aria-label="user avatar"
                            >
                                <UserAvatar />
                            </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content asChild
                                className="z-50 w-[260px] rounded bg-white p-3 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity]
                                focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]
                                data-[state=open]:data-[side=bottom]:animate-slideUpAndFade
                                "
                                sideOffset={5}
                            >
                                <div className="flex flex-col text-sm">
                                    <p className="font-medium mb-2 leading-[19px]">
                                        账号信息
                                    </p>

                                    <div className="mb-2 text-zinc-700 space-y-1">
                                        <p className="font-semibold">{user && user.fullName }</p>
                                        <p>{user && user.emailAddresses[0]. emailAddress}</p>
                                    </div>

                                    <hr className="text-zinc-300" />

                                    <button type="button" onClick={handleSignOut} className="outline-none text-zinc-600 flex justify-start pt-2 cursor-pointer hover:text-zinc-800">
                                        <LogOut size={16} className="my-auto mr-2" />
                                        登出
                                    </button>

                                </div>
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>

                </SignedIn>
            </div>
        </header>

    );
}
