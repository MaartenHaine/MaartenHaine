<script>
  import { onMount } from 'svelte';
  import SectionTitle from './SectionTitle.svelte';

  let sectionRef;

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

<section id="education" bind:this={sectionRef}>
  <SectionTitle title="Education" />

  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">KU Leuven, Faculty of Engineering Sciences</h3>
          <p class="text-gray-600">Leuven</p>
        </div>
      </div>
    </div>

    <div class="border-l-2 border-blue-500 pl-4 ml-2 space-y-4">
      <div class="relative">
        <div class="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
        <div class="flex justify-between items-start">
          <h4 class="font-medium text-gray-800">Master of Engineering: Computer Science Secure Software</h4>
          <span class="text-sm text-gray-600 italic">Present</span>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
        <div>
          <h4 class="font-medium text-gray-800">Bachelor of Engineering Sciences: Computer Science</h4>
          <p class="text-sm text-gray-600 italic">(Extended duration due to a prior shift from Electrical Engineering.)</p>
        </div>
      </div>
    </div>
  </div>
</section>
