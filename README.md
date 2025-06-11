# 🌐 Ecozy — Your Voice. Echoed.

Ecozy is a modern social media platform where your voice echoes and the world listens. Designed with React, Node.js, Express, and MongoDB, it delivers a responsive, privacy-conscious space for real-time expression, community building, and seamless interaction.

---

## 🚀 Features

### 🧑‍🤝‍🧑 Social Interactions
- Create posts with text and images
- Like and comment on other users' posts
- View a feed of posts from people you follow

### 🙋‍♂️ User Profiles
- Upload profile pictures
- View other users' bios and location
- Add or remove friends

### 🔐 Authentication
- Secure login & registration with JWT
- Redux-managed session state

### 🖼️ Media Uploads
- Post and profile image uploads via Multer
- Static file storage for media content

### 📱 Responsive UI
- Built with Material-UI (MUI)
- Mobile and desktop friendly

---

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

#Start the server
cd server
node index.js

#Start front-end
cd client
npm start
```
---

📷 Screenshots
🔐 Login
![image](https://github.com/user-attachments/assets/19308b80-fa42-4290-9dcc-8bff633bb7b0)


🏠 Home Page with Posts
![image](https://github.com/user-attachments/assets/a78d01c0-1fb8-4de2-b929-f809de6589a0)


🙍‍♂️ User Profile Page
![image](https://github.com/user-attachments/assets/51e6db9b-8d00-4c54-b4d1-2b79b752af11)
---

## 📌 Future Enhancements.
-Real-time chat/messaging system.

-Notification system for likes, comments, and friend requests.

-Explore page with trending content.

-Admin dashboard for user and content moderation.


