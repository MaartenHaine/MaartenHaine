<script>
  import { onMount } from 'svelte';

  export let text = '';
  export let speed = 100;
  export let delay = 0;

  let className = '';
  export { className as class };

  let displayText = '';
  let currentIndex = 0;
  let isTyping = false;

  onMount(() => {
    setTimeout(() => {
      isTyping = true;
      typeText();
    }, delay);
  });

  function typeText() {
    if (currentIndex < text.length) {
      displayText += text[currentIndex];
      currentIndex++;
      setTimeout(typeText, speed);
    }
  }
</script>

<span class={className}>
  {displayText}
  {#if isTyping && currentIndex < text.length}
    <span class="animate-pulse">|</span>
  {/if}
</span>
