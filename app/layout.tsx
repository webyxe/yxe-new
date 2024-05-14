import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500", "600", "700", "900"] });

export const metadata: Metadata = {
    title: "Agência YXE",
    description: "Tudo em um só lugar",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5G77JQERLY');
                `}
                </Script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5G77JQERLY" />
                {children}
            </body>
        </html>
    );
}
