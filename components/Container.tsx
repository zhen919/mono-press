import React, {PropsWithChildren} from "react";
import {cn} from "@/libs/utils";

type ContainerProps = {
    className?: string | undefined;
}

export default function Container({children, className}: PropsWithChildren<ContainerProps>) {

    return (
        <div className={cn('md:max-w-7xl max-w-full mx-auto grid grid-rows-[1fr_0rem]', className)}>
            {children}
        </div>
    );
}
