Live Project::-https://pro-coundown-quotes-5dpk.vercel.app/

****![Screenshot 2025-06-25 174221](https://github.com/user-attachments/assets/733b89fc-3d0f-4ecd-9af1-061bbbcda281)

Project Title: Countdown & Quotes Web App

🧾 Description:

This is a simple web application that displays motivational quotes, cycling through them every few seconds with a countdown timer. It uses HTML, CSS, JavaScript, and Bootstrap for styling. Each quote is displayed over a background image with an overlay card layout.

📁 File Structure:

project-folder/
├── index.html
├── script.js
└── images/
    └── images.jpg


📄 1. index.html

Purpose: The main structure of the webpage.

Key Elements:

Bootstrap CDN: For responsive design and styling.

Countdown Display: <p id="countdown"> updates every second.

Quote Card:

Image background (images.jpg)

Overlay quote and author text



🧠 2. script.js

Purpose: Controls the dynamic logic for rotating quotes and countdown.

Key Features:

Quotes Array: Stores quote and author pairs.

Initial Display: Displays the first quote on load.

Countdown Timer:

Starts at 6 seconds.

Updates every second using setInterval.

Every 5 seconds, it switches to the next quote.

Quotes loop in a cycle using index = (index + 1) % quotes.length.

Variables Used:

quotes: Array of quote objects.

index: Current quote index.

countdown: Time in seconds to next quote.

DOM selectors for .quote-text, .quote-author, and #countdown.

🖼️ 3. images.jpg

Purpose: Used as the background image in the quote display card.

Located at: ./images/images.jpg

Displayed using Bootstrap’s card-img and card-img-overlay classes.

🎨 Styling:

Background: Set via CSS to #E5E4E2 (light gray).

Typography: Bootstrap fonts and weights (fw-bold, text-center, etc.)

Colors:

Heading: #2E342F

Countdown: #563131

Responsive Layout: Bootstrap grid system (col-md-6 mx-auto).

💡 Usage:
Open index.html in a browser.

Watch quotes change every 5 seconds with a visible countdown.

Use as a motivational widget, screensaver, or quote rotato
