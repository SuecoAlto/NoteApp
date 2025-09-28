
# NoteApp - A Fullstack Notes Application (MERN)

Welcome to NoteApp! This is a complete fullstack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, read, update, and delete notes through a clean and modern user interface. The project is developed to demonstrate a comprehensive understanding of modern web development, from API design and database management to frontend development and cloud deployment.

## Live Demo

You can try NoteApp live, hosted on [Render.com](https://render.com/).  

👉 [**Click here to open the live demo!**](https://noteapp-m96q.onrender.com/)  

⚠️ Please note: 
Since the app is hosted on Render’s free tier, the server “sleeps” when inactive.  
This means it may take up to **1–2 minutes** for the application to fully start the first time you open it. Once it’s awake, it runs smoothly.

-----

## Technical Overview (Tech Stack)

The project is divided into a backend server and a frontend client, built with the following technologies:

### Backend

  * **Node.js**: JavaScript runtime environment for running server-side code.
  * **Express.js**: Minimal and flexible Node.js framework for building the API and handling routes.
  * **MongoDB**: NoSQL database for storing notes data, managed via the MongoDB Atlas cloud service.
  * **Mongoose**: ODM (Object Data Modeling) library to simplify interactions with the MongoDB database.
  * **Upstash & Redis**: Used to implement a serverless rate limiter that protects the API from overload.
  * **Dotenv**: For managing environment variables and keeping sensitive information (such as API keys and database URI) secure.

### Frontend

  * **React**: JavaScript library for building dynamic and interactive user interfaces.
  * **Vite**: Modern and extremely fast build tool for frontend development.
  * **React Router**: For handling client-side routing and navigation between different pages of the application.
  * **Axios**: Promise-based HTTP client for smooth communication with the backend API.
  * **Tailwind CSS**: A utility-first CSS framework for fast and responsive design directly in JSX code.
  * **DaisyUI**: Component library for Tailwind CSS that provides ready-made and customizable UI components.
  * **Lucid React**: Library for clean and elegant icons.
  * **React Hot Toast**: For displaying user-friendly notifications (toasts).

-----

## Features

  * **Full CRUD functionality**: Create, Read, Update, and Delete notes.
  * **Responsive Design**: The UI is built with Tailwind CSS and fully adaptable for both desktop and mobile devices.
  * **RESTful API**: A well-documented and structured backend API to handle all data.
  * **API Protection**: Server-side rate limiting implemented to prevent abuse and overload.
  * **Organized Code Structure**: The project is split into logical modules for both backend (`routes`, `controllers`, `models`) and frontend (`pages`, `components`), following best practices for maintainability.

-----

## Getting Started Locally

Follow these steps to clone and run the project on your local machine.

### Prerequisites

  * Node.js (LTS version recommended)
  * NPM (comes with Node.js)
  * Git

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SuecoAlto/NoteApp.git
    cd NoteApp
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Configure environment variables (Backend):**

      * Navigate back to the `backend` folder.
      * Create a file named `.env`.
      * Add the following variables and replace the values with your own from MongoDB Atlas and Upstash:
        ```
        MONGO_URI=your_mongodb_atlas_connection_string
        PORT=5001
        UPSTASH_REDIS_REST_URL=your_upstash_redis_url
        UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
        ```

5.  **Run the application:**

      * **Start the backend server:** Open a terminal in the `backend` folder and run:

        ```bash
        npm run dev
        ```

        The server will start on `http://localhost:5001`.

      * **Start the frontend client:** Open a *new* terminal in the `frontend` folder and run:

        ```bash
        npm run dev
        ```

        The application will be available at `http://localhost:5173` (or another port shown in the terminal).

-----

## Project Structure

The project is divided into two main parts, `backend` and `frontend`, to clearly separate responsibilities.

```
/
├── backend/
│   ├── src/
│   │   ├── config/       # Database connection
│   │   ├── controllers/  # Logic for API routes (CRUD)
│   │   ├── middleware/   # Rate limiting
│   │   ├── models/       # Mongoose schemas for data
│   │   └── routes/       # Definition of API endpoints
│   └── server.js         # Main server file
│
└── frontend/
├── src/
│   ├── components/   # Reusable React components (Navbar, NoteCard)
│   ├── lib/          # Axios configuration
│   └── pages/        # Components for each page (HomePage, CreatePage)
└── App.jsx           # Main component with routing
```
-----

## Deployment

This application is prepared for easy deployment to cloud platforms such as [Render.com](https://render.com/).

1.  **Connect GitHub repo:** Connect this repository to a new "Web Service" on Render.
2.  **Configure build commands:**
      * **Build Command**: `npm run build`
      * **Start Command**: `npm run start`
3.  **Environment variables:** Add all variables from your `.env` file (`MONGO_URI`, `PORT`, `UPSTASH_...`) in Render’s environment settings.
4.  **Deploy!** Render will automatically install dependencies, build the frontend, and start the backend server.

-----

SuecoAlto
