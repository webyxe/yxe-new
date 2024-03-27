import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
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
                black: '#121212',
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config