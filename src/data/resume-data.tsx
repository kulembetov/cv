import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Artur Kulembetov",
  initials: "AK",
  location: "Bangkok, Thailand, GMT +7",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about: "Software Engineer",
  summary:
    "Completed an intensive web development program, mastering technologies such as React, Redux, MongoDB, Node.js, and Docker. Successfully developed and deployed various web applications, demonstrating professionalism in full-stack development. Enhanced teamwork and problem-solving skills through collaboration within Agile and Git frameworks. All works underwent thorough review with subsequent code refactoring based on reviewer comments, contributing to the improvement of project quality and professional growth.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56837366?v=4",
  personalWebsiteUrl: "https://",
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
    ],
  },
  education: [
    {
      school: "IU International University of Applied Sciences",
      degree: "Bachelor's Degree in Computer Science",
      start: "2024",
      end: "2027",
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
      title: "Full Stack Developer",
      logo: "",
      start: "June 2024",
      end: "Present",
      description:
        "Developed a comprehensive authentication system using React, Vite, and Tailwind CSS for the frontend, and NestJS with Passport for the backend. Key features include a unified registration/login form, email confirmation, and OAuth integration with Google, Yandex, VK, and Telegram. The system supports secure token storage and QR code generation for Telegram authentication. Enhanced the user interface with a default dark theme and dynamic success/error messages, ensuring a secure and seamless user experience.",
    },
    {
      company: "Alfa Ecosystem",
      link: "https://www.linkedin.com/company/esalfa/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "https://avatars.githubusercontent.com/u/56837366?v=4",
      start: "May 2024",
      end: "June 2024",
      description: [
        "Contributed to a project refactoring Redux slices into thunks and types, enhancing code modularity and maintainability. I configured and optimized Husky and ESLint to ensure smooth development workflows and enforce code quality standards. Working in Bitrix with weekly meetings.",
      ],
    },
  ],
  skills: [
    "Frontend: React, Redux",
    "Backend: Node.js, MongoDB, Express",
    "UI/UX Design and Styling: TailwindCSS, shadcn/ui, Material-UI",
    "Deployment & Operations: Git, Docker",
    "Database Management: Prisma",
    "API Testing: Postman",
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
