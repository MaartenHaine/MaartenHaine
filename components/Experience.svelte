<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Tag from './Tag.svelte';

  let sectionRef;

  const experiences = [
    {
      company: "Diabatix",
      url: "https://www.diabatix.com/",
      position: "Student Engineer",
      period: "Feb 2025 - May 2025",
      location: "Leuven",
      responsibilities: [
        "Contributed to the python pyColdStream library: worked on code, added tests, and created GitHub Actions workflows.",
        "Built Python automation tools for simulation output, including ParaView and file converters."
      ],
      skills: [
        { name: "Python", type: "programming" },
        { name: "GitHub Actions", type: "tool" },
        { name: "CI/CD", type: "devops" },
        { name: "Testing", type: "tool" }
      ]
    },
    {
      company: "VTK Leuven",
      url: "https://vtk.be/",
      position: "IT",
      period: "Sep 2024 - Jul 2025",
      location: "Leuven",
      responsibilities: [
        "Worked collaboratively within a dedicated team to maintain the organization's website and internal systems.",
        "Provided technical support through a shared ticketing system, ensuring uptime and responsiveness.",
        "Co-developed a student file-sharing platform (BurgieClan) using PHP/Symfony, MySQL, and modern front-end tools."
      ],
      skills: [
        { name: "PHP", type: "programming" },
        { name: "Symfony", type: "tool" },
        { name: "MySQL", type: "database" },
        { name: "TypeScript", type: "programming" },
        { name: "Technical Support", type: "soft-skill" }
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

<section id="experience" bind:this={sectionRef}>
  <SectionTitle title="Experience" />

  <div class="space-y-6">
    {#each experiences as experience, index}
      <div class="bg-white p-6 rounded-lg shadow-md card-hover relative z-10 fade-in-up" style="animation-delay: {index * 0.2}s;">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 glitch-effect">
              {experience.position}
            </h3>
            <p class="text-gray-600">{experience.location}</p>
          </div>
          <div class="text-right">
            <p class="font-medium text-gray-800 italic">
              <a href={experience.url} target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors duration-300">
                {experience.company}
              </a>
            </p>
            <p class="text-sm text-gray-600">{experience.period}</p>
          </div>
        </div>

        <ul class="list-disc list-inside mb-4 text-gray-700 space-y-2">
          {#each experience.responsibilities as responsibility}
            <li class="fade-in-up" style="animation-delay: {index * 0.2 + 0.1}s;">{responsibility}</li>
          {/each}
        </ul>

        <div class="flex flex-wrap mt-3">
          {#each experience.skills as skill, skillIndex}
            <Tag
                    name={skill.name}
                    type={skill.type}
                    style="animation-delay: {index * 0.2 + skillIndex * 0.05}s;"
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
