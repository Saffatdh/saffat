export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  link: string;
  image: string;
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
  profileImage: "https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/481975202_122103448382792472_8160048057962855659_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeE2XZ_wyqy923F93J-5U2LrLBGiJZN-8J4sEaIlk37wnuf9SStpNC0Kwc8Ww_pBtDHdLNWDLnALGbRYtyqIHfhO&_nc_ohc=k4Eyy1eXfVMQ7kNvwHSJTcO&_nc_oc=AdkZBaiSaYpt7TMogykNG7uHbnQ2puDsaQXxC7NH1453ngQvh5UpkQAkbiKavqAKLNfQtRMdeGW73XGyJZZiqhhE&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=w3w1trlX9nSpy4H7NmH9NQ&_nc_ss=8&oh=00_Afy88hNBHvR0N33iqjjbU2gglGEU16X3y7olMPLasOh0EQ&oe=69AEFB2B", 
  
  skills: ["python", "C" , "C++","Javascripts" ,"Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL","Django","Aurdino", "Adobe Photoshop", "Adobe Illustrator", "MS Word","Power point","Excel"],

  education: [
    {
      degree: "Bachelor of Science in EEE",
      institution: "American International University Bangladesh",
      year: "2025 - 2028(Expected)",
      description: "",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWd2zuik18dK0v1cBQARo4uKhuMB_WI0Wrg&s"
    },
  ],

  projects: [
    {
      id: 1,
      title: "Calculator Using JS",
      shortDesc: "Design a calculator using html,css and js",
      fullDesc: " github repository link:  https://github.com/Saffatdh/simple_calculator_js.",
      link: "https://simple-calculator-js-six.vercel.app/",
      image:""
    }
    ,
    {
      id: 2,
      title: "Autonomous Seed Sowing Robot",
      shortDesc: "I was my university project and I built it in small scale",
      fullDesc: "Developed an ESP32-powered agricultural robot featuring a 4-wheel drive system and an ultrasonic sensor for obstacle avoidance. Engineered dual functionality: an Automatic Mode for autonomous planting and an IoT Mobile Control Mode for remote operation. Integrated a high-precision seed dispensing motor and an automatic water pump to synchronize sowing with immediate irrigation. This project demonstrates expertise in robotics, sensor integration, and wireless communication to enhance precision farming efficiency.",
      link: "https://photos.google.com/share/AF1QipNM1dZdHwvKwc6NVD47KvgY6wkMCBKhPAgydZb_vSSPuKem_EpHbY3Bo2iJgqqbUQ?key=cmR5SU05NjZiX2djMDdQUm5Hdmx1amhra1M5aHlR",
      image:"https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/608536993_122194195982792472_7323278850714746633_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH7unCSNHB68qw82RwJ_lkra_1DtoXwL8Fr_UO2hfAvwfiuZh_B__zw0PC1ZK_my_aLoFpMqnHFiR5iIzPrp3xt&_nc_ohc=CvmavxL_3wQQ7kNvwHM82V9&_nc_oc=AdkJM0_qVYwghT-g30omU1ECeuypGz88Kk3Y8HnWGpaX6QSQY6HbSv8a2VCRc4L4Hn6dtKA5DLuRlfKruB-YFtZd&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=Vai9x_AS1EXC8z3bvAZJNQ&_nc_ss=8&oh=00_Afw3g-EZJrainZWKinGQqowLni3WutI7v_5qCaNP1brWBw&oe=69AF0D66"
    },
    // {
    //   id: 3,
    //   title: "Nextjs Business Website",
    //   shortDesc: "It is basically clone of and Autralian construction business web ",
    //   fullDesc: "This demo project build by using Nextjs (which is a javascript framework) , Tailwind , lucide-react ",
    //   link: "",
    //   image:""
    // }

  ],

  experience: [
    {
      company: "Intelixel",
      year: "2023 - 2025",
      role: "Frontend Developer"
    }
  ]
};