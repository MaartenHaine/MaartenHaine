<script>
    import { theme } from '../stores/theme.js';

    function toggleTheme() {
        console.log('Toggle clicked, current theme:', $theme); // Debug log
        theme.update(t => {
            const newTheme = t === 'light' ? 'dark' : 'light';
            console.log('New theme:', newTheme); // Debug log
            return newTheme;
        });
    }
</script>

<button
        on:click={toggleTheme}
        class="p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        aria-label="Toggle dark mode"
>
    {#if $theme === 'light'}
        <!-- Moon icon for dark mode -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    {:else}
        <!-- Sun icon for light mode -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    {/if}
</button>
