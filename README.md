# Simple Web Server Using Node.js and Express.js

## Aim
To create a simple web server using Node.js and Express.js with multiple routes, static web pages, and a contact form that processes submitted data.

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- Git and GitHub

## Features
- Serves a homepage with CSS styling.
- Provides Home, About, and Contact routes.
- Displays static files from the `public` folder.
- Accepts Name, Email, and Message through a contact form.
- Processes form data using an Express.js POST route.
- Displays the submitted details on a result page.

## Project Structure
- `server.js` — Express server and route handling.
- `public/index.html` — Homepage.
- `public/style.css` — Stylesheet.
- `public/form.html` — Contact form.
- `package.json` — Project configuration and dependencies.

## Installation and Execution

1. Install Node.js.
2. Open a terminal in the project folder.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node server.js`

5. Open the homepage:

   `http://localhost:3000`

6. Open the contact form:

   `http://localhost:3000/form.html`

## Routes
- `/` — Homepage.
- `/home` — Home route.
- `/about` — About route.
- `/contact` — Contact route.
- `/form.html` — Contact form.
- `/submit` — Processes submitted form data using POST.

## Result
The web server was created successfully using Node.js and Express.js. Static webpages, multiple routes, and contact form submission were tested successfully.
