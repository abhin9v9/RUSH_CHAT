# Rush Chat Application

This is a real-time chat application with simple authentication functionality, allowing users to sign up, log in, and chat with each other. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and Socket.io. The application includes authentication via JWT but does not implement OAuth.

## Technologies Used

### Frontend:
- **React.js**
- **Axios**
- **React Router DOM**
- **React Hook Form**
- **React Hot Toast**
- **React Icons**
- **Socket.io Client**
- **Zustand**
- **JS-Cookie**

### Backend:
- **Node.js**
- **Express.js**
- **Mongoose**
- **Bcrypt.js**
- **Cookie-Parser**
- **Cors**
- **Dotenv**
- **JSON Web Token (JWT)**
- **Socket.io**
- **Nodemon**

## Features

- **User Authentication:** Simple sign-up and login using JWT.
- **Real-time Chat:** Users can send and receive messages in real-time using Socket.io.
- **Persistent Sessions:** User sessions are managed with cookies to keep users logged in.
- **Responsive Design:** Optimized for different screen sizes and devices.
- **Basic Error Handling:** Alerts and notifications for errors (e.g., invalid login) using React Hot Toast.
  
## Configuration and Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Create a `.env` file in the root of the server directory and supply the following credentials:
   ```bash
   PORT=5002
   MONGO_URI=<Your MongoDB Connection URI>
   JWT_SECRET=<Your JWT Secret>
   CLIENT_URL=http://localhost:3001
   ```
3. Install server dependencies and start the server:
   ```bash
   npm install
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Create a `.env` file in the root of the client directory and supply the following credentials:
   ```bash
   REACT_APP_SERVER_URL=http://localhost:8000
   ```
3. Install client dependencies and start the client:
   ```bash
   npm install
   npm start
   ```

### 4. Running the Application
Once both the server and client are running, visit `http://localhost:3001` to use the chat application.

## Folder Structure

- **client/** - Contains the React frontend application.
- **server/** - Contains the Node.js backend with Express, Socket.io, and authentication logic.

## Contributing

Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

To contribute:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push your branch to your forked repository: `git push origin my-new-feature`.
5. Open a Pull Request on the main repository.

## License

This project is licensed under the MIT License.

