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
  name: "Saffat Islam",
  bio: "I am an Electrical and Electronics Engineering (EEE) student with a strong foundation in circuits, power systems, and electronics. Alongside my core studies, I have developed solid skills in software development, including C, C++, Python, and data structures. I enjoy building projects that integrate hardware and software, such as embedded systems and IoT applications. I am passionate about innovation, problem-solving, and continuously expanding my technical expertise.",
  github: "https://github.com/Saffatdh",
  linkedin: "https://www.linkedin.com/in/saf-fat-29b690267/",
  cvLink: "/my-cv.pdf", // Public folder e pdf ta rakho
  email: "saffatdh8800@outlook.com",
  phone: "+8801722096725",
  profileImage: "https://media.licdn.com/dms/image/v2/D5603AQE_jSvUa5L57w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715101607496?e=1773878400&v=beta&t=WnUxgQ5x07Zta-NuWeuwbxZSDwFxXKBkaAJy8xmDtS0", 
  
  skills: ["python", "C" , "C++","Javascripts" ,"Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL","Django","Aurdino", "Adobe Photoshop", "Adobe Illustrator", "MS Word","Power point","Excel"],

  education: [
    {
      degree: "Bachelor of Science in EEE",
      institution: "American International University Bangladesh",
      year: "2025 - 2028(Expected)",
      description: ""
    },
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
      company: "SS Soft Tech",
      year: "2023 - 2025",
      role: "Frontend Developer"
    }
  ]
};