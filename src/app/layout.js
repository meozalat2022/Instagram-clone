import Feed from "./components/Feed";
import Header from "./components/Header";
import Providers from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "Create by Mohammed Refat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Feed />
          {children}
        </Providers>
      </body>
    </html>
  );
}
