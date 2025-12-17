KITCHEN BUDDY – SMART COOKING TIPS & RECIPE INSPIRATION APP

PROJECT DESCRIPTION

Kitchen Buddy is a lightweight, client-side web application that helps users
store, manage, and explore everyday cooking tips while also providing recipe
inspiration from an external API.

The application allows users to add, search, filter, and delete cooking tips
based on categories such as Cooking, Leftovers, Microwave, and Kitchen Hacks.
All data is stored locally in the browser using LocalStorage, ensuring
persistence without the need for a backend server.

The project is built entirely using HTML, CSS, and JavaScript, demonstrating
core front-end development concepts and modern JavaScript practices.


FEATURES

- Add and delete cooking tips dynamically
- Category-based filtering and live search
- Persistent data storage using LocalStorage
- Responsive card-based layout using CSS Grid
- Modal-based form for user input
- External recipe inspiration using Fetch API
- Single Page Application (SPA) behavior without page reloads


TECHNOLOGIES USED

- HTML5 – Structure and semantic elements
- CSS3 – Styling, layout, and responsiveness
- JavaScript (ES6) – Logic, DOM manipulation, and interactivity
- LocalStorage API – Client-side data persistence
- Fetch API – Asynchronous data fetching from an external API


PROJECT STRUCTURE

/Kitchen-Buddy
│
├── index.html        # Main HTML file
├── styles2.css       # CSS styling and layout
├── script2.js        # JavaScript logic and functionality
└── README.txt        # Project documentation


HOW TO RUN THE PROJECT

1. Download or clone the repository.
2. Open the project folder.
3. Double-click on index.html
   OR
   Open index.html in any modern web browser.
4. The application will run locally without any setup.


HOW THE APPLICATION WORKS

- Cooking tips are stored as an array of objects in JavaScript.
- Data is saved and retrieved using browser LocalStorage.
- The render() function dynamically updates the UI.
- Filter buttons use data attributes for category selection.
- A modal dialog is used for adding new tips.
- Recipe data is fetched asynchronously from an external API.


LIMITATIONS

- Data is stored only in the browser (no server or database).
- No user authentication or multi-user support.
- Limited form validation.
- Depends on third-party API availability for recipes.


FUTURE ENHANCEMENTS

- Edit existing cooking tips
- Add tags or difficulty levels
- Improve accessibility features
- Add backend support for multi-device access
- Enhance UI animations and transitions


AUTHOR
The project was developed as an academic front-end development project.

