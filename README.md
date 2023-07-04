# MERN Profile Card Project

This repository contains a MERN (MongoDB, Express, React, Node.js) stack project that implements a profile card section. The project is developed as an assignment for an internship.

## Project Overview

The MERN Profile Card Project consists of two main components: the frontend and the backend.

### Frontend

The frontend is built using React.js and provides an interactive user interface for displaying profile cards. It retrieves data from the REST API implemented in the backend and dynamically renders the profile cards accordingly. To run the frontend, use the following command:

```bash
npm start
```

### Backend

The backend is developed using Node.js and Express.js framework. It serves as the API endpoint for retrieving profile card data. It connects to a MongoDB database to store and retrieve the necessary information. The backend utilizes nodemon for automatic server restarts during development. To run the backend, use the following command:

```bash
nodemon index.js
```

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone "https://Mohit-9440/mohit_assignment_3"
```

2. Install the dependencies for the frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

3. Configure the MongoDB connection in the backend:

   - Open the `backend/.env` file and replace the `<mongo-uri>` placeholder with your MongoDB connection URI.

4. Run the frontend and backend:

   - Start the frontend:

   ```bash
   cd frontend
   npm start
   ```

   - Start the backend:

   ```bash
   cd backend
   nodemon index.js
   ```

5. Access the application in your browser:

   - Open `http://localhost:3000` to view the frontend interface.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
