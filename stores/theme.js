// stores/theme.js
import { writable } from "svelte/store";

function getInitialTheme() {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const theme = writable(getInitialTheme());

if (typeof window !== "undefined") {
    theme.subscribe((value) => {
        localStorage.setItem("theme", value);
        document.documentElement.classList.toggle("dark", value === "dark");
    });
}
