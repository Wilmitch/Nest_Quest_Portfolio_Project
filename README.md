# ABOUT NEST QUEST

Nest Quest is a house hunting web application that facilitates tenants with the process of finding a suitable home to move to and landlords with finding suitable tenants for their properties.

## AUTHOR

SE. WILFRED MAINA MWANGI

## Project Description

The Nest Quest project is designed and crafted to assist individuals navigate the complexities of the rental market and achieving the important goal of landing the ideal rental home.
It will provide a step-by-step guide, covering the important aspects like Budgeting, property searching, viewing the listed properties, lease agreements and have an option for the owners to showcase their available properties.
Budget - Understanding and determining monthly rental budget on income and expenses basis.
Needs defined - Identifying the key requirements like bedrooms, baths, while considering the location and lifestyle factors.
Search strategies - Effective property search using relevant keywords to refine search results, setting up alerts for new listings with matching criteria, and filtering to narrow down the results based on provided considerations.
Viewings - Scheduling and attending viewings, thorough inspection of property and documenting key features, concerns and even negotiations.
Lease agreements - Reviewing essentials details like rent amount, security deposits, lease terms, while understanding tenant obligations and exploring negotiation possibilities eg rent, pet policies and move-in dates.
Securing and settling - Completing rental applications while providing requirement documentation and if successful meeting the rental requirements and then later moving in.

# PROJECT SETUP

## Prerequisites

- Node.js and npm installed on your system.
- MongoDB installed and running locally or a MongoDB Atlas account.
- Firebase project created with necessary configurations.

## Clone the Project

- Clone the project repository from GitHub - https://github.com/Wilmitch/Nest_Quest_Portfolio_Project.git
- Navigate to the project directory in your terminal.

## Install Dependencies

-     Run `npm install` to install all project dependencies listed in `package.json`.

## Environment Variables

- ## Create an `.env` file or use a suitable environment variable management tool at the root of your project.
- ## Add the following environment variables
  - `MONGODB_URI`: Connection string for your MongoDB database.
  - `JWT_SECRET`: Secret key for signing JWTs.
  - `FIREBASE_API_KEY`: Your Firebase API key.
  - `FIREBASE_AUTH_DOMAIN`: Your Firebase Auth domain.
  - `FIREBASE_PROJECT_ID`: Your Firebase project ID.
  - `FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket.
  - `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID.
  - `FIREBASE_APP_ID`: Your Firebase app ID.
  - `FIREBASE_MEASUREMENT_ID`: Your Firebase measurement ID.

## Start the Development Server

- Run `npm run dev` to start the development server. Vite will handle hot module reloading, and Nodemon will automatically restart the server on file changes.

## Usage Guidelines

- ## Frontend (React)
  - ## User Interface
    - Explore the application's user interface components including:
      - User registration/login forms.
      - Property listing pages (search, filter).
      - Property detail pages (images, descriptions, amenities).
      - User profiles.
      - Contact forms for emailing platform.
    - User Interactions
      - Test all user interactions including:
        - Searching for properties by location, type and amenities available.
        - Filtering properties based on criteria.
        - Contacting property owners via builtin mailto.
        - Creating and updating user profiles.
  - ## Frontend logic
    - Review how React components handle user interactions, state management, and data fetching.
    - Examine the use of React Router for navigation.
    - Understand how components interact with the backend API.
- ## Backend (Express with Node.js)
  - ## API Endpoints
    - Test all API endpoints using tools like Insomnia:
      - User authentication including registration, login and logout.
      - Property listing endpoints including GET, POST and DELETE.
      - User profile endpoints.
      - Contact endpoints.
    - ## Data Handling
      - Verify that the backend correctly interacts with the MongoDB database.
      - Examine how data is validated, sanitized, and transformed.
      - Understand how JWTs are used for authentication and authorization.
  - ## Backend Logic
    - Review the implementation of backend logic:
      - Property search and filtering algorithms.
      - User authentication and authorization mechanisms.
  - ## Error Handling
      - Test how the backend handles errors and provides appropriate responses.
- ## Testing
  - ## Integration Tests
    - Test the integration between frontend and backend components.
  - ## End-to-End Tests
    - Perform end-to-end tests to simulate real user scenarios.
- ## Deployment
  - ## Frontend
    - Deploy the React application to a hosting platform.
  - ## Backend
    - Deploy the Node.js server to a cloud platform.
  - ## Database
    - Ensure that the MongoDB database is properly configured and accessible from the deployed server.
- ## Maintenance
  - ## Monitoring
    - Implement monitoring and logging to track application performance and identify potential issues.
  - ## Bug Fixes
    - Address any reported bugs and issues promptly.

## Technologies Used

- ## Frontend - React, React Router, Tailwind CSS, PostCSS Autoprefixer, React Icons, Swiper.js
- ## Backend - Node.js, Express.js, MongoDB, JWT, Bcrypt
- ## Development - Vite, Nodemon
- ## Testing - Insomnia
- ## Others - npm, Firebase, Regex
