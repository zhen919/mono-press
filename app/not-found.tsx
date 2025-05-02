import HomeButton from "@/components/HomeButton";

export default function NotFoundPage() {

    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <body>
        <main>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-3xl font-bold">404 - Not Found</h1>
                    <p className="text-lg">The page you are looking for does not exist.</p>

                    <HomeButton />
                </div>
            </div>
        </main>
        </body>
        </html>
    );
}
