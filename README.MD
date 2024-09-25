# HLSS Hack Club Website

Welcome to the HLSS Hack Club website repository! This project is designed to provide students with an opportunity to grow their computer science skills through engaging and interactive lessons, activities, and events.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About

HLSS Hack Club is all about providing students with an opportunity to grow their computer science skills, regardless of experience. We ensure that beginners and pros have a chance to learn through engaging interactive lessons that make the process enjoyable. Moreover, we aim to support students to facilitate a career in computer science/information technology.

Throughout the year, we hope to host fun activities such as scavenger hunts, robotics competitions, and a hackathon. Additionally, our ties with Hack Club allow us to have access to resources such as custom PCBs, Blot drawing machine, and this very own website.

If you haven't done so already, join our Google Classroom (code: sau2mcq) and follow us on Instagram @hlsshackclub.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Ruby
- Jekyll
- Bundler

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/hlss-hack-club.git
2. Install Jekyll and Bundler
    ```sh
    gem install jekyll bundler
3. Install dependencies
    ```sh
    bundle install
4. Serve the site locally
    ```sh
    bundle exec jekyll serve
5. Open your browser and navigate to `http://localhost:4000/Club-Website/`

### Making a Page

To create your own member page on the website, follow these steps:

1. **Create a New HTML File in the `_members` Directory**

   Navigate to the `_members` directory and create a new HTML file named after yourself (e.g., `JohnDoe.html`).

   ```sh
   cd _members
   touch JohnDoe.html
2. **Add Your Content**
   Open the newly created HTML file and add your content. You can use the following template as a starting point:
   ```html
    ---
    layout: member
    name: John Doe
    title: Member
    ---

    <h1>John Doe</h1>
    <p>Welcome to my page!</p>
   ```
    Make sure to replace John Doe with your actual name and add any additional content you want to include on your page.
3. **Create a Directory in the `members` Directory**
   Navigate to the `members` directory and create a new folder named after yourself (e.g., `JohnDoe`). This folder will contain any additional resources (e.g., images, files) you want to include on your page.
   ```sh
   cd ../members
   mkdir JohnDoe
4. **Add Additional Resources**
   Add any additional resources you want to include on your page to the directory you created in the previous step. For example, you can add an image of yourself named `profile.jpg`. Any pages other than your home page will also go here.
   ```sh
   cp /path/to/your/image.jpg JohnDoe/profile.jpg
5. **Link Resources in Your HTML File**
   If you added any additional resources, make sure to link to them in your HTML file. For example, you can add an image to your page with the following code:
   ```html
    <img src="{{ site.baseurl }}/members/JohnDoe/profile.jpg" alt="John Doe">
   ```
6. **Preview Your Changes**
    Once you've added your content and resources, preview your changes by serving the site locally and navigating to your page in the browser.
    ```sh
     bundle exec jekyll serve
    ```
    Open your browser and navigate to `http://localhost:4000/Club-Website/members/JohnDoe.html` to view your page.
7. **Commit Your Changes**
   Once you've added your content and resources, commit your changes to your fork of the repository and create a pull request to merge them into the main repository.
   ```sh
    git add .
    git commit -m "Add John Doe member page"
    git push
8. **Create a Pull Request**
    Create a pull request to merge your changes into the main repository. Be sure to include a description of the changes you made and any additional context that might be helpful for reviewers.