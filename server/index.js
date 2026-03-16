const express = require("express");
const cors = require("cors");
const { portfolioData, allResults } = require("./data/portfolio");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Get all results (for initial load / "Top" tab)
app.get("/api/results", (req, res) => {
  const { q, category } = req.query;
  let results = allResults;

  if (category && category !== "all") {
    results = results.filter((r) => r.category === category);
  }

  if (q) {
    const query = q.toLowerCase();
    results = results.filter(
      (r) =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.category.toLowerCase().includes(query)
    );
  }

  res.json({ results, total: results.length });
});

// Get single result by id
app.get("/api/results/:id", (req, res) => {
  const result = allResults.find((r) => r.id === req.params.id);
  if (!result) return res.status(404).json({ error: "Not found" });
  res.json(result);
});

// Get featured project (I'm Feeling Lucky)
app.get("/api/lucky", (req, res) => {
  const projects = allResults.filter((r) => r.category === "projects" && r.featured);
  const lucky = projects[Math.floor(Math.random() * projects.length)];
  res.json(lucky);
});

// Autocomplete suggestions
app.get("/api/suggest", (req, res) => {
  const { q } = req.query;
  if (!q || q.length < 2) return res.json({ suggestions: [] });

  const query = q.toLowerCase();
  const suggestions = [
    "Shubham Yadav",
    "MERN developer",
    "full stack developer",
    "AI ML engineer",
    "YOLOv8 project",
    "MVision-AI",
    "Drona.ai",
    "VAANI chat app",
    "React developer",
    "Node.js developer",
    "computer vision",
    "IIIT Kalyani",
    "LeetCode Knight",
    "projects",
    "skills",
    "experience",
    "contact",
    "achievements",
    "education",
  ].filter((s) => s.toLowerCase().includes(query));

  res.json({ suggestions: suggestions.slice(0, 8) });
});

// Chatbot endpoint
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  const msg = message.toLowerCase().trim();
  let response = "";
  let action = null;

  if (msg.includes("who are you") || msg.includes("introduce") || msg.includes("about you") || msg.includes("about shubham")) {
    response =
      "Hi! I'm Shubham Yadav's portfolio assistant 🤖\n\nShubham is a final-year B.Tech CS student at IIIT Kalyani (CGPA: 8.28) and a Full Stack Web Developer specializing in integrating Machine Learning and AI to deliver advanced, scalable solutions. He's currently working as Lead Web Developer at WEIntern.";
    action = { type: "navigate", tab: "about" };
  } else if (msg.includes("contact") || msg.includes("reach") || msg.includes("email") || msg.includes("phone") || msg.includes("linkedin")) {
    response =
      "You can reach Shubham through:\n\n📧 ashubhamyadav61@gmail.com\n📞 +91-9569768198\n💼 LinkedIn: linkedin.com/in/shubham-yadav-38a467267\n🐙 GitHub: github.com/code0era\n\nOpening the contact section for you!";
    action = { type: "navigate", tab: "contact" };
  } else if (msg.includes("skill") || msg.includes("tech") || msg.includes("stack") || msg.includes("language")) {
    response =
      "Shubham's tech stack includes:\n\n🔹 Languages: C, C++, Python, JavaScript, TypeScript\n🔹 Full Stack: MERN, Next.js 15, Socket.io\n🔹 AI/ML: YOLOv8, LLMs, RAG, Groq SDK\n🔹 Databases: MongoDB, MySQL, Redis, Supabase\n🔹 Tools: Git, Postman, Vercel, Tailwind CSS";
    action = { type: "navigate", tab: "skills" };
  } else if (msg.includes("project") || msg.includes("mvision") || msg.includes("drona") || msg.includes("vaani")) {
    response =
      "Shubham has built some impressive projects:\n\n🎯 MVision-AI – Military object detection with YOLOv8s (mAP50: 0.995)\n💪 Drona.ai – Voice-native AI fitness platform (<200ms latency)\n💬 VAANI – Real-time chat app with MERN & Socket.io (<100ms latency)\n\nClick Projects tab to explore them!";
    action = { type: "navigate", tab: "projects" };
  } else if (msg.includes("experience") || msg.includes("work") || msg.includes("job") || msg.includes("weintern")) {
    response =
      "Shubham is currently working as Lead Web Developer at WEIntern (Sept 2025 – Present), where he:\n\n• Led end-to-end architecture using React.js & Supabase\n• Optimized data retrieval by 40% via advanced indexing\n• Achieved 95+ Lighthouse performance score";
    action = { type: "navigate", tab: "experience" };
  } else if (msg.includes("education") || msg.includes("college") || msg.includes("iiit") || msg.includes("cgpa")) {
    response =
      "Shubham is a final-year B.Tech Computer Science student at IIIT Kalyani (2022–2026) with a CGPA of 8.28. He scored 96.33% in Class X and 82.40% in Class XII from SD Public School, Jaunpur.";
    action = { type: "navigate", tab: "education" };
  } else if (msg.includes("achievement") || msg.includes("leetcode") || msg.includes("hackathon") || msg.includes("codechef")) {
    response =
      "Shubham's key achievements:\n\n🏆 LeetCode Knight (1851+) – 220+ problems solved\n⭐ CodeChef 2-Star (1520+)\n🎉 Organizer of StatusCode-1 College Hackathon (2024)\n🏅 Data Science Competition participant at IIT Kharagpur\n📜 Postman API Fundamentals Student Expert";
    action = { type: "navigate", tab: "achievements" };
  } else if (msg.includes("resume") || msg.includes("cv") || msg.includes("download")) {
    response =
      "You can view/download Shubham's resume here:\n\n📄 Resume Link (Google Drive)\n\nI'll open it for you!";
    action = { type: "openLink", url: "https://drive.google.com/file/d/13J1OG6DiY0zAWbcjClhruDMAlgYVEaUr/view?usp=sharing" };
  } else if (msg.includes("github")) {
    response = "Shubham's GitHub: github.com/code0era\n\nCheck out his projects and contributions there!";
    action = { type: "openLink", url: "https://github.com/code0era" };
  } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    response =
      "Hello! 👋 I'm Shubham's portfolio assistant. I can help you explore:\n\n• His skills & tech stack\n• Projects he's built\n• Work experience\n• Contact information\n\nWhat would you like to know?";
  } else if (msg.includes("hire") || msg.includes("recruit") || msg.includes("available") || msg.includes("open to")) {
    response =
      "Yes! Shubham is actively looking for Software Development opportunities, especially in Full-Stack or AI/ML teams.\n\n📧 ashubhamyadav61@gmail.com\n📞 +91-9569768198\n\nHe'd love to connect!";
    action = { type: "navigate", tab: "contact" };
  } else {
    response =
      "I can help you learn about Shubham Yadav's:\n\n• 👤 About & Background\n• 💼 Work Experience\n• 🚀 Projects\n• 🛠️ Skills & Tech Stack\n• 🏆 Achievements\n• 📚 Education\n• 📞 Contact Info\n\nWhat would you like to know?";
  }

  res.json({ response, action });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
