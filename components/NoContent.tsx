import HomeButton from "@/components/HomeButton";


export default function NoContent() {

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-10">抱歉，未找到内容！</h1>
            <p className="text-gray-500 text-sm text-center mt-4">请检查链接是否正确。</p>
            <div className="flex justify-center mt-4">
                <HomeButton />
            </div>
        </div>
    );
}
