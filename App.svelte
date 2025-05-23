<script>
  import Header from './components/Header.svelte';
  import About from './components/About.svelte';
  import Education from './components/Education.svelte';
  import Skills from './components/Skills.svelte';
  import Experience from './components/Experience.svelte';
  import Extracurricular from './components/Extracurricular.svelte';
  import Projects from './components/Projects.svelte';
  import Hackathons from './components/Hackathons.svelte';
  import Footer from './components/Footer.svelte';
  import ScrollToTop from './components/ScrollToTop.svelte';
  import ParticleBackground from './components/ParticleBackground.svelte';

  // Track active section for navigation
  let activeSection = 'about';
  let scrollTimeout;

  // Update active section based on scroll position with debounce
  function handleScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      let newActiveSection = activeSection;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          newActiveSection = section.id;
        }
      });

      if (newActiveSection !== activeSection) {
        activeSection = newActiveSection;
      }
    }, 100); // 100ms debounce
  }
</script>

<svelte:window onscroll={handleScroll} />

<div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
  <ParticleBackground />
  <Header {activeSection} />

  <main class="container mx-auto px-4 py-8 max-w-4xl relative z-10">
    <About />
    <Education />
    <Experience />
    <Extracurricular />
    <Projects />
    <Hackathons />
    <Skills />
  </main>

  <Footer />
  <ScrollToTop />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(section) {
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(section.visible) {
    opacity: 1;
    transform: translateY(0);
  }

  :global(.tag) {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    margin: 0.25rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  :global(.tag::before) {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  :global(.tag:hover::before) {
    left: 100%;
  }

  :global(.tag:hover) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
  }

  /* Light mode tag colors */
  :global(.tag.language),
  :global(.tag.soft-skill) {
    background: linear-gradient(135deg, #dbeafe, #bfdbfe);
    color: #1e40af;
  }

  :global(.tag.programming),
  :global(.tag.tool),
  :global(.tag.database),
  :global(.tag.devops) {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #92400e;
  }

  :global(.tag.security),
  :global(.tag.ctf) {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #991b1b;
  }

  :global(.tag.hardware) {
    background: linear-gradient(135deg, #ede9fe, #ddd6fe);
    color: #5b21b6;
  }

  :global(.tag.hackathon) {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
  }

  :global(.tag.coding-challenge) {
    background: linear-gradient(135deg, #ffedd5, #fed7aa);
    color: #9a3412;
  }

  /* Dark mode tag colors */
  :global(.dark .tag.language),
  :global(.dark .tag.soft-skill) {
    background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
    color: #93c5fd;
  }

  :global(.dark .tag.programming),
  :global(.dark .tag.tool),
  :global(.dark .tag.database),
  :global(.dark .tag.devops) {
    background: linear-gradient(135deg, #92400e, #b45309);
    color: #fde68a;
  }

  :global(.dark .tag.security),
  :global(.dark .tag.ctf) {
    background: linear-gradient(135deg, #7f1d1d, #991b1b);
    color: #fecaca;
  }

  :global(.dark .tag.hardware) {
    background: linear-gradient(135deg, #4c1d95, #5b21b6);
    color: #ddd6fe;
  }

  :global(.dark .tag.hackathon) {
    background: linear-gradient(135deg, #064e3b, #065f46);
    color: #a7f3d0;
  }

  :global(.dark .tag.coding-challenge) {
    background: linear-gradient(135deg, #7c2d12, #9a3412);
    color: #fed7aa;
  }

  :global(.glitch-effect) {
    position: relative;
    display: inline-block;
  }

  :global(.glitch-effect:hover) {
    animation: glitch 0.3s;
  }

  :global(.card-hover) {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  :global(.card-hover::before) {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s;
    z-index: 1;
  }

  :global(.card-hover:hover::before) {
    left: 100%;
  }

  :global(.card-hover:hover) {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  :global(.dark .card-hover:hover) {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  }

  :global(.terminal-text) {
    font-family: 'Fira Code', 'Courier New', monospace;
    background: #1a1a1a;
    color: #00ff00;
    padding: 1rem;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  :global(.terminal-text::before) {
    content: '$ ';
    color: #00ff00;
  }

  :global(.fade-in-up) {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes glitch {
    0%, 100% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
