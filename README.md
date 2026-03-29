# Shubham Yadav – Developer Portfolio

A Google Search–inspired developer portfolio built with **React + Vite** (frontend) and **Node.js + Express** (backend), structured as a monorepo and deployed on **Vercel**.

## 🔗 Live Demo

Deployed at: [portfolio on Vercel]

## ✨ Features

- 🔍 Google Search–style UI to explore skills, projects, experience & achievements
- 🤖 AI chatbot assistant powered by the Express API
- 🌗 Dark / Light mode toggle
- ⭐ "I'm Feeling Lucky" featuring a random project showcase
- 📱 Fully responsive design
- 💬 Autocomplete search suggestions

## 🛠️ Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React 18, Vite 5              |
| Backend   | Node.js, Express 5            |
| Styling   | Vanilla CSS with animations   |
| Deployment| Vercel (monorepo)             |

## 🚀 Getting Started Locally

### 1. Clone the repo
```bash
git clone https://github.com/code0era/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm run install:all
```

### 3. Set up environment variables
```bash
# In client/.env
VITE_API_URL=http://localhost:5000
```

### 4. Run development servers
```bash
# Terminal 1 – Backend
npm run dev:server

# Terminal 2 – Frontend
npm run dev:client
```

Frontend runs on **http://localhost:3000**  
Backend runs on **http://localhost:5000**

## 📦 Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Vercel auto-detects `vercel.json` and deploys both frontend & backend
4. No extra config needed — routes are pre-configured!

## 📁 Project Structure

```
Portfolio/
├── client/           # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/           # Express backend
│   ├── data/
│   │   └── portfolio.js
│   ├── index.js
│   └── package.json
├── vercel.json       # Vercel monorepo config
├── package.json      # Root scripts
└── .gitignore
```

## 👤 Author

**Shubham Yadav**  
📧 ashubhamyadav61@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/shubham-yadav-38a467267/)  
🐙 [GitHub](https://github.com/code0era)
