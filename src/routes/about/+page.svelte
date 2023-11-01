<script lang="ts">
  import Content from "$components/Content.svelte";
  import type { Box } from "$components/Content.svelte";
  let boxes: Box[] = [
    {
      title: 'Our Team',
      paragraphs: [
        "Going to put members of the executive here"
      ]
    },
    {
      title: 'What We Do',
      paragraphs: [
        'stuff'
      ]
    }
  ];
</script>
<p>about page</p>
<Content boxes={boxes}/>