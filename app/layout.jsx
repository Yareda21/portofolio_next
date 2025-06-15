import { Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Yared || Full Stack Developer",
    description:
        "Welcome to my portfolio! I am Yared, a passionate and dedicated digital marketer, educator, and web developer. With a diverse background in digital marketing, teaching, and software development, I bring a unique blend of creativity, technical skills, and strategic thinking to every project I undertake.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yared21.netlify.app/",
        siteName: "Yared Portfolio",
    },
    verification: {
        msvalidate: "CE7DB23694AB00D7C714F6B7296C22B0",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative ease-linear duration-300`}
            >
                <Nav />
                {/* SEO Tags */}
                {/* <TopLeftImg /> */}
                <Header />
                {children}
            </body>
        </html>
    );
}
