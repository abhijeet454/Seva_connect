# 🌱 Seva Connect - ESG Monitoring & Sustainability Dashboard

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/Frontend-React.js-blue.svg)
![Node](https://img.shields.io/badge/Backend-Node.js-green.svg)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)

**Seva Connect** is a comprehensive, production-ready enterprise tool designed to track and analyze Environmental, Social, and Governance (ESG) metrics within and outside organizations. Built with a rich **Sustainability Theme**, it provides sector-specific rankings and AI-driven recommendations to help institutions achieve their green goals.

## ✨ Features

- **Real-time ESG Metrics Tracking:** Monitor energy, air, water, and solid waste metrics in real-time.
- **Premium Sustainability UI/UX:** A bespoke, earthy, and modern interface utilizing glassmorphism, responsive typography, and tailored green accents.
- **Data Visualizations:** Interactive charts (Pie, Bar, Line) via Nivo for insightful analysis.
- **Sector-Specific Rankings:** Assess comparative sustainability performance.
- **AI Recommendations:** Suggestive techniques to improve ESG rankings.
- **Authentication & Security:** Robust JWT-based and Firebase authentication flow.
- **Investor Section & Team Management:** Explore projects, track investments, and manage team data directly from the dashboard.

## 🛠 Tech Stack

- **Frontend:** React.js, Material-UI (MUI), TailwindCSS, Nivo (Data Visualization), React Pro Sidebar.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Mongoose).
- **Authentication:** JWT (JSON Web Tokens), Firebase Auth.
- **AI Models:** TensorFlow, Keras, Scikit-Learn.

## 📁 Repository Structure

```text
seva-connect/
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   ├── src/                # React source code
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context (Auth)
│   │   ├── scenes/         # Page views and dashboards
│   │   ├── App.js          # Main routing file
│   │   ├── theme.js        # MUI and custom sustainability theme config
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind config
├── server/                 # Node.js backend API
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Express middlewares (Error Handling, etc.)
│   ├── models/             # Mongoose database models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── .editorconfig           # Editor configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

Follow these steps to run Seva Connect locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URL)

### 1. Clone the Repository

```bash
git clone https://github.com/abhijeet454/Seva_connect.git
cd Seva_connect
```

### 2. Environment Setup

Configure your environment variables by copying the examples provided:

```bash
# Backend Environment Setup
cd server
cp .env.example .env

# Frontend Environment Setup
cd ../client
cp .env.example .env
```

*Be sure to fill in your `MONGODB_URI` and `JWT_SECRET` in `server/.env`.*

### 3. Installation & Running

Open two terminal windows to run both the frontend and backend servers simultaneously.

**Backend Server:**
```bash
cd server
npm install
npm start
# The server will run on http://localhost:8080
```

**Frontend Client:**
```bash
cd client
npm install
npm start
# The client will run on http://localhost:3000
```

## 🤝 Contributing

We welcome contributions to improve Seva Connect! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started, our branching strategy, and pull request processes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Developed with 💚 by Abhijeet Kumar for a greener tomorrow.*
