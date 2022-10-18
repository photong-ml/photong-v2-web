const config = {
    darkMode: "class",
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"],
    plugins: [require("@tailwindcss/forms"), require("@brainandbones/skeleton/tailwind/theme.cjs")],
};

module.exports = config;
