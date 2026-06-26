# 🚀 AI Resume Interview Planner

An AI-powered interview preparation platform that analyzes a candidate's resume and target job description to generate personalized interview questions, identify skill gaps, calculate job match score, and create a structured preparation roadmap.

🌐 **Live Demo:** [https://ai-resume-project-t083.onrender.com](https://ai-resume-project-t083.onrender.com)

---

## 📌 Features

### 🔐 Authentication System

* User Registration
* Secure Login
* Session Management
* Logout Functionality

### 📄 Resume Analysis

* Upload Resume (PDF)
* Extract candidate information
* Analyze skills and experience
* Compare profile against target job requirements

### 🎯 Job Description Matching

* Paste target job description
* AI-powered requirement analysis
* Candidate-job compatibility evaluation
* Match score calculation

### 🤖 AI Interview Preparation

* Generate Technical Interview Questions
* Generate Behavioral Interview Questions
* Personalized interview preparation strategy
* Context-aware question generation

### 📊 Skill Gap Analysis

* Identify missing skills
* Highlight improvement areas
* Recommend technologies to learn
* Track interview readiness

### 🗺️ Preparation Roadmap

* Day-wise learning plan
* Topic recommendations
* Practice strategy
* Interview preparation timeline

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router v7
* Axios
* SCSS / Sass
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### AI Integration

* Google Gemini API (`gemini-1.5-flash`)

### Authentication

* JWT Authentication
* Bcrypt Password Hashing
* HTTP-only Cookies

---

## 📁 Project Structure

```
ai-resume-project/
├── Backend/
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Auth & Interview controllers
│   │   ├── middlewares/    # Auth & File middlewares
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Gemini AI service
│   │   └── app.js          # Express app setup
│   ├── .env                # Environment variables (not committed)
│   └── server.js           # Entry point
└── Frontend/
    ├── src/
    │   ├── config/         # API base URL config
    │   ├── api/            # Axios API calls
    │   └── ...
    ├── .env                # Frontend env variables (not committed)
    └── package.json
```

---

## ⚙️ Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/rajatDevX/ai-resume-project.git
cd ai-resume-project
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create `Backend/.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start Backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

Create `Frontend/.env` file:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start Frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`, Backend on `http://localhost:3000`.

---

## 🚀 Deployment (Render)

This project is deployed as a **single service** on Render — Backend serves the Frontend build.

### Environment Variables (Render Dashboard)

| Key | Value |
|-----|-------|
| `MONGO_URI` | Your MongoDB Atlas URI |
| `JWT_SECRET` | Your JWT secret key |
| `GOOGLE_GENAI_API_KEY` | Your Gemini API key |
| `NODE_ENV` | `production` |

### Build Command

```bash
cd Frontend && npm install --include=dev && npm run build && cd ../Backend && npm install
```

### Start Command

```bash
cd Backend && node server.js
```

---

## 📸 Application Screenshots

### User Login

![Login Page](screenshots/login.png)

### User Registration

![Register Page](screenshots/register.png)

### Resume & Job Description Upload

![Resume Upload](screenshots/dashboard.png)

### Technical Interview Questions

![Technical Questions](screenshots/technical-questions.png)

### Behavioral Interview Questions

![Behavioral Questions](screenshots/behavioral-questions.png)

### Personalized Preparation Roadmap

![Roadmap](screenshots/roadmap.png)

---

## 📂 Project Workflow

1. User registers or logs in.
2. Uploads resume (PDF) or enters profile details.
3. Pastes target job description.
4. AI analyzes both inputs using Gemini API.
5. Match score is calculated.
6. Skill gaps are identified.
7. Technical and behavioral questions are generated.
8. Personalized roadmap is created.
9. User prepares using the generated strategy.

---

## 🎯 Future Enhancements

* Mock Interview Simulator
* Voice-Based Interviews
* ATS Resume Scoring
* Interview Performance Analytics
* Company-Specific Interview Preparation
* AI Feedback System

---

## 👨‍💻 Author

Developed as an AI-powered Interview Preparation and Resume Analysis Platform to help candidates improve interview readiness and maximize job matching opportunities.