import { Sora } from "next/font/google";
import "./globals.css";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Head from "next/head";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Yared || Full Stack Developer",
    description:
        "Welcome to my portfolio! I am Yared, a passionate and dedicated digital marketer, educator, and web developer. With a diverse background in digital marketing, teaching, and software development, I bring a unique blend of creativity, technical skills, and strategic thinking to every project I undertake.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="msvalidate.01"
                    content="CE7DB23694AB00D7C714F6B7296C22B0"
                />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <body
                className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative ease-linear duration-300`}
            >
                <div className="hidden text-[1px]">
                    <p>
                        c digital marketing software engineer javascript
                        computer science software android studio c++ visual
                        studio code application software c++ online compiler
                        application programming interface visual studio
                        datascience freecode camp code blocks visual code
                        dijital marketing marketing digital marketing c plus
                        plus vcode marketing and digital marketing dig marketing
                        digital marketing marketing cpp online compiler visual
                        studio microsoft * * python python * web developer
                        developers coding programming cyber security course data
                        science course software developer full stack developer
                        learn python online marketing website development python
                        programming mobile app development web development
                        courses python online coding for beginners front end
                        developer google free courses computer engineering
                        software engineering course computer programming
                        marketing strategy python coding website developers
                        computer science course plc programming ruby python for
                        beginners mobile application development github copilot
                        python ide computer application python programming for
                        beginners data structures and algorithms w3schools
                        python code camp c++ programming java programming c# c++
                        download html code web design and development vscode
                        programming for beginners python online compiler
                        programming languages web dev scratch programming
                        programmer computer software mern stack c programming
                        online code editor web design websites website design
                        websites object oriented programming digital garage
                        google codeorg web programming c++ compiler c
                        programming language html code for website r software
                        codeblocks online c compiler hello world dev c++
                        download java w3schools c compiler dynamic programming
                        website design & development computer languages
                    </p>
                </div>
                <Nav />
                {/* SEO Tags */}
                {/* <TopLeftImg /> */}
                <Header />
                {children}
            </body>
        </html>
    );
}
