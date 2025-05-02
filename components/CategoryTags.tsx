import {Tag} from "lucide-react";

interface TagProps {
    tagNames: string[];
}

export default function CategoryTags({tagNames}: TagProps) {

    return (

        <div className="flex flex-wrap my-auto items-start align-middle space-x-1 text-xs text-gray-500">
            {
                tagNames.map((name, index) => {
                    return (
                        <span key={index} className="flex gap-x-1 my-auto bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                            <Tag size={14} className="my-auto" />
                            <span>{name}</span>
                        </span>
                    )
                })
            }
        </div>

    );
}
