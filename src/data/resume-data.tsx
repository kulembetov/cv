import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelgramIcon";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Software Engineer",
  summary:
    "Full-stack developer delivering secure, scalable, and maintainable applications end-to-end. Designed and implemented an OAuth-integrated authentication system with role-based access control, replacing a local-only setup and enabling one-tap sign-in. Applied Feature-Sliced Design (FSD) architecture to create modular codebases, reducing onboarding time and accelerating feature rollout.\n\n" +
    "Architected a design-to-code automation pipeline that converted marked-up Figma files into production-ready database configurations, cutting delivery timelines from weeks to a day. Directed a multidisciplinary team to define markup standards, streamline collaboration, and ensure pixel-perfect UI fidelity for enterprise clients.\n\n" +
    "Established company-wide development standards with automated quality checks — integrating formatting, linting, static typing, security scanning, and dependency management — improving code quality and reducing post-merge issues. Built a feedback and issue reporting system with responsive frontend components, a robust backend pipeline, and automated reporting to ensure daily actionable insights.",
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
      school: "Southern New Hampshire University",
      degree: "B.Sc. Computer Science",
      start: "June 2025",
      end: "May 2028",
      location: "Manchester, NH",
      description: "",
    },
    {
      school: "Yandex.Practicum",
      degree: "Web Developer Professional Training Course",
      start: "Sep 2022",
      end: "May 2024",
      location: "Moscow, Russia",
      description: "",
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
        "Built a secure, OAuth-integrated authentication system using React, Tailwind CSS, and NestJS—replacing local-only auth and enabling one-tap sign-in with secure token handling and role-based access control.\n\n" +
        "Applied FSD architecture to structure codebases for modularity and maintainability, reducing onboarding time and enabling faster feature rollout across the stack.\n\n" +
        "Co-led, with a senior developer, the end-to-end layout delivery process for B2B and B2C clients, spanning frontend, backend, and the Python-based \"Figma-to-Code\" microservice. On the frontend, ensured the template was displayed in the editor exactly as in Figma, preserving styles and positioning. On the backend, automated layout provisioning by extracting marked-up designs from Figma, generating SQL, and populating the database with reusable configurations—reducing delivery time from weeks to a day. Directed a team of three designers and three intern developers, defined Figma markup standards with stakeholders, managed tasks via a Kanban board, coordinated daily syncs and live coding sessions, and supported pilots for Sberbank, Gazprom, and Raiffeisen Bank by addressing feedback and delivering fixes.\n\n" +
        "For the Figma-to-Code microservice, established and enforced project-wide development standards with a robust Pre-commit setup. Integrated Black for consistent code formatting, isort for import organization, Autoflake for removing unused code, Flake8 for style and error detection, Mypy for improving static typing, Pyupgrade for modernizing syntax, Bandit for security vulnerability scanning, and core pre-commit-hooks for catching common issues early. Managed dependencies via Poetry, ensuring automated quality checks and a maintainable, secure codebase.\n\n" +
        "Designed and implemented a feedback and issue reporting workflow for the presentation generation tool. On the frontend, built responsive modals in React for collecting user feedback and bug reports. On the backend, developed handlers to store reports in PostgreSQL and a Python service to export data to Excel and Google Sheets. Automated daily updates through GitHub Actions and cron jobs, ensuring the team always had up-to-date user insights.\n\n" +
        "Delivered consistently in an Agile team environment—contributing to standups, sprint planning, and code reviews. Collaborated with designers and QA to clarify requirements, maintain design consistency, and surface technical trade-offs early in the cycle."
    },
  ],
  skills: [
    {
      category: "Technical",
      skills: [
        "React", "Next.js", "NestJS", "Node.js", "TypeScript", "JavaScript", "Python",
        "Redux", "TanStack Query", "Zod", "HTML", "CSS", "Tailwind CSS", "MUI", "shadcn/ui",
        "PostgreSQL", "MongoDB", "Redis", "Prisma",
        "Docker", "Git", "GitHub Actions", "Poetry", "S3 Storage", "Yandex Cloud",
        "Black", "isort", "Autoflake", "Flake8", "Mypy", "Pyupgrade", "Bandit", "pre-commit"
      ]
    },
    {
      category: "AI Tools",
      skills: [
        "GPT", "DeepSeek", "Claude", "Gemini"
      ]
    },
    {
      category: "Languages",
      skills: [
        "Russian", "English"
      ]
    }
  ],
  experience: [
    {
      title: "OAuth Authentication System",
      description:
        "Built a secure, OAuth-integrated authentication system using React, Tailwind CSS, and NestJS—replacing local-only auth and enabling one-tap sign-in with secure token handling and role-based access control.",
    },
    {
      title: "FSD Architecture Implementation",
      description:
        "Applied FSD architecture to structure codebases for modularity and maintainability, reducing onboarding time and enabling faster feature rollout across the stack.",
    },
    {
      title: "End-to-End Layout Delivery Process",
      description:
        "Co-led, with a senior developer, the end-to-end layout delivery process for B2B and B2C clients, spanning frontend, backend, and the Python-based \"Figma-to-Code\" microservice. On the frontend, ensured the template was displayed in the editor exactly as in Figma, preserving styles and positioning. On the backend, automated layout provisioning by extracting marked-up designs from Figma, generating SQL, and populating the database with reusable configurations—reducing delivery time from weeks to a day. Directed a team of three designers and three intern developers, defined Figma markup standards with stakeholders, managed tasks via a Kanban board, coordinated daily syncs and live coding sessions, and supported pilots for Sberbank, Gazprom, and Raiffeisen Bank by addressing feedback and delivering fixes.",
    },
    {
      title: "Development Standards for Figma-to-Code Microservice",
      description:
        "For the Figma-to-Code microservice, established and enforced project-wide development standards with a robust Pre-commit setup. Integrated Black for consistent code formatting, isort for import organization, Autoflake for removing unused code, Flake8 for style and error detection, Mypy for improving static typing, Pyupgrade for modernizing syntax, Bandit for security vulnerability scanning, and core pre-commit-hooks for catching common issues early. Managed dependencies via Poetry, ensuring automated quality checks and a maintainable, secure codebase.",
    },
    {
      title: "Feedback and Issue Reporting Workflow",
      description:
        "Designed and implemented a feedback and issue reporting workflow for the presentation generation tool. On the frontend, built responsive modals in React for collecting user feedback and bug reports. On the backend, developed handlers to store reports in PostgreSQL and a Python service to export data to Excel and Google Sheets. Automated daily updates through GitHub Actions and cron jobs, ensuring the team always had up-to-date user insights.",
    },
    {
      title: "Agile Team Environment Delivery",
      description:
        "Delivered consistently in an Agile team environment—contributing to standups, sprint planning, and code reviews. Collaborated with designers and QA to clarify requirements, maintain design consistency, and surface technical trade-offs early in the cycle.",
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
