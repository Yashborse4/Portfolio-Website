/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
            },
            colors: {
                primary: '#3b82f6', // Blue
                secondary: '#60a5fa', // Lighter Blue
            },
        },
    },
    plugins: [],
}
