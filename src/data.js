export const profile = {
  name: "Dhanyashree Shyam Kulal",
  firstName: "Dhanyashree",
  headline: "Java & Full Stack Developer",
  location: "Karnataka, India",
  email: "dhanyashreejnv04@gmail.com",
  phone: "+91 9113672339",
  github: "https://github.com/danny-s12",
  linkedin: "https://www.linkedin.com/in/dhanyashree-kulal",
  portfolio: "https://danny-s12.github.io/portfolio",
  summary:
    "Computer Science and Design Engineering graduate focused on Java, web development, databases, and building thoughtful user experiences. I also bring hands-on academic experience in NLP and emotion-aware conversational systems."
};

export const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "Python"] },
  { title: "Frontend", items: ["HTML", "CSS", "React.js"] },
  { title: "Backend", items: ["Java", "Spring Boot", "Node.js"] },
  { title: "Database", items: ["MySQL", "SQL"] },
  { title: "Core concepts", items: ["Object-Oriented Programming", "Responsive UI", "API integration"] },
  { title: "AI / ML", items: ["BERT", "Natural Language Processing", "Machine Learning"] }
];

export const projects = [
  {
    slug: "study-material-management",
    number: "01",
    category: "Web Development",
    title: "Study Material Management System",
    summary: "A structured web interface for organizing and accessing academic resources.",
    description:
      "Designed a study material management experience intended to make lecture notes, assignments, and other academic resources easier to organize and access.",
    technologies: ["SQL", "HTML", "CSS", "UI/UX"],
    highlights: [
      "Designed a structured interface for organizing academic resources.",
      "Applied SQL concepts to data management.",
      "Used responsive frontend patterns and user-focused navigation."
    ],
    status: "Academic project",
    visual: "study"
  },
  {
    slug: "emotion-aware-conversational-agent",
    number: "02",
    category: "AI / Machine Learning",
    title: "Emotion-Aware Conversational Agent",
    summary: "A BERT-based text emotion recognition module connected to emotion-aware chatbot responses.",
    description:
      "An academic project exploring emotion-aware conversational interactions. The implemented text module uses BERT-based emotion recognition and connects the predicted emotion to conversational responses.",
    technologies: ["Python", "BERT", "Machine Learning", "HTML", "CSS"],
    highlights: [
      "Implemented a BERT-based text emotion recognition module.",
      "Integrated emotion-aware responses through a conversational interface.",
      "Reported overall model accuracy of 87.2% in the project evaluation."
    ],
    status: "Academic project",
    visual: "emotion",
    metric: "87.2%",
    metricLabel: "Reported model accuracy"
  },
  {
    slug: "java-full-stack-application",
    number: "03",
    category: "Java / Full Stack",
    title: "Java Full Stack Application",
    summary: "A planned portfolio project to demonstrate Java, Spring Boot, SQL, and frontend integration.",
    description:
      "This is the next project to build as part of the portfolio roadmap. Replace this entry with the real application once the implementation is complete.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Plan a clear problem statement and user workflow.",
      "Implement CRUD operations with server-side validation.",
      "Document architecture, testing, and a working demo after implementation."
    ],
    status: "Planned — not yet implemented",
    visual: "java",
    planned: true
  }
];

export const education = [
  {
    title: "B.E. — Computer Science and Design Engineering",
    institution: "Alva’s Institute of Engineering and Technology",
    period: "2022–2026",
    detail: "CGPA: 8.53 / 10",
    location: "Moodbidri, India"
  },
  {
    title: "Class XII — PCMC",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2021–2022",
    detail: "76.2%",
    location: "Udupi, India"
  },
  {
    title: "Class X",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2019–2020",
    detail: "78.3%",
    location: "Udupi, India"
  }
];

export const experience = [
  {
    role: "Full Stack Developer — Intern",
    company: "TAP Academy",
    duration: "6 months",
    points: [
      "Practiced full-stack development using Java, SQL, HTML, and CSS.",
      "Applied OOP, DSA, and database fundamentals to application logic and programming problems."
    ]
  },
  {
    role: "Software Developer — Intern",
    company: "Rosette Smart Life",
    duration: "3 months",
    points: [
      "Developed responsive, reusable React.js components for user-facing interfaces.",
      "Integrated reusable UI components with backend APIs for dynamic functionality."
    ]
  },
  {
    role: "App Development using GenAI — Intern",
    company: "MindMatrix, a product of CL Infotech Pvt. Ltd.",
    duration: "3 months",
    points: [
      "Developed Android UI components and integrated Generative AI capabilities into application workflows.",
      "Integrated APIs and contributed to an Android application through hands-on implementation."
    ]
  }
];

export const certifications = [
  "NPTEL Elite Certificate in Cloud Computing",
  "Robotic Process Automation",
  "Cybersecurity and Applied Cryptography",
  "Data Science and Natural Language Processing",
  "UI/UX Design and Web Development"
];
