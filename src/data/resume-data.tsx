import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Danang, Vietnam",
  locationLink: "https://www.google.com/maps/place/Da+Nang",
  about: "Full-Stack Engineer",
  summary:
    "Full-Stack Engineer with 2+ years of experience building automation-heavy systems and product features in an AI startup environment. Strong across Python, TypeScript, Node.js, React, and PostgreSQL, with end-to-end ownership spanning architecture, delivery, performance, and developer workflow quality.",
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
      company: "presentsimple.ai",
      link: "https://presentsimple.ai/",
      badges: ["Remote"],
      title: "Full-Stack Product Engineer",
      logo: "",
      start: "June 2024",
      end: "Present",
      description: [
        "Owned end-to-end architecture and delivery for core product systems across frontend, backend, data, and infrastructure, driving features from PRD to production release.",
        "Led technical execution across a 10-person cross-functional team: decomposition, sequencing, code review standards, and release coordination.",
        "Designed and shipped a secure auth platform (React, NestJS, NextAuth.js) with one-tap OAuth and RBAC, reducing onboarding friction while strengthening access control.",
        "Built a Python Figma-to-code pipeline that increased template generation from 4/month to 3+ per day, enabling enterprise demos for Raiffeisen, Severstal, Gazprom, and Sber Marketing.",
        "Re-architected sync/data workflows by removing N+1 queries, introducing bulk operations, and parallelizing bottlenecks, cutting full layout sync from ~30 minutes to ~30 seconds.",
        "Built production observability stack and alerting workflows (Grafana, Prometheus, Loki, Promtail, Sentry), improving incident detection and time-to-resolution.",
        "Established CI/CD quality gates across formatting, linting, static typing, tests, and security checks; raised pytest coverage to ~80% and materially reduced release regressions.",
        "Improved frontend performance and SEO to Lighthouse 91 Performance / 100 SEO, increasing Core Web Vitals by 25+ points."
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
        "Refactored frontend architecture for scalability by modularizing state/selectors and reducing coupling between feature areas, improving maintainability and delivery speed.",
        "Strengthened code quality standards by enforcing strict lint/type rules and eliminating circular dependencies that were causing fragile imports and regressions.",
        "Improved frontend reliability by introducing pre-commit and CI validation gates (format, lint, type checks, build verification) to block broken changes before deploy.",
        "Optimized release stability by tightening development workflows and standardizing scripts/tooling used by the team for consistent local and CI behavior.",
        "Contributed to UI performance and UX polish through targeted refactors in component structure and rendering paths, reducing frontend defects and rework."
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
      category: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "Python",
        "NextAuth.js",
        "JWT authentication",
        "Swagger"
      ]
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL",
        "Redis",
        "Prisma",
        "MongoDB"
      ]
    },
    {
      category: "Infrastructure",
      skills: [
        "Docker",
        "GitLab CI/CD pipelines",
        "Grafana",
        "Prometheus",
        "Loki",
        "Promtail",
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
        "black"
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
      title: "End-to-End Product Ownership",
      description:
        "Owned end-to-end architecture and delivery for core product systems across frontend, backend, data, and infrastructure, driving features from PRD to production release.",
    },
    {
      title: "Cross-Functional Technical Leadership",
      description:
        "Led technical execution across a 10-person cross-functional team: decomposition, sequencing, code review standards, and release coordination.",
    },
    {
      title: "Secure Authentication Platform",
      description:
        "Designed and shipped a secure auth platform (React, NestJS, NextAuth.js) with one-tap OAuth and RBAC, reducing onboarding friction while strengthening access control.",
    },
    {
      title: "Template Automation Pipeline",
      description:
        "Built a Python Figma-to-code pipeline that increased template generation from 4/month to 3+ per day, enabling enterprise demos for Raiffeisen, Severstal, Gazprom, and Sber Marketing.",
    },
    {
      title: "Data Workflow Re-Architecture",
      description:
        "Re-architected sync/data workflows by removing N+1 queries, introducing bulk operations, and parallelizing bottlenecks, cutting full layout sync from ~30 minutes to ~30 seconds.",
    },
    {
      title: "Observability and Incident Response",
      description:
        "Built production observability stack and alerting workflows (Grafana, Prometheus, Loki, Promtail, Sentry), improving incident detection and time-to-resolution.",
    },
    {
      title: "CI/CD Quality Gates",
      description:
        "Established CI/CD quality gates across formatting, linting, static typing, tests, and security checks; raised pytest coverage to ~80% and materially reduced release regressions.",
    },
    {
      title: "Frontend Performance and SEO",
      description:
        "Improved frontend performance and SEO to Lighthouse 91 Performance / 100 SEO, increasing Core Web Vitals by 25+ points.",
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
