<script context="module" lang="ts">
  export type GalleryItem = {
    imagePath: string;
    caption: string;
  }
</script>
<script lang="ts">
  export let title: string;
  export let galleryItems: GalleryItem[];
</script>
<style lang="scss">
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  #gallery {
    display: grid;
    margin: 1rem 0;
    justify-content: center;
    grid-auto-columns: 1fr 1fr;
    grid-auto-flow: column;
    & .gallery-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      & img {
        border-radius: 10px;
        transition: var(--transition);
        &:hover {
          transform: scale(1.0625);
        }
      }
      & p {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        margin: 0 1rem;
        font-size: 1rem;
        color: var(--ui-muted);
        background-color: var(--elevated);
        border-radius: 12px;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.125) 0px 4px 8px;
      }
    }
  }
</style>
<h2>{title}</h2>
<section id="gallery">
  {#each galleryItems as item}
    <div class="gallery-item">
      <img src={item.imagePath} alt={item.caption}>
      {#if item.caption}
        <p>{item.caption}</p>
      {/if}
    </div>
  {/each} 
</section>