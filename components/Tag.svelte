<script>
  export let name;
  export let type = 'tool';
  export let level = undefined;
  export let style = '';

  // Get the appropriate class based on the tag type
  $: getTagClass = (() => {
    switch (type) {
      case 'language':
      case 'soft-skill':
        return 'language';
      case 'programming':
        return 'programming';
      case 'tool':
      case 'database':
      case 'devops':
        return 'tool';
      case 'security':
        return 'security';
      case 'hardware':
        return 'hardware';
      case 'ctf':
        return 'ctf';
      case 'hackathon':
        return 'hackathon';
      case 'coding-challenge':
        return 'coding-challenge';
      default:
        return 'tool';
    }
  })();
</script>

<span class={`tag ${getTagClass}`} {style}>
  {name}{level ? ` (${level})` : ''}
</span>
