import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className="flex flex-col">
            <Nav />

            <main className="">{children}</main>

            <footer className="text-red-600 text-center">
              <span>Made by Frank</span>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
