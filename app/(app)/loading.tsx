import {Dot} from "lucide-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="m-auto flex flex-col">
                <Dot className="animate-bounce mx-auto" size={60} />
                <p className="text-sm">放宽心，心静自然凉</p>
            </div>
        </div>
    );
}
