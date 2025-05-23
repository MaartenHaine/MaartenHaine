<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Tag from './Tag.svelte';

  let sectionRef;

  const projects = [
    {
      name: "pyColdStream",
      url: "https://github.com/Diabatix/pyColdStream",
      organization: "Diabatix",
      year: "2025",
      description: [
        "Contributed to a Python library providing easy access to the Diabatix ColdStream platform via its REST API.",
        "Improved usability and maintainability by adding test coverage, documentation, and GitHub CI pipelines."
      ],
      skills: [
        { name: "Python", type: "programming" },
        { name: "REST API", type: "tool" },
        { name: "GitHub Actions", type: "tool" },
        { name: "Testing", type: "tool" },
        { name: "Documentation", type: "soft-skill" }
      ]
    },
    {
      name: "BurgieClan",
      url: "https://github.com/VTKLeuven/burgieclan",
      organization: "VTK Leuven",
      year: "2024 - Present",
      description: [
        "Built a PHP/MySQL-based file-sharing platform for students using Symfony framework.",
        "Contributed to front-end using HTML/CSS/JavaScript/TypeScript.",
        "Worked together with an amazing team with Agile development."
      ],
      skills: [
        { name: "PHP", type: "programming" },
        { name: "Symfony", type: "tool" },
        { name: "MySQL", type: "database" },
        { name: "JavaScript", type: "programming" },
        { name: "TypeScript", type: "programming" },
        { name: "Agile", type: "soft-skill" }
      ]
    },
    {
      name: "Litus Project",
      url: "https://github.com/LitusProject/Litus",
      organization: "VTK Leuven",
      year: "2024 - 2025",
      description: [
        "Worked with a team to maintain and improve a student academic resource platform.",
        "Resolved backend issues and supported platform stability using PHP and MySQL."
      ],
      skills: [
        { name: "PHP", type: "programming" },
        { name: "MySQL", type: "database" },
        { name: "Backend Development", type: "tool" },
        { name: "Technical Support", type: "soft-skill" }
      ]
    },
    {
      name: "SimLife",
      url: "https://github.com/MaartenHaine/SimLife",
      organization: "OOP Project KU Leuven",
      year: "2024",
      description: [
        "Java simulation project with neural network logic and full OOP structure."
      ],
      skills: [
        { name: "Java", type: "programming" },
        { name: "OOP", type: "tool" },
        { name: "Neural Networks", type: "tool" }
      ]
    },
    {
      name: "Wi-Fi Cracking Tool",
      url: "https://github.com/DanTheetje/WifiCrackingPnO",
      organization: "PnO KU Leuven",
      year: "2023",
      description: [
        "Built a Python/Bash tool to analyze and crack WEP and WPA/WPA2-secured networks with my team.",
        "Gained hands-on experience with wireless security protocols, Linux, and penetration testing."
      ],
      skills: [
        { name: "Python", type: "programming" },
        { name: "Bash", type: "programming" },
        { name: "Network Security", type: "security" },
        { name: "Linux", type: "tool" },
        { name: "Penetration Testing", type: "security" }
      ]
    },
    {
      name: "Transportation System",
      organization: "PnO Project KU Leuven",
      year: "2022",
      description: [
        "Built an Arduino-based delivery system with sensors and wireless control.",
        "Integrated a mobile app for task automation using MIT App Inventor."
      ],
      skills: [
        { name: "Arduino", type: "hardware" },
        { name: "Sensors", type: "hardware" },
        { name: "Mobile App Development", type: "tool" },
        { name: "MIT App Inventor", type: "tool" }
      ]
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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

<section id="projects" bind:this={sectionRef}>
  <SectionTitle title="Projects" />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project, index}
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover h-full flex flex-col relative z-10 fade-in-up border dark:border-gray-700" style="animation-delay: {index * 0.1}s;">
        <div class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white glitch-effect">
              {#if project.url}
                <a href={project.url} target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </a>
              {:else}
                {project.name}
              {/if}
            </h3>
            <span class="text-sm text-gray-600 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{project.year}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm">{project.organization}</p>
        </div>

        <ul class="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2 flex-grow">
          {#each project.description as item}
            <li>{item}</li>
          {/each}
        </ul>

        <div class="flex flex-wrap mt-auto pt-3">
          {#each project.skills as skill, skillIndex}
            <Tag
                    name={skill.name}
                    type={skill.type}
                    style="animation-delay: {index * 0.1 + skillIndex * 0.02}s;"
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
