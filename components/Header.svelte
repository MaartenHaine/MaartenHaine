<script>
  import { onMount } from 'svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  export let activeSection;

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'extracurricular', label: 'Extracurricular' },
    { id: 'projects', label: 'Projects' },
    { id: 'hackathons', label: 'Hackathons' }
  ];

  let isMenuOpen = false;
  let isScrolled = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    isMenuOpen = false;
  }

  function checkScroll() {
    isScrolled = window.scrollY > 10;
  }

  onMount(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });
</script>

<header class={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${(isScrolled || isMenuOpen) ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
  <div class="container mx-auto px-4 max-w-4xl">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white glitch-effect cursor-pointer">
        <span class="font-mono">&lt;</span>Maarten<span class="text-blue-600 dark:text-blue-400">/</span><span class="font-mono">&gt;</span>
      </h1>

      <div class="flex items-center space-x-4">
        <ThemeToggle />

        <!-- Mobile menu button -->
        <button
                class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300 transform hover:scale-110"
                on:click={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 {isMenuOpen ? 'rotate-90' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          {#each navItems as item, index}
            <li>
              <button
                      class={`text-sm font-medium transition-all duration-300 relative overflow-hidden px-3 py-1 rounded-md ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                      on:click={() => scrollToSection(item.id)}
                      style="animation-delay: {index * 0.1}s;"
              >
                <span class="relative z-10">{item.label}</span>
              </button>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <!-- Mobile navigation -->
    {#if isMenuOpen}
      <nav class="md:hidden mt-4 pb-4 animate-fade-in-down">
        <ul class="flex flex-col space-y-4">
          {#each navItems as item, index}
            <li>
              <button
                      class={`block w-full text-left px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${activeSection === item.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      on:click={() => scrollToSection(item.id)}
                      style="animation-delay: {index * 0.05}s;"
              >
                {item.label}
              </button>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style>
  .animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out forwards;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
