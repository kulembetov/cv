import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelgramIcon";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Full-Stack Product Engineer",
  summary:
    "Full-Stack Product Engineer with expertise in building secure, scalable applications. At presentsimple.ai, I built and launched an OAuth authentication system with role-based access control and one-tap sign-in using React, Tailwind CSS, NestJS, and NextAuth.js. I automated the delivery pipeline, increasing output from 4 templates a month to about 3 a day with a steady 30-minute turnaround per layout.\n\n" +
    "Built a Python Figma-to-Code microservice (SQLAlchemy, Poetry) that extracted design data from Figma and generated SQL for the backend. Reworked the data pipeline by fixing N+1 patterns and switching to bulk operations, reducing full layout syncs from ~30 minutes to ~30 seconds. Added asyncio and aiohttp to run fetch/delete/generate tasks in parallel.\n\n" +
    "Led a cross-functional team of 10 (5 designers, 5 developers) building the Design-to-Code pipeline with daily check-ins through Notion and YouTrack. Standardized the development workflow with automated formatting, linting, and security checks, raising pytest coverage to ~80%. Hotfixes dropped from double-digits to a few per month.",
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
        "Built and launched a secure OAuth authentication system using React, Tailwind CSS, NestJS, and NextAuth.js, enabling one-tap sign-in and role-based access control.",
        "Automated the delivery pipeline, increasing output from 4 templates a month to about 3 a day, with a steady 30-minute turnaround per layout.",
        "Built a Python Figma-to-Code microservice (SQLAlchemy, Poetry) that extracted design data from Figma and generated SQL for the backend.",
        "Reworked the data pipeline by fixing N+1 patterns and switching insert/delete/update flows to bulk operations, reducing full layout syncs from ~30 minutes to ~30 seconds. Added asyncio and aiohttp to run fetch/delete/generate tasks in parallel.",
        "Led a cross-functional team of 10 (5 designers, 5 developers) building the Design-to-Code pipeline and overseeing Python microservices syncing Figma data, with daily check-ins through Notion and YouTrack.",
        "Standardized the development workflow by adding automated formatting (black, isort), linting and type checks (flake8, mypy), cleanup tools (autoflake, pyupgrade), and security checks (bandit), raising pytest coverage to ~80%. Hotfixes dropped from double-digits to a few per month.",
        "Automated creation of branded presentation layouts using a Python and PostgreSQL template pipeline based on client brand books. Increased layout reuse by ~3x and enabled client demos for Raiffeisen, Severstal, Gazprom, and Sber Marketing.",
        "Implemented a feedback and analytics workflow using React, PostgreSQL, and Python services exporting data to Google Sheets and Google Cloud Storage. Added GitHub Actions and cron jobs for daily reporting.",
        "Improved SEO and performance by building an SEO-focused catalog system with automated HTML generation for presentations and categories, increasing search visibility for AI presentation queries. Boosted Lighthouse scores to 91 (Performance), 84 (Accessibility), 96 (Best Practices), and 100 (SEO). Achieved strong Core Web Vitals (LCP 1.4s, INP 72ms, CLS 0.01, FCP 1.4s, TTFB 0.6s) and reduced Total Blocking Time to 20ms, improving LCP and CLS scores by 25+ points."
      ]
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React", "Next.js", "Redux", "TanStack Query", "Zod", "Tailwind CSS", "MUI", "shadcn/ui", "HTML", "CSS", "i18n", "ARIA accessibility", "SEO optimization"
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
      category: "Tooling & Infra",
      skills: [
        "Docker", "Git", "GitHub Actions", "Poetry", "S3 Storage", "Yandex Cloud", "Google Cloud", "Sentry", "PostHog", "Google Lighthouse", "YouTrack", "Conventional Commits", "Turborepo", "Nx", "Vault"
      ]
    },
    {
      category: "Version Control",
      skills: [
        "Git", "jj", "Mercurial", "SVN"
      ]
    },
    {
      category: "Security & Scanning",
      skills: [
        "Trivy", "Gitleaks", "TruffleHog", "Snyk", "ggshield", "bandit"
      ]
    },
    {
      category: "Testing",
      skills: [
        "Playwright", "pytest", "pre-commit", "flake8", "mypy", "black", "isort", "autoflake", "pyupgrade"
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
        "Built and launched a secure OAuth authentication system using React, Tailwind CSS, NestJS, and NextAuth.js, enabling one-tap sign-in and role-based access control.",
    },
    {
      title: "Delivery Pipeline Automation",
      description:
        "Automated the delivery pipeline, increasing output from 4 templates a month to about 3 a day, with a steady 30-minute turnaround per layout.",
    },
    {
      title: "Figma-to-Code Microservice",
      description:
        "Built a Python Figma-to-Code microservice (SQLAlchemy, Poetry) that extracted design data from Figma and generated SQL for the backend.",
    },
    {
      title: "Data Pipeline Optimization",
      description:
        "Reworked the data pipeline by fixing N+1 patterns and switching insert/delete/update flows to bulk operations, reducing full layout syncs from ~30 minutes to ~30 seconds. Added asyncio and aiohttp to run fetch/delete/generate tasks in parallel.",
    },
    {
      title: "Cross-Functional Team Leadership",
      description:
        "Led a cross-functional team of 10 (5 designers, 5 developers) building the Design-to-Code pipeline and overseeing Python microservices syncing Figma data, with daily check-ins through Notion and YouTrack.",
    },
    {
      title: "Development Workflow Standardization",
      description:
        "Standardized the development workflow by adding automated formatting (black, isort), linting and type checks (flake8, mypy), cleanup tools (autoflake, pyupgrade), and security checks (bandit), raising pytest coverage to ~80%. Hotfixes dropped from double-digits to a few per month.",
    },
    {
      title: "Template Infrastructure Automation",
      description:
        "Automated creation of branded presentation layouts using a Python and PostgreSQL template pipeline based on client brand books. Increased layout reuse by ~3x and enabled client demos for Raiffeisen, Severstal, Gazprom, and Sber Marketing.",
    },
    {
      title: "Feedback and Analytics Workflow",
      description:
        "Implemented a feedback and analytics workflow using React, PostgreSQL, and Python services exporting data to Google Sheets and Google Cloud Storage. Added GitHub Actions and cron jobs for daily reporting.",
    },
    {
      title: "SEO and Performance Optimization",
      description:
        "Improved SEO and performance by building an SEO-focused catalog system with automated HTML generation for presentations and categories, increasing search visibility for AI presentation queries. Boosted Lighthouse scores to 91 (Performance), 84 (Accessibility), 96 (Best Practices), and 100 (SEO). Achieved strong Core Web Vitals (LCP 1.4s, INP 72ms, CLS 0.01, FCP 1.4s, TTFB 0.6s) and reduced Total Blocking Time to 20ms, improving LCP and CLS scores by 25+ points.",
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
