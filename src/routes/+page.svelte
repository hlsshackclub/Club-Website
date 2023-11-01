<script lang="ts">
  import Content from "$components/Content.svelte";
  import type { Box } from "$components/Content.svelte";
  let boxes: Box[] = [
    {
      title: 'Test',
      paragraphs: [
        "HLSS Hack Club is all about providing students with an opportunity to grow their computer science skills, regardless of experience. We ensure that beginners and pros have a chance to learn through engaging interactive lessons that make the process enjoyable. Moreover, we aim to support students to facilitate a carrer in computer science/information technology.",
        "Throughout the year, we hope to host fun activities such as scavenger hunts, robotics competition, and a hackathon. Additionally, our ties with Hack Club allow us to have acess to resouces such as, custom PCB's, Blot drawing machine and this very own website.",
        "If you haven't done so already, join our google classroom (code: sau2mcq) and follow us on instagram @hlsshackclub"
      ]
    },
    {
      title: 'Test',
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ]
    }
  ];
</script>
<p>This is our website</p>
<p>This is a test addition to the website!</p>
<p>Demo for hack club</p>
<p>Hi my name is Suhas and i am alive</p>
<p>Hello this message is from Jonah Perez.</p>
<p>hi this is glae</p>
<p>Hi im dravid</p>
<Content boxes={boxes} />