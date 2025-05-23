<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Tag from './Tag.svelte';

  let sectionRef;

  const hackathons = [
    {
      name: "Cyber Security Challenge Belgium 2025",
      url: "https://cybersecuritychallenge.be/",
      date: "2025",
      description: [
        "Participated with a team in a national CTF competition focused on real-world security challenges."
      ],
      type: "ctf",
      skills: [
        { name: "Cybersecurity", type: "security" },
        { name: "Teamwork", type: "soft-skill" }
      ]
    },
    {
      name: "ULYSSIS CTF 2025",
      url: "https://ulyssis.org/2025/ulyssis-ctf-2025/",
      date: "2025",
      description: [
        "Gained hands-on experience in web exploitation, reverse-engineeering, and cryptography tasks."
      ],
      type: "ctf",
      skills: [
        { name: "Web Exploitation", type: "security" },
        { name: "Cryptography", type: "security" }
      ]
    },
    {
      name: "Techscape AE 2024",
      url: "https://techscape.ae.be/app/",
      date: "Mar 2024",
      placement: "2nd Place",
      description: [
        "Analyzed web app vulnerabilities and encryption flaws to solve challenge scenarios."
      ],
      type: "ctf",
      skills: [
        { name: "Web Security", type: "security" },
        { name: "Encryption", type: "security" }
      ]
    },
    {
      name: "BEST Coding Challenge 2022",
      url: "https://bestleuven.eu/coding-challenge-2022/",
      date: "Nov 2022",
      placement: "2nd Place",
      description: [
        "Python-focused coding competition with logic and algorithmic problem solving."
      ],
      type: "coding-challenge",
      skills: [
        { name: "Python", type: "programming" },
        { name: "Algorithms", type: "tool" },
        { name: "Problem Solving", type: "soft-skill" }
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

<section id="hackathons" bind:this={sectionRef}>
  <SectionTitle title="Hackathons & Competitions" />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each hackathons as hackathon}
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col border dark:border-gray-700">
        <div class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              {#if hackathon.placement}
                <span class="text-blue-600 dark:text-blue-400 font-bold">{hackathon.placement} — </span>
              {/if}
              <a href={hackathon.url} target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {hackathon.name}
              </a>
            </h3>
            <span class="text-sm text-gray-600 dark:text-gray-300">{hackathon.date}</span>
          </div>
        </div>

        <ul class="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2 flex-grow">
          {#each hackathon.description as item}
            <li>{item}</li>
          {/each}
        </ul>

        <div class="flex flex-wrap mt-auto pt-3">
          <Tag name={hackathon.type === "ctf" ? "CTF" : hackathon.type === "coding-challenge" ? "Coding Challenge" : "Hackathon"} type={hackathon.type} />
          {#each hackathon.skills as skill}
            <Tag name={skill.name} type={skill.type} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
