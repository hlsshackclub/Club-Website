<!-- This +layout.svelte file will be used as a layout for all routes that start with a + -->
<script>
  import { fade } from 'svelte/transition';
  import Nav from '.././components/Nav.svelte';
  export let data; // this is a prop that updates when the page loads/changes
</script>
<style lang="scss">
  @use 'src/styles/global.scss' as *;
</style>
<Nav />
<main>
  <!-- Content from other +page.svelte will be placed here -->
  {#key data.pathname} <!-- keys will rerender when the value changes, in this case when the path name of the URL changes-->
  <div in:fade={{ duration: 150, delay: 250 }} out:fade={{ duration: 150 }}>
    <slot></slot>
  </div>
  {/key}
</main>