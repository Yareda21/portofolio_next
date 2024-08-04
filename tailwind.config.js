/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            colors: {
                primary: "#264653",
                secondary: "#393A47",
                accent: "#F13024",
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                site: 'url("/site-bg.jpg")',
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, "sans-serif"],
                sora: [`var(--font-sora)`, "sans-serif"],
            },
            height: {
                "screen-minus-320": "calc(100vh - 320px)",
            },
        },
    },
    container: {
        padding: {
            DEFAULT: "15px",
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
