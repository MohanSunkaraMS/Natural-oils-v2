/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#c8922a',
                dark: '#2c1a0e',
                cream: '#fdf8f0',
                warm: '#f5ede0',
                brand: '#3d2b1a',
                accent: '#8b4513',
                green: '#4a7c59',
                muted: '#9a7a5a',
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                lato: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
