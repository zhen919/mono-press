import "./globals.css";
import { Toaster } from 'react-hot-toast';
import {PropsWithChildren} from "react";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
      <>
          {children}
          <Toaster toastOptions={{
              position: "bottom-right",
              className: "text-sm",
          }} />
      </>
  );
}
