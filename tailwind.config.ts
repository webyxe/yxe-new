import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    '500': '#1B2AE9',
                    '600': '#022873',
                },
                orange: {
                    '500': '#F23005',
                    '600': '#E43B16'
                },
                gray: {
                    '100': '#e6e6e6',
                    '200': '#CFCFCF',
                    '900': '#282828',
                },
                white: '#efefef',
                black: '#121212'
            },
            fontFamily: {
                poppins: 'Poppins'
            },
            backgroundImage: {
                "principal": "url('/img/banner-fundo.jpg')",
                "foto-1": "url('/img/foto-1.png')",
                "foto-2": "url('/img/foto-2.png')",
                "foto-3": "url('/img/foto-3.png')",
                "foto-4": "url('/img/foto-4.png')",
                "foto-5": "url('/img/foto-5.png')",
                "foto-6": "url('/img/foto-6.png')",
                "foto-7": "url('/img/foto-7.png')",
                "foto-8": "url('/img/foto-8.png')",
                "foto-9": "url('/img/foto-9.png')",
            },
        },
    },
    plugins: [],
};
export default config;
