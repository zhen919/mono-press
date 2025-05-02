'use client'

import {ReactNode} from "react";
import * as Tooltip from '@radix-ui/react-tooltip'

interface CustomTooltipProps {
    children: ReactNode;
    content: string;
}

export default function CustomTooltip({children, content}: CustomTooltipProps) {

    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs font-medium
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
