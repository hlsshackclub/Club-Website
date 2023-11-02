<script>
  // repo name, because this is a GitHub Pages site
  import { base } from "$app/paths";
</script>
<style>    
  header {
    text-align: center;
    background-image: linear-gradient(-45deg,#082888, #EC2028);
  }
  #title {
    margin: 0;
    padding: 2rem;
    font-size: 3rem;
    color: #fff;
  }
  nav {
    background-image: linear-gradient(-45deg,#001070, #B40310);
    height: 3.5rem;
    width: 100%;
    top: 0;
    position: sticky;
    display: flex;
    justify-content: flex-start;
    z-index: 69;
    & .logo {
      margin: auto 0;
      padding: 0 1rem;
      display: flex;
      justify-content: flex-start;
      filter: drop-shadow(0 0 0.1rem rgba(0,0,0,0.5));
    }
    & .nav-links {
      margin: auto 0;
      padding: 0 1rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,.5);
      text-decoration: none;
      & a {
        margin: auto 0;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(255,255,255,.5);
        text-decoration: none;
        transition: var(--transition);
        &:hover {
          color: rgba(255,255,255,.75);
        }
      }
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
    & span {
      transition: var(--transition);
    }
    &:hover {
      & span {
        color: rgba(255,255,255,.75);
      }
      cursor: pointer;
      & .dropdown-content {
        display: grid;
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--elevated);
    border-radius: 6px;
    min-width: 160px;
    padding: 0.5rem 0;
    z-index: 1;
    grid-auto-columns: auto;
    gap: 0;
    & a {
      padding: 0.5rem 0;
      color: #fff;
        text-align: center;
      width: 100%;
      text-decoration: none;
      transition: var(--transition);
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>
<header>
  <h1 id="title">Heart Lake Hack Club</h1>
</header>
<nav>
  <a class="logo" href="{base || "/"}">
    <img style="height: 3rem;" src="{base}/hackclub.svg" alt="Hack Club Logo">
  </a>
  <div class="dropdown nav-links">
    <span>Dropdown</span>
    <div class="dropdown-content">
      <a href="#">Hello World!</a>
      <a href="#">Hello World!</a>
    </div>
  </div>
  <div class="nav-links">
    <a href="{base}/about">About</a>
  </div>
</nav>