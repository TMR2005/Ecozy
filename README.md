#### 🌐 Ecozy — Your Voice. Echoed.
Ecozy is a modern social media platform where your voice echoes and the world listens. Built with React, Node.js, Express, and MongoDB, it offers a responsive, privacy-conscious space for real-time expression, community building, and seamless interaction.

<div align="center">





</div>
🚀 Features
👤 User Authentication
Register, login, and logout.

JWT-based authentication for secure sessions.

Password encryption with bcrypt.

🏠 Personalized Feed
View posts from other users in a clean, chronological layout.

Like and comment on posts in real-time.

✍️ Create & Manage Posts
Create posts with text, location, and optional images.

Edit or delete your own posts seamlessly.

🤝 Friends / Connections
Browse and search for users.

Send, accept, or remove friend requests.

View friends’ posts in your main feed.

📸 Profile System
View your own or others’ profile pages.

Upload a profile picture.

Edit bio, location, and account details.

🖥️ Responsive UI
Mobile and desktop-friendly layout.

Built with Material UI (MUI) for a sleek interface.

🌈 UI/UX Highlights
Light/Dark mode toggle.

State management with Redux.

Smooth animations and transitions.

⚙️ Backend Functionality
RESTful APIs with Express.js.

MongoDB for storing users, posts, and friends.

Protected routes using JWT middleware.

🛠️ Tech Stack
Layer	Technologies
Frontend	React, Redux, Material UI (MUI)
Backend	Node.js, Express.js
Database	MongoDB with Mongoose
Authentication	JWT, Bcrypt
File Uploads	Multer (server), FormData (client)
Deployment	(Optional) Render, Vercel, Netlify

📁 Project Structure
perl
Copy
Edit
Ecozy/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── state/
├── server/              # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
└── README.md
🧑‍💻 Getting Started
📦 Prerequisites
Node.js ≥ 16

npm or yarn

MongoDB locally or MongoDB Atlas

⚙️ Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/TMR2005/Ecozy.git
cd Ecozy

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start the backend server
cd ../server
npm start

# Start the frontend client
cd ../client
npm start
🖼️ Screenshots
🔐 Login


🏠 Home Page with Posts


🙍‍♂️ User Profile Page


📌 Future Enhancements (Optional)
Real-time chat/messaging system.

Notification system for likes, comments, and friend requests.

Explore page with trending content.

Admin dashboard for user and content moderation.
