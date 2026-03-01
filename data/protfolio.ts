export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  link: string;
}

export interface Experience {
  company: string;
  year: string;
  role: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export const portfolioData = {
  name: "Your Name",
  bio: "Full Stack Developer | Building 3D Digital Experiences with Next.js & TypeScript.",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  cvLink: "/my-cv.pdf", // Public folder e pdf ta rakho
  email: "hello@example.com",
  phone: "+880123456789",
  profileImage: "https://media.licdn.com/dms/image/v2/your-linkedin-image-link", 
  
  skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Three.js"],

  education: [
    {
      degree: "Bachelor of Science in CSE",
      institution: "Your University Name",
      year: "2020 - 2024",
      description: "Focused on Software Engineering and Modern Web Technologies."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Your College Name",
      year: "2018 - 2020",
      description: "Science group with focus on Physics and Mathematics."
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI SaaS Platform",
      shortDesc: "An AI-powered content generator built with Next.js.",
      fullDesc: "This project leverages GPT-4 to generate high-quality blog posts. It includes a subscription model via Stripe and a dashboard for user analytics.",
      link: "https://ai-saas.com"
    }
  ],

  experience: [
    {
      company: "Tech Solutions",
      year: "2023 - Present",
      role: "Frontend Developer"
    }
  ]
};