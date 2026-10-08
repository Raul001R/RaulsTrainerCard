import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raul Rodriguez | Trainer Card",
};

export default function RaulLayout({ children }: { children: ReactNode }) {
  return( <html className = "dark">
    <body>  
      {children}
    </body>
</html>
);
}

