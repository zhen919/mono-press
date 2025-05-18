'use client'

import {ReactNode} from "react";
import * as Tooltip from '@radix-ui/react-tooltip'
import {Side} from "@floating-ui/utils";

interface CustomTooltipProps {
    children: ReactNode;
    content: string;
    side?: Side | undefined;
}

export default function CustomTooltip({children, content, side = 'top'}: CustomTooltipProps) {

    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content side={side}
                        className="z-50 my-1 overflow-hidden rounded-md px-3 py-1.5 text-sm font-medium leading-tight
                        text-zinc-700 shadow-lg shadow-zinc-800/5 backdrop-blur transition"
                        sideOffset={2}
                    >
                        {content}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
