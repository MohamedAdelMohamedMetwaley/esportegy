import { Amiri } from "next/font/google";
import "./globals.css";

const amiriRegular = Amiri({
    variable: "--font-geist-amiri",
    weight: "400",
    subsets: ["arabic"],
});
export const metadata = {
    title: "Esportegy",
    description: "Your Gateway to The Sports World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${amiriRegular.className} bg-[#161513] text-white antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
