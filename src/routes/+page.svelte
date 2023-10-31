<script>
  import Nav from '.././components/Nav.svelte';
</script>
<style lang="scss">
  @use 'src/styles/global.scss' as *;
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
        padding: 0;
        font-size: 1rem;
        background-color: var(--elevated);
        border-radius: 12px;
        padding: 1rem;
      }
    }
  }
</style>
<Nav />
<main>
  <p>This is our website</p>
  <p>This is a test addition to the website!</p>
  <p>Demo for hack club</p>
  <p>Hi my name is Suhas and i am alive</p>
  <p>Hello this message is from Jonah Perez.</p>
  <p>hi this is glae</p>
  <p>Hi im dravid</p>
  <section id="content">
    <div>
      <h2>Test</h2>
      <div class="wrapper">
        <p>HLSS Hack Club is all about providing students with an opportunity to grow their computer science skills, regardless of experience. We ensure that beginners and pros have a chance to learn through engaging interactive lessons that make the process enjoyable. Moreover, we aim to support students to facilitate a carrer in computer science/information technology.  </p>
        <p>Throughout the year, we hope to host fun activities such as scavenger hunts, robotics competition, and a hackathon. Additionally, our ties with Hack Club allow us to have acess to resouces such as, custom PCB's, Blot drawing machine and this very own website.</p>
        <p>If you haven't done so already, join our google classroom (code: sau2mcq) and follow us on instagram @hlsshackclub</p>
      </div>
    </div>
    <div>
      <h2>Test</h2>
      <div class="wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div>
      <h2>Test</h2>
      <div class="wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </section>
</main>