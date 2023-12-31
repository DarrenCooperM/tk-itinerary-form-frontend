# TK Web Application Frontend

This project is the frontend of a web application for a training system, TK, that enables users to send an itinerary of activities to a recipient. Users can view all sent emails and itineraries, as well as delete emails.

## Getting Started

Clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
npm install
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.

```bash
npm run build
```

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Core Features

- User authentication: Users can sign in to the application using Firebase Authentication.
- Form submission: Authenticated users can submit a form to send an email with an itinerary of activities.
- Email Collection view: Authenticated users can view all the emails they have sent.
- Delete email: Authenticated users can delete any email from the email collection.

## Tech Stack

- <u>React</u>
- <u>Firebase</u>
- <u>React Router</u>
- <u>Axios</u>

## Folder Structure

The frontend code resides in the src directory. Within src, you'll find the following directories and files:

```bash
src/
├── components/
│   ├── Form.js
│   ├── Navbar.js
│   ├── SentEmails.js
│   └── // other components
├── utils/
│   ├── Firebase.js
│   └── // other utilities
├── App.js
└── index.js

```

## Styling

Styling is done using CSS Modules. Each React component has its own CSS file, and class names are scoped to each component.

## Code Conventions

- ES6 syntax
- Functional components with hooks
- React Router for routing
- Environment variables for sensitive data
- Promises and async/await for async operations
- Error handling with try/catch blocks

## License

This project is licensed under the MIT License.

## Contact

For any queries, please feel free to reach out to my github
