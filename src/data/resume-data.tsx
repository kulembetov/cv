import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Danang, Vietnam",
  locationLink: "https://www.google.com/maps/place/Da+Nang",
  about: "Full-Stack Product Engineer",
  summary:
    "Full-Stack Product Engineer building and leading work across frontend, backend, CI/CD, and observability. Focused on turning rough product ideas into shipped software - from user-facing features and backend flows to production delivery, iteration, and cross-functional execution. Especially interested in products where strong engineering, fast execution, and business value all matter.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56837366?v=4",
  personalWebsiteUrl: "https://cv-kulembetov.vercel.app",
  contact: {
    email: "artur_kulembetov@outlook.com",
    tel: "",
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
      }
    ],
  },
  education: [
    {
      school: "Southern New Hampshire University",
      degree: "B.Sc. in Computer Science",
      start: "June 2025",
      end: "May 2028",
      location: "Manchester, NH",
      description: "",
    },
    {
      school: "Yandex.Practicum",
      degree: "Web Developer Professional Training Course",
      start: "Sept 2022",
      end: "May 2024",
      location: "Moscow, Russia",
      description: "",
    },
  ],
  work: [
    {
      company: "Presentsimple AI",
      link: "https://presentsimple.ai/",
      badges: ["Remote"],
      title: "Full-Stack Product Engineer",
      logo: "",
      start: "June 2024",
      end: "Present",
      description: [
        "Led daily standups and cross-functional execution across product, design, and engineering, turning ambiguous requirements into scoped work and shipped features.",
        "Built a Python Figma-to-layout ingestion pipeline using the Figma API, Telegram, and PostgreSQL, processing a 45-slide template and ~3,950 records in one run.",
        "Replaced N+1-style database writes and deletes with batched bulk operations and transactional retry handling, making layout sync reliable at higher data volume.",
        "Built AI-assisted content generation with quotas and moderation checks, speeding creation while keeping abuse, cost, and output quality under control.",
        "Connected CloudPayments subscriptions to feature-flagged access, helping the team roll out and A/B test paid features without hardcoded gates.",
        "Moved long-running asset generation into queue-backed jobs with retryable failures, keeping heavy work off user-facing request paths.",
        "Built one-tap OAuth and RBAC authentication, reducing onboarding friction without weakening access control.",
        "Built release-safety tooling around typed env validation, CI checks, Docker deploys, and observability, reducing config drift and regressions.",
        "Stabilized interactive editor flows with optimistic updates, cache invalidation, and cleaner local/server state boundaries.",
        "Automated lifecycle messaging and reminders, clarifying billing states while reducing support overhead."
      ]
    },
    {
      company: "Alpha Ecosystem",
      link: "https://salfa.ru/sarawan/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "",
      start: "Mar 2024",
      end: "May 2024",
      description: [
        "Split tightly coupled frontend state into feature-owned modules, making large UI changes safer to review and ship.",
        "Fixed stale-state and rendering issues in interactive flows with targeted client-state and render-path refactors.",
        "Extracted reusable UI and state patterns to reduce duplicated implementation across screens.",
        "Removed circular dependencies and enforced strict lint/type rules, reducing fragile imports during feature work."
      ]
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "TanStack Query",
        "TanStack Router",
        "Zustand",
        "Tiptap",
        "Zod"
      ]
    },
    {
      category: "Backend & Platform",
      skills: [
        "Node.js",
        "NestJS",
        "Python",
        "BullMQ",
        "JWT",
        "OAuth",
        "REST APIs",
        "Swagger/OpenAPI"
      ]
    },
    {
      category: "Data & Storage",
      skills: [
        "PostgreSQL",
        "Redis",
        "Prisma",
        "MongoDB",
        "S3-compatible storage"
      ]
    },
    {
      category: "AI & Integrations",
      skills: [
        "OpenAI/OpenRouter APIs",
        "Figma API",
        "Telegram Bot API",
        "webhooks",
        "Resend"
      ]
    },
    {
      category: "Payments & Monetization",
      skills: [
        "CloudPayments",
        "Stripe",
        "Polar.sh",
        "CryptoCloud"
      ]
    },
    {
      category: "Infrastructure & Observability",
      skills: [
        "Docker",
        "GitLab CI/CD",
        "Terraform",
        "Grafana",
        "Prometheus",
        "Loki",
        "Sentry",
        "PostHog"
      ]
    },
    {
      category: "Testing & Quality",
      skills: [
        "Playwright",
        "pytest",
        "mypy",
        "flake8",
        "Black"
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
      title: "Cross-Functional Execution",
      description:
        "Led daily standups and cross-functional execution across product, design, and engineering, turning ambiguous requirements into scoped work and shipped features.",
    },
    {
      title: "Figma-to-Layout Pipeline",
      description:
        "Built a Python Figma-to-layout ingestion pipeline using the Figma API, Telegram, and PostgreSQL, processing a 45-slide template and ~3,950 records in one run.",
    },
    {
      title: "Data Sync Reliability",
      description:
        "Replaced N+1-style database writes and deletes with batched bulk operations and transactional retry handling, making layout sync reliable at higher data volume.",
    },
    {
      title: "AI-Assisted Generation",
      description:
        "Built AI-assisted content generation with quotas and moderation checks, speeding creation while keeping abuse, cost, and output quality under control.",
    },
    {
      title: "Subscription Access Controls",
      description:
        "Connected CloudPayments subscriptions to feature-flagged access, helping the team roll out and A/B test paid features without hardcoded gates.",
    },
    {
      title: "Queue-Backed Jobs",
      description:
        "Moved long-running asset generation into queue-backed jobs with retryable failures, keeping heavy work off user-facing request paths.",
    },
    {
      title: "Auth and Access",
      description:
        "Built one-tap OAuth and RBAC authentication, reducing onboarding friction without weakening access control.",
    },
    {
      title: "Release Safety and Observability",
      description:
        "Built release-safety tooling around typed env validation, CI checks, Docker deploys, and observability, reducing config drift and regressions.",
    },
    {
      title: "Editor State Stability",
      description:
        "Stabilized interactive editor flows with optimistic updates, cache invalidation, and cleaner local/server state boundaries.",
    },
    {
      title: "Lifecycle Automation",
      description:
        "Automated lifecycle messaging and reminders, clarifying billing states while reducing support overhead.",
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
