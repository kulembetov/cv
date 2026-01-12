import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelgramIcon";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Full-Stack Product Engineer",
  summary:
    "Full-Stack Product Engineer with expertise in building secure, scalable applications. At presentsimple.ai, I designed an OAuth authentication system with role-based access control and one-tap login using React, Tailwind CSS, NestJS, and NextAuth.js. I automated the delivery pipeline, scaling output from 4 templates per month to 10 per day (90%+ time reduction) and delivering over 300 layouts with consistent 30-minute turnaround.\n\n" +
    "Architected and deployed a Figma-to-Code microservice in Python (SQLAlchemy, Poetry), automating data extraction and SQL generation. Supported 1,000+ daily PostgreSQL operations and reduced query runtime from 30s to 1s via bulk inserts and query optimization. Introduced system-wide asynchronous processing with asyncio and aiohttp, enabling concurrent operations.\n\n" +
    "Led a cross-functional team of 6 (3 designers, 3 engineering interns) over a 3-month cycle. Established engineering quality standards with Pre-commit hooks and expanded pytest coverage to 80%, cutting production bugs by 40%. Improved scalability by replacing manual data entry with automated template infrastructure, achieving 3x higher reuse.",
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
      title: "Full-Stack Product Engineer",
      logo: "",
      start: "June 2024",
      end: "Present",
      description: [
        "Designed and implemented a secure OAuth authentication system using React, Tailwind CSS, NestJS, and NextAuth.js, introducing role-based access control and seamless one-tap login.",
        "Automated the delivery pipeline, scaling output from 4 templates per month to 10 per day (90%+ time reduction) and delivering over 300 layouts with consistent 30-minute turnaround.",
        "Architected and deployed a Figma-to-Code microservice in Python (SQLAlchemy, Poetry), automating data extraction and SQL generation. Supported 1,000+ daily PostgreSQL operations and reduced query runtime from 30s to 1s via bulk inserts and query optimization.",
        "Introduced system-wide asynchronous processing with asyncio and aiohttp, enabling concurrent operations for fetching, deletion, and layout generation. Improved scalability and delivery speed for key B2B clients.",
        "Led a cross-functional team of 6 (3 designers, 3 engineering interns) over a 3-month cycle. Managed workflow via Notion Kanban and daily syncs, conducting 90+ live coding sessions that boosted intern contributions to 40% of the codebase and ensured timely enterprise delivery.",
        "Established engineering quality standards with Pre-commit hooks (black, isort, autoflake, flake8, mypy, pyupgrade, bandit) and expanded pytest coverage to 80%, cutting production bugs by 40%.",
        "Improved scalability and reusability by replacing manual data entry from Figma with automated template infrastructure, achieving 3x higher reuse and enabling rapid customization for enterprise demos with Raiffeisen, Gazprom, and Sber Marketing.",
        "Developed a feedback and analytics system using React modals, PostgreSQL persistence, and Python-based export services integrated with Google Sheets and Google Cloud. Automated reporting through GitHub Actions and cron jobs, providing daily actionable insights for the engineering and design teams."
      ]
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React", "Next.js", "Redux", "TanStack Query", "Zod", "Tailwind CSS", "MUI", "shadcn/ui", "HTML", "CSS"
      ]
    },
    {
      category: "Backend",
      skills: [
        "NestJS", "Node.js", "Python", "NextAuth.js"
      ]
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "Prisma"
      ]
    },
    {
      category: "Tooling",
      skills: [
        "Docker", "Git", "GitHub Actions", "Poetry", "S3 Storage", "Yandex Cloud", "Google Cloud"
      ]
    },
    {
      category: "Testing",
      skills: [
        "pytest", "pre-commit", "flake8", "mypy", "black", "bandit", "isort", "autoflake", "pyupgrade"
      ]
    },
    {
      category: "AI Tools",
      skills: [
        "GPT", "DeepSeek", "Claude", "Gemini", "Grok"
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
        "Designed and implemented a secure OAuth authentication system using React, Tailwind CSS, NestJS, and NextAuth.js, introducing role-based access control and seamless one-tap login.",
    },
    {
      title: "Delivery Pipeline Automation",
      description:
        "Automated the delivery pipeline, scaling output from 4 templates per month to 10 per day (90%+ time reduction) and delivering over 300 layouts with consistent 30-minute turnaround.",
    },
    {
      title: "Figma-to-Code Microservice",
      description:
        "Architected and deployed a Figma-to-Code microservice in Python (SQLAlchemy, Poetry), automating data extraction and SQL generation. Supported 1,000+ daily PostgreSQL operations and reduced query runtime from 30s to 1s via bulk inserts and query optimization.",
    },
    {
      title: "Asynchronous Processing Implementation",
      description:
        "Introduced system-wide asynchronous processing with asyncio and aiohttp, enabling concurrent operations for fetching, deletion, and layout generation. Improved scalability and delivery speed for key B2B clients.",
    },
    {
      title: "Cross-Functional Team Leadership",
      description:
        "Led a cross-functional team of 6 (3 designers, 3 engineering interns) over a 3-month cycle. Managed workflow via Notion Kanban and daily syncs, conducting 90+ live coding sessions that boosted intern contributions to 40% of the codebase and ensured timely enterprise delivery.",
    },
    {
      title: "Engineering Quality Standards",
      description:
        "Established engineering quality standards with Pre-commit hooks (black, isort, autoflake, flake8, mypy, pyupgrade, bandit) and expanded pytest coverage to 80%, cutting production bugs by 40%.",
    },
    {
      title: "Template Infrastructure Automation",
      description:
        "Improved scalability and reusability by replacing manual data entry from Figma with automated template infrastructure, achieving 3x higher reuse and enabling rapid customization for enterprise demos with Raiffeisen, Gazprom, and Sber Marketing.",
    },
    {
      title: "Feedback and Analytics System",
      description:
        "Developed a feedback and analytics system using React modals, PostgreSQL persistence, and Python-based export services integrated with Google Sheets and Google Cloud. Automated reporting through GitHub Actions and cron jobs, providing daily actionable insights for the engineering and design teams.",
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
