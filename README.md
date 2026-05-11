# 🌿 Raithu Mitra AI

AI-powered smart farming assistant built using Next.js, FastAPI, and TensorFlow.

Raithu Mitra AI helps farmers detect plant diseases using AI image classification, receive pesticide recommendations, check weather conditions, use Telugu voice assistance, and access emergency SOS support.

---

# 🚀 Live Demo

## Frontend

Add your deployed Vercel URL here.

```text
https://your-vercel-app.vercel.app
```

## Backend API

Add your deployed Render URL here.

```text
https://your-render-backend.onrender.com
```

---

# 📸 Features

## ✅ AI Plant Disease Detection

* Upload plant leaf images
* TensorFlow model predicts disease
* Confidence score display
* Disease-specific recommendations

---

## ✅ Pesticide Recommendations

* Recommended pesticides for detected disease
* Prevention tips for farmers
* Easy-to-understand UI

---

## ✅ Telugu Voice Assistance

* Text-to-speech using SpeechSynthesis API
* Telugu farming assistance
* Voice playback for prediction results

---

## ✅ Voice Recognition

* Speech-to-text using Web Speech API
* Telugu voice interaction
* Real-time transcription

---

## ✅ Weather Integration

* Real-time weather updates
* Temperature display
* Weather API integration

---

## ✅ Emergency SOS System

* GPS location access
* Google Maps integration
* Emergency location sharing

---

## ✅ Scan History

* Stores previous scans
* View past disease predictions

---

## ✅ Mobile-First UI

* Responsive design
* Modern mobile app layout
* Built with Tailwind CSS

---

# 🛠 Tech Stack

| Layer               | Technology           |
| ------------------- | -------------------- |
| Frontend            | Next.js + TypeScript |
| Styling             | Tailwind CSS         |
| Backend             | FastAPI              |
| Machine Learning    | TensorFlow / Keras   |
| Model Architecture  | MobileNetV2          |
| Deployment Frontend | Vercel               |
| Deployment Backend  | Render               |
| Voice Recognition   | Web Speech API       |
| Voice Output        | SpeechSynthesis API  |
| Weather API         | OpenWeather API      |

---

# 🧠 AI Model

The disease detection model was trained using:

* TensorFlow
* Keras
* MobileNetV2 Transfer Learning

## Supported Diseases

* Tomato Diseases
* Potato Diseases
* Pepper Diseases
* Healthy Plant Detection

---

# 📂 Project Structure

```text
RAITHU-MITRA-AI/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── styles/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── ml/
│   ├── model/
│   ├── main.py
│   ├── train.py
│   ├── requirements.txt
│   └── runtime.txt
│
└── README.md
```

---

# ⚙️ Local Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/hafizurrahaman31/RAITHU-MITRA-AI.git
```

```bash
cd RAITHU-MITRA-AI
```

---

# 🌐 Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

## Create Environment File

Create:

```text
frontend/.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_API_KEY
```

## Run Frontend

```bash
npm run dev
```

---

# ⚡ Backend Setup

## Create Virtual Environment

```bash
cd backend
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Backend

```bash
uvicorn main:app --reload
```

---

# 🤖 Train AI Model

Run:

```bash
python train.py
```

The trained model will be saved for inference.

---

# ☁️ Deployment

## Frontend Deployment

Frontend deployed using:

* Vercel

## Backend Deployment

Backend deployed using:

* Render

---

# 🔑 Important Concepts Learned

* Full Stack Development
* REST APIs
* TensorFlow Integration
* Transfer Learning
* FastAPI Backend Development
* Next.js App Router
* Environment Variables
* Deployment Workflow
* Speech Recognition APIs
* Responsive UI Design
* Component-Based Architecture

---

# 📌 Future Improvements

* Farmer Authentication
* Cloud Database
* Multi-language Support
* Advanced Analytics Dashboard
* Offline Support
* AI Chat Assistant
* Crop Yield Prediction

---

# 👨‍💻 Author

Hafizur Rahaman

GitHub:

```text
https://github.com/hafizurrahaman31
```

---

# ⭐ If You Like This Project

Give this repository a star ⭐ on GitHub.
