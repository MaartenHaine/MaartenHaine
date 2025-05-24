<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Tag from './Tag.svelte';

  let sectionRef;
  let skillsVisible = false;

  const skillCategories = [
    {
      title: "Languages & Communication",
      skills: [
        { name: "Dutch", type: "language", level: "Native" },
        { name: "English", type: "language", level: "Full Professional Proficiency" },
        { name: "French", type: "language", level: "Limited Working Proficiency" }
      ]
    },
    {
      title: "Soft Skils",
      skills: [
        { name: "Leadership", type: "soft-skill" },
        { name: "Event Management", type: "soft-skill" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", type: "programming" },
        { name: "RISC-V", type: "programming" },
        { name: "Java", type: "programming" },
        { name: "PHP", type: "programming" },
        { name: "C", type: "programming" }
      ]
    },
    {
      title: "Security & Networking",
      skills: [
        { name: "WPA/WEP cracking", type: "security" },
        { name: "Web Exploitation", type: "security" },
        { name: "Network Security", type: "security" }
      ]
    },
    {
      title: "Development & Tools",
      skills: [
        { name: "REST API", type: "tool" },
        { name: "Database integration", type: "tool" },
        { name: "Linux", type: "tool" },
        { name: "Git", type: "devops" }
      ]
    },
    {
      title: "Hardware",
      skills: [
        { name: "Digital design (SystemVerilog)", type: "hardware" },
        { name: "Arduino", type: "hardware" },
        { name: "Sensors", type: "hardware" }
      ]
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          skillsVisible = true;
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

<section id="skills" bind:this={sectionRef}>
  <SectionTitle title="Skills" />

  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover relative z-10 fade-in-up border dark:border-gray-700">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each skillCategories as category, categoryIndex}
        <div class="fade-in-up" style="animation-delay: {categoryIndex * 0.1}s;">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3 glitch-effect">{category.title}</h3>
          <div class="flex flex-wrap">
            {#each category.skills as skill}
              <Tag
                      name={skill.name}
                      type={skill.type}
                      level={skill.level}
              />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
