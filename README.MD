# HLSS Hack Club Website

Welcome to the HLSS Hack Club website repository! This project is designed to provide students with an opportunity to grow their computer science skills through engaging and interactive lessons, activities, and events.

## About

HLSS Hack Club is all about providing students with an opportunity to grow their computer science skills, regardless of experience. We ensure that beginners and pros have a chance to learn through engaging interactive lessons that make the process enjoyable. Moreover, we aim to support students to facilitate a career in computer science/information technology.

Throughout the year, we hope to host fun activities such as scavenger hunts, robotics competitions, and a hackathon. Additionally, our ties with Hack Club allow us to have access to resources such as custom PCBs, Blot drawing machine, and this very own website.

If you haven't done so already, join our Google Classroom (code: sau2mcq) and follow us on Instagram @hlsshackclub.

## Creating a Member Page

To create your own member page, follow these steps:

1. **Create a Directory**: Create a new directory under the `members` directory with your name. For example, `members/YourName/`.

2. **Add an `index.html` File**: Inside your directory, create an `index.html` file. This file will contain your personal information. Here is a template you can use:
    ```html
    <h1>Your Name</h1>
    <p>Write a brief bio about yourself here.</p>
    ```

3. **Update `members.json`**: Add your information to the `members.json` file. This file is used to display member cards on the main page. Here is an example entry:
    ```json
    {
      "name": "Your Name",
      "bio": "Your brief bio",
      "picture": "members/YourName/YourPicture.jpg"
    }
    ```

4. **Add Your Picture**: Place your picture in your directory. Make sure the path in `members.json` matches the location of your picture.

5. **Preview Your Changes**: After making changes, you can preview how they look by opening the website locally. Run this command in the website's root directory:
    ```py
    python3 -m http.server 8000
    ```
    Then navigate to localhost:8000 in your browser to see the website.

6. **Commit Your Changes**: After making these changes, commit them to the repository.
