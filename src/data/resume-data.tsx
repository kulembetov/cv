import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelgramIcon";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Software Engineer",
  summary:
    "Results-driven web developer with expertise in designing scalable, user-centric applications and improving workflows. Skilled in modern web technologies like Next.js, TypeScript, and React, with a strong focus on delivering impactful solutions and exceptional user experiences. Experienced in Agile environments, emphasizing collaboration, code quality, and continuous improvement.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56837366?v=4",
  personalWebsiteUrl: "https://cv-kulembetov.vercel.app",
  contact: {
    email: "artur_kulembetov@outlook.com",
    tel: "+7 995 797 55 99",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kulembetov",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kulembetov/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/arturkulembetov",
        icon: XIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/artur_kulembetov",
        icon: TelegramIcon,
      }
    ],
  },
  education: [
    {
      school: "IU International University of Applied Sciences",
      degree: "Bachelor's Degree in Computer Science",
      start: "May 2024",
      end: "May 2027",
      location: "Bad Honnef, Germany",
      description:
        "Focusing on foundational courses such as Object-Oriented Programming, Java, Data Structures, and Web Development. Gaining hands-on experience through various projects and collaborative teamwork.",
    },
    {
      school: "Yandex Practicum",
      degree: "Certificate program in Information Technology",
      start: "Sep 2022",
      end: "May 2024",
      description:
        "In my certificate program, I gained hands-on programming skills by developing projects with technologies such as React, Node.js, and Docker, along with practical experience in teamwork and hackathons. Activities and societies: Hackathons, teamwork projects.",
      location: "Moscow, Russia",
    },
  ],
  work: [
    {
      company: "presentsimple.ai",
      link: "https://presentsimple.ai/",
      badges: ["Remote"],
      title: "Full-Stack Developer",
      logo: "",
      start: "June 2024",
      end: "Present",
      description:
        "Built a secure and efficient authentication system using React, Vite, Tailwind CSS for the frontend, and NestJS with Passport for the backend, streamlining user access and improving security. Features included a unified registration/login form, email confirmation, OAuth integration with Google, Yandex, VK, and Telegram, secure token storage, and QR code generation for Telegram authentication. Enhanced the UI with dynamic success/error messaging and theme options, improving usability and user engagement. Refactored Redux structure to improve modularity and state management, simplifying the development process. Applied the Feature-Sliced Design (FSD) architecture to ensure maintainability and scalability, reducing onboarding complexity for new developers. Developed dynamic, brand-aligned presentation layouts for a key banking partner, driving improved customer engagement and positive client feedback. Worked with Yandex Cloud for Teams to manage workflows in an Agile environment, ensuring on-time project delivery and strong team alignment.",
    },
  ],
  skills: [
    "Frontend: React, Redux, Zustand, Next.js, TypeScript",
    "Backend: Node.js, NestJS, MongoDB, Express",
    "UI/UX Design and Styling: TailwindCSS, shadcn/ui, Material-UI",
    "Deployment & Operations: Git, Docker, Kubernetes, Nginx, PM2",
    "Databases: PostgreSQL, MongoDB, Supabase",
    "Database Management: Prisma",
    "API Testing: Postman, Insomnia"
  ],
  achievements: [
    {
      title: "Security Update",
      description:
        "Successfully migrated outdated project dependencies to newer versions, addressing and resolving security vulnerabilities. This critical update ensured the project's compliance with the latest security standards, significantly reducing the risk of security breaches and improving system stability.",
    },
    {
      title: "Web Applications Development",
      description:
        "Developed and launched multiple web applications using React, Node.js, and MongoDB, resulting in robust, scalable solutions that significantly enhanced user engagement and system performance.",
    },
    {
      title: "Docker Deployment",
      description:
        "Designed and deployed a React application from scratch using Docker and Docker Compose, configuring Nginx to ensure optimal load balancing and secure connections. This deployment streamlined the development to production workflow, significantly reducing deployment complexities and enhancing application scalability.",
    },
  ],
  projects: [
    {
      title: "Quzzly AI",
      techStack: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Axios', 'Netlify'],
      description:
        "About\n" +
        "An interactive web-based quiz application that allows users to test their knowledge with real-time feedback. The app fetches trivia questions from an external API and provides a dynamic quiz experience. It is built with React, styled with Tailwind, and supports integration with Telegram WebApps for seamless use within the Telegram ecosystem.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/quizzly-ai",
        href: "https://github.com/kulembetov/quizzly-ai",
      },
    },
    {
      title: "Order Validation Food Delivery",
      techStack: ["Python"],
      description:
        "About\n" +
        "I ordered water, a pie, and bread from a local thai app. Water was out of stock. When the first delivery came, one pie was out of stock. I ordered 10 pies (400 baht) and a few bottles (50 baht), getting free delivery. To prevent this issue, I wrote a script.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/order-validation-food-delivery",
        href: "https://github.com/kulembetov/order-validation-food-delivery",
      },
    },
    {
      title: "Card Hub",
      techStack: ["React", "Redux Toolkit", "Tailwind CSS"],
      description:
        "Card Hub is a Single Page Application (SPA) built with React, Redux Toolkit, and Tailwind CSS. The application fetches and displays images from the Pexels API, allowing users to like and remove cards with the liked state persisted in local storage.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/card-hub",
        href: "https://github.com/kulembetov/card-hub",
      },
    },
    {
      title: "Property Pulse",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "next-auth",
        "react-icons",
        "react-geo",
        "react-map-gl",
        "react-toastify",
        "react-spinner",
      ],
      description:
        "A Next.js app for listing and searching rental properties utilizing Tailwind CSS, next-auth, react-icons, react-geo, react-map-gl, react-toastify, and react-spinner.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/property-pulse",
        href: "https://github.com/kulembetov/property-pulse",
      },
    },
    {
      title: "Weather Wise",
      techStack: [
        "Next.js",
        "Google Maps API",
        "Open-Meteo API",
        "shadcn UI",
        "Material-UI",
        "Radix Toast",
      ],
      description:
        "A Next.js application that displays the weather forecast and current weather conditions based on the user-selected location. The application uses Google Maps for location search and display, and the Open-Meteo API for weather data.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/weather-wise",
        href: "https://github.com/kulembetov/weather-wise",
      },
    },
    {
      title: "Button Component",
      techStack: ["React", "Next.js"],
      description:
        "In this challenge, you will build a versatile button component that is part of a design system. These buttons will be used across various challenges and apps found within the platform, providing consistency throughout the user interface.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/button-component",
        href: "https://github.com/kulembetov/button-component",
      },
    },
    {
      title: "Blog Card",
      techStack: ["React", "Next.js"],
      description:
        "In this challenge, you will develop a blog card featuring editorial content, including an article cover image, a content category tag, a title, a brief description, and a call-to-action (CTA) link.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/blog-card",
        href: "https://github.com/kulembetov/blog-card",
      },
    },
    {
      title: "Amazon Davidson",
      techStack: ["Next.js", "React", "TypeScript", "Material-UI"],
      description:
        "A Fullstack E-Commerce Website using Next.js, React, TypeScript, & Material UI.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/amazon-davidson",
        href: "https://github.com/kulembetov/amazon-davidson",
      },
    },
    {
      title: "Natours Project",
      techStack: ["React", "Next.js", "SCSS"],
      description:
        "This single-page travel website is expertly crafted using SCSS for streamlined, scalable styling, and incorporates Prettier for consistent code formatting. It leverages Yarn as a fast, reliable package manager to handle dependencies efficiently.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/natours-project",
        href: "https://github.com/kulembetov/natours-project",
      },
    },
    {
      title: "SupportMe",
      techStack: ["React.js", "Next.js", "shadcn/ui"],
      description:
        "This fictional dashboard is designed for effective tracking of employee work, teams, and customer support requests. Developed using the Shadcn interface within the Next.js framework, the project is entirely focused on front-end development using pre-defined data.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/support-me",
        href: "https://github.com/kulembetov/support-me",
      },
    },
    {
      title: "Course Enrollment and Grade Management System",
      techStack: ["Java", "Data Structures", "OOP"],
      description:
        "This Java-based system is created to optimize the management of course enrollments and student grades for educational institutions. It demonstrates the practical application of object-oriented programming principles, encompassing course management, student enrollment, assignment, and grade calculation.",
      logo: "",
      link: {
        label:
          "GitHub - kulembetov/course-enrollment-n-grade-management-system",
        href: "https://github.com/kulembetov/course-enrollment-n-grade-management-system",
      },
    },
    {
      title: "American Quotient",
      techStack: ["Java", "Data Structures", "OOP"],
      description:
        "A Java-based quiz game designed to challenge players and enrich their knowledge with fascinating facts about American geography, history, culture, and notable personalities.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/american-quotient",
        href: "https://github.com/kulembetov/american-quotient",
      },
    },
    {
      title: "Deployed Application Using PM2",
      techStack: ["JavaScript", "TypeScript", "Express.js", "Docker", "Nginx"],
      description:
        "I significantly improved my skills in a full-stack environment using JavaScript and TypeScript for backend development with Express.js and implementing responsive frontend technologies. I integrated security features like bcrypt for hashing and securing user passwords and set up CORS to manage cross-origin requests effectively.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/web-plus-docker-and-compose",
        href: "https://github.com/kulembetov/web-plus-docker-and-compose",
      },
    },
    {
      title: "LitLootCrate",
      techStack: ["Java", "Data Structures", "OOP"],
      description:
        "This project is a student-developed application that facilitates the sharing of books among users. Built with Java and utilizing object-oriented programming principles, this application operates through a simple input/output interface without a graphical user interface (GUI), making it accessible via command-line interactions.",
      logo: "",
      link: {
        label: "GitHub - kulembetov/litlootcrate",
        href: "https://github.com/kulembetov/litlootcrate",
      },
    },
  ],
} as const;
