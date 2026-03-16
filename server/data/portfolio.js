const portfolioData = {
  about: {
    id: "about",
    title: "Shubham Yadav – Full Stack Developer & AI/ML Engineer",
    url: "portfolio.dev/about",
    description:
      "Final-year B.Tech CS student at IIIT Kalyani (8.28 CGPA). Full Stack Web Developer specializing in integrating Machine Learning and AI to deliver scalable solutions.",
    category: "about",
    details: {
      name: "Shubham Yadav",
      tagline: "Full Stack Developer | AI/ML Engineer | MERN Stack",
      location: "Jaunpur, Uttar Pradesh – 222142",
      phone: "+91-9569768198",
      email: "ashubhamyadav61@gmail.com",
      linkedin: "https://www.linkedin.com/in/shubham-yadav-38a467267/",
      github: "https://github.com/code0era",
      leetcode: "https://leetcode.com/u/Code0Era/",
      resume: "https://drive.google.com/file/d/13J1OG6DiY0zAWbcjClhruDMAlgYVEaUr/view?usp=sharing",
      summary:
        "Innovative Full Stack Web Developer specializing in integrating Machine Learning and AI enhancements to deliver advanced, scalable solutions leveraging cloud-based technologies. Dedicated to building intelligent applications that bridge the gap between complex backend architectures and modern user interfaces.",
    },
  },

  education: [
    {
      id: "edu-iiit",
      title: "B.Tech in Computer Science – IIIT Kalyani",
      url: "portfolio.dev/education/iiit-kalyani",
      description: "Indian Institute of Information Technology, Kalyani | 2022 – 2026 | CGPA: 8.28",
      category: "education",
      details: {
        institute: "Indian Institute Of Information Technology, Kalyani",
        degree: "B.Tech in Computer Science and Engineering",
        cgpa: "8.28",
        duration: "2022 – 2026",
        coursework: [
          "Data Structures & Algorithms",
          "DBMS",
          "Operating Systems",
          "Computer Networks",
          "ML/AI",
          "OOP",
        ],
      },
    },
    {
      id: "edu-school-12",
      title: "Class XII – SD Public School, Jaunpur",
      url: "portfolio.dev/education/sd-public-school",
      description: "SD Public School, Jaunpur | Class XII (Intermediate) | 82.40% | 2021",
      category: "education",
      details: {
        institute: "SD Public School, Jaunpur",
        class: "XII (Intermediate)",
        percentage: "82.40%",
        year: "2021",
      },
    },
    {
      id: "edu-school-10",
      title: "Class X – SD Public School, Jaunpur",
      url: "portfolio.dev/education/sd-public-school-x",
      description: "SD Public School, Jaunpur | Class X (Matriculation) | 96.33% | 2019",
      category: "education",
      details: {
        institute: "SD Public School, Jaunpur",
        class: "X (Matriculation)",
        percentage: "96.33%",
        year: "2019",
      },
    },
  ],

  experience: [
    {
      id: "exp-weintern",
      title: "Lead Web Developer – WEIntern",
      url: "portfolio.dev/experience/weintern",
      description:
        "Spearheaded end-to-end architecture of WEIntern platform using React.js & Supabase. Achieved 95+ Lighthouse performance score. Sept 2025 – Present.",
      category: "experience",
      details: {
        role: "Lead Web Developer",
        company: "WEIntern",
        duration: "Sept 2025 – Present",
        type: "Remote",
        highlights: [
          "Spearheaded end-to-end architecture of WEIntern platform using React.js & Supabase, leading a team to deliver a scalable internship portal.",
          "Engineered robust backend using Supabase, optimizing data retrieval by 40% via advanced indexing and integrating Clerk for secure authentication.",
          "Designed a responsive frontend using Shadcn UI and Tailwind CSS, achieving a 95+ Lighthouse performance score.",
        ],
        stack: ["React.js", "Supabase", "Clerk", "Shadcn UI", "Tailwind CSS"],
      },
    },
  ],

  projects: [
    {
      id: "proj-mvision",
      title: "MVision-AI – Military Strategic Object Detection",
      url: "portfolio.dev/projects/mvision-ai",
      description:
        "Custom YOLOv8s pipeline achieving mAP50 of 0.555. Attained 0.995 mAP50 for Helicopters & Tanks. Deployed via Streamlit Cloud. Aug – Dec 2025.",
      category: "projects",
      featured: true,
      details: {
        highlights: [
          "Engineered a custom YOLOv8s pipeline via transfer learning on a 10-class military dataset, achieving an overall mAP50 of 0.555 and mAP50-95 of 0.247.",
          "Attained 0.995 mAP50 for high-priority targets (Helicopters, Tanks) and outperformed stock models by detecting 11 Ships in complex environments.",
          "Reduced inference latency to 16.4ms per frame for real-time surveillance.",
          "Deployed the interactive analysis interface via Streamlit Cloud.",
        ],
        stack: ["Python", "YOLOv8 (Ultralytics)", "OpenCV", "Streamlit", "PyTorch"],
        duration: "Aug – Dec 2025",
        github: "https://github.com/code0era",
      },
    },
    {
      id: "proj-drona",
      title: "Drona.ai – Voice-Native AI Fitness Platform",
      url: "portfolio.dev/projects/drona-ai",
      description:
        "Voice-native fitness planner using Next.js 15 & Convex with serverless websockets. Generates personalized plans at 300+ tokens/sec via Groq with <200ms latency. Dec 2025.",
      category: "projects",
      featured: true,
      details: {
        highlights: [
          "Architected a voice-native fitness planner using Next.js 15 & Convex, leveraging serverless websockets to generate personalized plans at 300+ tokens/sec via Groq.",
          "Achieved <200ms latency on plan generation.",
          "Optimized backend via indexed lookups (by email) for sub-50ms retrieval.",
          "Enforced strict JSON validation to ensure 100% type-safe database writes.",
        ],
        stack: ["Next.js 15", "TypeScript", "Convex", "Vapi.ai", "Groq (Llama-3)", "Clerk Auth", "Tailwind CSS"],
        duration: "Dec 1 – Dec 10, 2025",
        github: "https://github.com/code0era",
      },
    },
    {
      id: "proj-vaani",
      title: "VAANI – Real-Time Chat Application",
      url: "portfolio.dev/projects/vaani",
      description:
        "MERN & Socket.io chat engine with <100ms latency and 30+ themes. JWT & HTTP-Only cookies eliminate XSS/CSRF. Oct 2025.",
      category: "projects",
      featured: true,
      details: {
        highlights: [
          "Devised a chat engine using MERN & Socket.io, utilizing in-memory mapping to achieve <100ms latency for bi-directional communication.",
          "30% reduced query load via DB indexing.",
          "Fortified auth via JWT & HTTP-Only cookies to eliminate XSS/CSRF risks for 100% of sessions.",
          "Managing global state for 30+ themes.",
        ],
        stack: ["MongoDB", "Express.js", "React (Vite)", "Node.js", "Socket.io", "Tailwind CSS", "DaisyUI", "Zustand"],
        duration: "Oct 10 – Oct 16, 2025",
        github: "https://github.com/code0era",
      },
    },
  ],

  skills: {
    id: "skills",
    title: "Skills & Tech Stack",
    url: "portfolio.dev/skills",
    description:
      "MERN Stack, Next.js, AI/ML (YOLOv8, RAG, LLMs), TypeScript, Python, C++. Full Stack developer proficient in building scalable cloud applications.",
    category: "skills",
    details: {
      languages: ["C", "C++", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML", "CSS"],
      fullStack: ["MERN Stack", "Next.js 15", "React.js", "Node.js", "Express.js", "Socket.io", "Redis", "Convex"],
      aiMl: ["LLMs", "RAG", "Prompt Engineering", "Vector Embeddings", "OpenCV", "YOLOv8", "CNN", "Scikit-learn", "Groq SDK"],
      databases: ["MongoDB", "MySQL", "Redis", "Convex", "Supabase"],
      tools: ["Tailwind CSS", "Shadcn UI", "Git", "Postman", "Vercel", "Linux", "Stripe", "Arduino"],
      soft: ["Leadership", "Team Collaboration", "Problem Solving", "Strategic Planning"],
    },
  },

  achievements: [
    {
      id: "ach-leetcode",
      title: "LeetCode Knight (1851+) – 220+ Problems Solved",
      url: "portfolio.dev/achievements/leetcode",
      description: "Rated Knight (1851+) on LeetCode and 2-Star (1520+) on CodeChef. Solved 220+ DSA problems.",
      category: "achievements",
      details: {
        platform: "LeetCode",
        rating: "1851+ (Knight)",
        codechef: "1520+ (2-Star)",
        problems: "220+ problems solved",
        link: "https://leetcode.com/u/Code0Era/",
      },
    },
    {
      id: "ach-statuscode1",
      title: "StatusCode-1 (2024) – College Hackathon Organizer",
      url: "portfolio.dev/achievements/statuscode-1",
      description: "Organized the annual college hackathon StatusCode-1 in 2024, demonstrating leadership in the tech community.",
      category: "achievements",
      details: {
        event: "StatusCode-1 (2024)",
        role: "Organizer",
        type: "Annual College Hackathon",
      },
    },
    {
      id: "ach-statuscode0",
      title: "StatusCode-0 (2023) – Healthcare Website",
      url: "portfolio.dev/achievements/statuscode-0",
      description: "Participated in StatusCode-0 hackathon and developed a healthcare website.",
      category: "achievements",
      details: {
        event: "StatusCode-0 (2023)",
        role: "Participant",
        project: "Healthcare Website",
      },
    },
    {
      id: "ach-iitkgp",
      title: "Data Science Competition – IIT Kharagpur",
      url: "portfolio.dev/achievements/iitkgp-datascience",
      description: "Participated in the Data Science Competition at IIT Kharagpur and received a participation certificate.",
      category: "achievements",
      details: {
        event: "Data Science Competition",
        institute: "IIT Kharagpur",
        award: "Participation Certificate",
      },
    },
    {
      id: "ach-postman",
      title: "Postman API Fundamentals Student Expert",
      url: "portfolio.dev/achievements/postman-cert",
      description: "Certified Postman API Fundamentals Student Expert.",
      category: "achievements",
      details: {
        certification: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
      },
    },
  ],

  contact: {
    id: "contact",
    title: "Contact Shubham Yadav",
    url: "portfolio.dev/contact",
    description: "Connect via LinkedIn, GitHub, Email, or Phone. Open to Software Development opportunities.",
    category: "contact",
    details: {
      email: "ashubhamyadav61@gmail.com",
      phone: "+91-9569768198",
      linkedin: "https://www.linkedin.com/in/shubham-yadav-38a467267/",
      github: "https://github.com/code0era",
      leetcode: "https://leetcode.com/u/Code0Era/",
      resume: "https://drive.google.com/file/d/13J1OG6DiY0zAWbcjClhruDMAlgYVEaUr/view?usp=sharing",
      location: "Jaunpur, Uttar Pradesh – 222142",
    },
  },
};

// All searchable results (flat list)
const allResults = [
  portfolioData.about,
  ...portfolioData.education,
  ...portfolioData.experience,
  ...portfolioData.projects,
  portfolioData.skills,
  ...portfolioData.achievements,
  portfolioData.contact,
];

module.exports = { portfolioData, allResults };
