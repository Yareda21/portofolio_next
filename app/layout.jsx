import { Sora } from "next/font/google";
import "./globals.css";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import ProjectsBtn from "@/components/ProjectsBtn";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Yared || Full Stack Developer",
  description: "Hello! This is Yared Kebede, Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <ProjectsBtn />
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
