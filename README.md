# 🚀 FactiScan — AI Misinformation Detection Platform

> Detect misinformation before it spreads.

FactiScan is a production-grade AI-powered misinformation detection platform designed for journalists, researchers, and organizations to analyze and verify text, images, videos, and links in real time.

---

## 🎯 Core Features

- Multi-modal analysis (Text, Image, Video, Link)
- Verdict: FAKE / REAL
- Confidence score (0–100%)
- Risk level (LOW / MEDIUM / HIGH)
- Domain classification
- Evidence signals & explainability
- Counter messaging & actionable steps
- Provenance tracking

---

## 🏗️ Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Recharts

---

## 📁 Project Structure

```
/src
  /components
    /ui
    /analysis
    /dashboard
  /pages
  /hooks
  /lib
  /types
  /data
```

---

## 🧭 Routes

- `/` → Home
- `/analyze` → Analysis input
- `/result` → Results dashboard
- `/dashboard` → Insights
- `/media` → Media detection
- `/about`
- `/contact`

---

## 🧠 Data Schema

```ts
type AnalysisResult = {
  verdict: "FAKE" | "REAL";
  confidence: number;
  domain: string;
  risk: "LOW" | "MEDIUM" | "HIGH";
  explanation: string[];
  evidence: string[];
  counter_message: string;
  actions: string[];
  provenance: {
    earliest_known_use: string;
    reused_content: string;
    context_mismatch: string;
  };
};
```

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/factiscan.git
cd factiscan
npm install
npm run dev
```

---

## 🧪 Status

- UI: Complete
- Backend: Not integrated
- Data: Mock

---

## 📌 Future Work

- AI model integration
- Authentication
- Real-time alerts
- Advanced analytics

---

## 👩‍💻 Author

Avishi Verma
