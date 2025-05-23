<script>
  import { onMount } from 'svelte';
  import TypingAnimation from './TypingAnimation.svelte';

  let sectionRef;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(sectionRef);

    return () => {
      if (sectionRef) observer.unobserve(sectionRef);
    };
  });
</script>

<section id="about" bind:this={sectionRef} class="pt-24">
  <div class="text-center mb-8">
    <div class="mb-4">
      {#if isVisible}
        <TypingAnimation
                text="Maarten Haine"
                class="text-4xl font-bold text-gray-800 dark:text-white glitch-effect"
                speed={100}
        />
      {:else}
        <h1 class="text-4xl font-medium text-gray-800 dark:text-white">Maarten Haine</h1>
      {/if}
    </div>

    <div class="text-sm mb-4 inline-block">
      {#if isVisible}
        <TypingAnimation
                text="Engineering Student @ KU Leuven"
                class="text-lg font-medium text-gray-800 dark:text-white glitch-effect"
                speed={50}
                delay={1500}
        />
      {:else}
        <h1 class="text-lg font-bold text-gray-800 dark:text-white">Maarten Haine</h1>
      {/if}
      />
    </div>

    <div class="flex justify-center items-center space-x-4 mb-4 fade-in-up" style="animation-delay: 3.3s;">
      <a href="mailto:maartenhaine12@protonmail.com" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 flex items-center transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        maartenhaine12@protonmail.com
      </a>
    </div>

    <div class="flex justify-center items-center space-x-4 fade-in-up" style="animation-delay: 3.8s;">
      <span class="text-gray-600 dark:text-gray-300">Leuven, Belgium</span>
      <span class="text-gray-400 dark:text-gray-500">•</span>
      <span class="text-gray-600 dark:text-gray-300">+32 468 46 90 46</span>
    </div>

    <div class="flex justify-center items-center space-x-4 mt-6 fade-in-up" style="animation-delay: 4.3s;">
      <a href="https://www.linkedin.com/in/maartenhaine/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="https://github.com/MaartenHaine" target="_blank" rel="noopener noreferrer" class="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
  </div>

  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover relative z-10 fade-in-up border dark:border-gray-700" style="animation-delay: 4.8s;">
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      Motivated and versatile engineering student with a passion for cybersecurity and software development. Having experience in designing and implementing both hardware and software solutions. Eager to apply and improve my skills in projects.
    </p>
  </div>
</section>
