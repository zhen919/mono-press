import {PropsWithChildren} from "react";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
            {children}
        </body>
        </html>
    )
}
