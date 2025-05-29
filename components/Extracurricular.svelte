<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Tag from './Tag.svelte';

  let sectionRef;

  const activities = [
    {
      organization: "Board Of European Students of Technology",
      url: "https://www.best.eu.org/index.jsp",
      position: "Main Organiser of Coding Challenge 2024",
      period: "August 2024 - November 2024",
      location: "Leuven",
      responsibilities: [
        "Led the planning, coordination, and execution of a hackathon with 62 participants and 24 teams.",
        "Conducted regular meetings with coworkers to ensure quality control standards were met and exceeded for the challenges and the event itself."
      ],
      skills: [
        { name: "Python", type: "programming" },
        { name: "Event Management", type: "soft-skill" },
        { name: "Leadership", type: "soft-skill" }
      ]
    },
    {
      organization: "Board Of European Students of Technology",
      url: "https://www.best.eu.org/index.jsp",
      position: "Challenge Responsible of Coding Challenge 2023",
      period: "August 2023 - November 2023",
      location: "Leuven",
      responsibilities: [
        "Led a team of 4 members to design and develop engaging, innovative challenges for hackathon participants.",
        "Supported participants by clarifying challenge requirements and offering technical guidance during the event."
      ],
      skills: [
        { name: "Python", type: "programming" },
        { name: "Leadership", type: "soft-skill" },
        { name: "Technical Support", type: "soft-skill" }
      ]
    },
    {
      organization: "Board Of European Students of Technology",
      url: "https://www.best.eu.org/index.jsp",
      position: "Logistics Responsible for Game Jam 2023",
      period: "August 2023 - October 2023",
      location: "Leuven",
      responsibilities: [
        "Managed, planned and coordinated logistics support operations to accomplish projects."
      ],
      skills: [
        { name: "Logistics Management", type: "soft-skill" }
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

<section id="extracurricular" bind:this={sectionRef}>
  <SectionTitle title="Extracurricular Activities" />

  <div class="space-y-6">
    {#each activities as activity}
      <div class="mb-6">
        <a href={activity.url} target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover transition-all duration-300 hover:shadow-lg border dark:border-gray-700">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  {activity.position}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">{activity.location}</p>
              </div>
              <div class="text-right">
                <p class="font-medium text-gray-800 dark:text-white italic">
                  {activity.organization}

                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{activity.period}</p>
              </div>
            </div>

            <ul class="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              {#each activity.responsibilities as responsibility}
                <li>{responsibility}</li>
              {/each}
            </ul>

            <div class="flex flex-wrap mt-3">
              {#each activity.skills as skill}
                <Tag name={skill.name} type={skill.type} />
              {/each}
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</section>
