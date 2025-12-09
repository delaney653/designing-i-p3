## File structure
- Our UI is controlled by `index.html`. This file links to the other three `.html` files containing specific pages for each character (`strawberry.html`, `banana.html`, and `orange.html`).
- `images/` folder contains 3 separate fruit character images. These images were created with Sora.
- `videos/` folder is empty on GitHub.
    - Since our videos are large, we couldn't upload them to Github, they are hosted as "unlisted" on YouTube.
    - To replicate our local repo setup and run our UI, please download those videos brom YouTube, put them into the `videos/` folder, and ensure that they are named `banana.mp4`, `orange.mp4`, and `strawberry.mp4`. Download links are available in our presentation slides (we won't be exposing them here since it's a public repo).
- `key_detection.js` and `video-options.js` files contain some very simple JavaScript logic to map our Makey Makey inputs to different keys and build our UI controls for video navigation (scrolling forward/back, speeding up/down, etc.)