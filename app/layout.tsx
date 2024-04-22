import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { BookOpenIcon } from "@heroicons/react/24/solid";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="h-screen bg-gray-50">
          <section className="h-full flex flex-col">
            <h1 className="text-5xl flex justify-center items-center gap-x-1 mb-5">
              <BookOpenIcon className="h-11 w-11" />
              <span>Book Store</span>
            </h1>

            <main className="grow">{children}</main>

            <footer className="text-red-600 text-center">
              <span>Made by Frank</span>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
