# 🌐 Ecozy — Your Voice. Echoed.

Ecozy is a modern social media platform where your voice echoes and the world listens. Designed with React, Node.js, Express, and MongoDB, it delivers a responsive, privacy-conscious space for real-time expression, community building, and seamless interaction.

🌐 Ecozy — Features 
👤 User Authentication
Register, login, and logout functionality.

JWT-based authentication to securely manage sessions.

Password encryption and secure storage.

🏠 Personalized Feed
View posts from other users in a clean, chronological feed.

Like, comment, and interact with posts.

✍️ Create & Manage Posts
Add posts with text, location, and optional images.

Edit or delete your own posts.

🤝 Friends / Connections
View other users and send friend requests.

Accept/remove friends.

See your friends’ posts on your timeline.

📸 Profile System
View your profile or others’ profiles.

Upload a profile picture.

Update your bio or location.

🗂️ Responsive Dashboard
Accessible on desktop and mobile.

User-friendly layout using Material UI (MUI) components.

🌈 UI/UX Highlights
Built using React + Redux for state management.

Theming with light/dark mode toggle.

Smooth animations and transitions.

⚙️ Backend Functionality
RESTful API built with Express.js.

MongoDB database to store users, posts, likes, and friendships.

Secure route protection using JWTs.

## 🛠️ Tech Stack

| Layer        | Tech Used                              |
|--------------|----------------------------------------|
| Frontend     | React, Redux, Material-UI (MUI)        |
| Backend      | Node.js, Express                       |
| Database     | MongoDB with Mongoose ODM              |
| Authentication | JWT, Bcrypt                          |
| Image Upload | Multer (server), FormData (client)     |
| Deployment   | (Optional) Render / Vercel / Netlify   |

---

## 📁 Folder Structure

Ecozy/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ ├── pages/
│ └── state/
├── server/ # Express backend
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── index.js
└── README.md


---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or yarn
- MongoDB installed or cloud URI (e.g. MongoDB Atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/TMR2005/Ecozy.git
cd Ecozy

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start the backend
cd server
npm start

# Start the frontend
cd ../client
npm start
```
📷 Screenshots
Login
![image](https://github.com/user-attachments/assets/98b4cd59-67f5-4cc3-810a-6e23c689c2bf)
HomePage with posts of other users.
![image](https://github.com/user-attachments/assets/92f08bac-3fce-43ce-9a2a-45441239a026)
UserPage showing Posts and details of the specific user
![image](https://github.com/user-attachments/assets/170d781f-75b5-4e55-8624-4d8fe86c8f0f)





