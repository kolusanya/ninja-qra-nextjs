import Nav from "./(components)/Nav";
import "./globals.css";
import { Rubik } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const rubik = Rubik({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "QRA",
  description: "Creating a functional ticketing system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="max-w-full">
          <div className="">
            <Nav />
          </div>
          {children}
        </div>
      </body>
    </html>

    // <html lang="en">
    //   <body className={rubik.className}>
    //     <div className="flex flex-col h-screen max-h-screen">
    //       <Nav />
    //       <div className="flex-grow overflow-y-auto bg-page text-default-text">
    //         {children}
    //       </div>
    //     </div>
    //   </body>
    // </html>

    // <html lang="en">
    //   <body className={rubik.className}>
    //     <div className="flex flex-col h-screen max-h-screen">
    //       <Nav />
    //       <div className="flex-grow overflow-y-auto bg-page text-default-text">
    //         {children}
    //       </div>
    //     </div>
    //   </body>
    // </html>
  );
}
