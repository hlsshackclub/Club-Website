<!-- This +layout.svelte file will be used as a layout for all routes that start with a + -->
<script>
  import Nav from '.././components/Nav.svelte';
</script>
<style lang="scss">
  @use 'src/styles/global.scss' as *;
</style>
<Nav />
<main>
  <!-- Content from other +page.svelte will be placed here -->
  <slot></slot>
</main>