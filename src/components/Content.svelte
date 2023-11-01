<script context="module" lang="ts">
  export type Box = {
    title: string;
    paragraphs: string[];
  }
</script>
<script lang="ts">
  // This is a *prop* (similar to a parameter of a function) we must have a value for when we insert this component
  export let boxes: Box[];
</script>
<style lang="scss">
  #content {
    display: grid;
    justify-content: center;
    grid-auto-columns: 1fr 1fr;
    grid-auto-flow: column;
    gap: 1rem;
    & div {
      & h2 {
        text-align: center;
        padding: 0;
        font-size: 2rem;
      }
      & .wrapper {
        margin: 0;
        font-size: 1.25rem;
        background-color: var(--elevated);
        border-radius: 12px;
        padding: 1rem;
      }
    }
  }
</style>

<section id="content">
  {#each boxes as box}
    <div>
      <h2>{box.title}</h2>
      <div class="wrapper">
        {#each box.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  {/each}
</section>
