<script context="module" lang="ts">
  // Simple type for a single content box to make TypeScript not yell at me
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
        font-size: 1rem;
        background-color: var(--elevated);
        border-radius: 12px;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.125) 0px 4px 8px;
      }
    }
  }
</style>

<section id="content">
  {#each boxes as box} <!-- Iterate through the array of boxes, creating a new <div> for each of the boxes. Equivalent in Java would be something like "for (Box box : boxes)" -->
    <div>
      <h2>{box.title}</h2>
      <div class="wrapper">
        {#each box.paragraphs as paragraph} <!-- Same thing but with the array of paragraphs -->
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  {/each}
</section>
