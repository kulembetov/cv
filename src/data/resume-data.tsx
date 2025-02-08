import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelgramIcon";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Software Engineer",
  summary:
    "Full-Stack Developer with hands-on experience in building scalable, high-performance applications and optimizing workflows. Proficient in React, Next.js, TypeScript, and NestJS, with a focus on secure authentication, modular architecture, and AI-powered solutions. Experienced in migrating frontend logic to backend services, integrating third-party APIs, and refining UI/UX for better engagement. Strong background in Agile development, improving team collaboration through structured workflows, task management, and continuous delivery.",
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
      location: "Erfurt, Germany",
      description:
        "Studying foundational courses including Object-Oriented Programming, Java, Data Structures, and Web Development, with hands-on projects and collaborative teamwork.",
    },
    {
      school: "Yandex Practicum",
      degree: "Professional Diploma in Web Development",
      start: "Sep 2022",
      end: "May 2024",
      location: "Moscow, Russia",
      description:
        "Developed practical programming skills through React, Node.js, and Docker projects, gaining hands-on experience in teamwork and hackathons.",
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
        "Built a secure authentication system using React, Tailwind CSS, and NestJS, replacing local-only authentication with OAuth integration. This improved registration/login flow, ensured secure token storage, and enabled role-based access control.\n\n" +
        "Wrote code following Feature-Sliced Design (FSD) architecture, making the codebase modular and maintainable. This accelerated feature development, simplified refactoring, and reduced onboarding complexity.\n\n" +
        "Contributed to migrating layout generation from frontend to backend, ensuring better maintainability. Updated frontend logic and populated the database with layout data from the frontend, maintaining backward compatibility while preparing for AI-driven generation.\n\n" +
        "Developed interactive, brand-aligned presentation layouts for a fintech company, improving client interactions and user engagement.\n\n" +
        "Labeled data to train computer vision models, enhancing AI-generated presentations and improving automated layout design for ML engineers.\n\n" +
        "Worked within an Agile workflow, managing tasks in a card-based dashboard, setting priorities, and tracking progress to ensure timely project delivery.",
    },
  ],
  skills: [
    "Technical: JavaScript, React, Next.js, TypeScript, Zustand, Redux, HTML, CSS, Git, SASS, Tailwind CSS, shadcn/ui, Material-UI",
    "Backend: Node.js, NestJS, Express.js, PostgreSQL, MongoDB, Redis, Supabase, Prisma, Zod",
    "DevOps & Deployment: Docker, Kubernetes, Nginx, PM2, CI/CD",
    "AI Tools: GPT-4o, DeepSeek-R1, Claude 3.5 Sonnet, Gemini 2.0",
    "API Development & Testing: Postman, Insomnia",
    "Languages: Russian (Native), English (Fluent)"
  ],
  achievements: [
    {
      title: "Secure Authentication System",
      description:
        "Implemented an OAuth-based authentication system, replacing local authentication, improving security, and streamlining user access.",
    },
    {
      title: "Backend Migration of Layout Generation",
      description:
        "Led the migration of layout generation from frontend to backend, ensuring maintainability, backward compatibility, and AI-driven generation support.",
    },
    {
      title: "Docker-Based Deployment",
      description:
        "Designed and deployed full-stack applications using Docker and Kubernetes, improving scalability and streamlining CI/CD workflows.",
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
