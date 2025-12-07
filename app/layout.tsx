import { Providers } from "./providers";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AOSInit } from "@/components/AOSInit";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <AOSInit />

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
