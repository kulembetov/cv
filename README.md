# Artur Kulembetov - CV

## Overview

Full-stack developer delivering secure, scalable, and maintainable applications end-to-end. Designed and implemented an OAuth-integrated authentication system with role-based access control, replacing a local-only setup and enabling one-tap sign-in. Applied Feature-Sliced Design (FSD) architecture to create modular codebases, reducing onboarding time and accelerating feature rollout.

Architected a design-to-code automation pipeline that converted marked-up Figma files into production-ready database configurations, cutting delivery timelines from weeks to a day. Directed a multidisciplinary team to define markup standards, streamline collaboration, and ensure pixel-perfect UI fidelity for enterprise clients.

Established company-wide development standards with automated quality checks — integrating formatting, linting, static typing, security scanning, and dependency management — improving code quality and reducing post-merge issues. Built a feedback and issue reporting system with responsive frontend components, a robust backend pipeline, and automated reporting to ensure daily actionable insights.

## Work Experience

### presentsimple.ai *(June 2024 - Present, Remote)*
**Full-Stack Developer**

Built a secure, OAuth-integrated authentication system using React, Tailwind CSS, and NestJS—replacing local-only auth and enabling one-tap sign-in with secure token handling and role-based access control.

Applied FSD architecture to structure codebases for modularity and maintainability, reducing onboarding time and enabling faster feature rollout across the stack.

Co-led, with a senior developer, the end-to-end layout delivery process for B2B and B2C clients, spanning frontend, backend, and the Python-based "Figma-to-Code" microservice. On the frontend, ensured the template was displayed in the editor exactly as in Figma, preserving styles and positioning. On the backend, automated layout provisioning by extracting marked-up designs from Figma, generating SQL, and populating the database with reusable configurations—reducing delivery time from weeks to a day. Directed a team of three designers and three intern developers, defined Figma markup standards with stakeholders, managed tasks via a Kanban board, coordinated daily syncs and live coding sessions, and supported pilots for Sberbank, Gazprom, and Raiffeisen Bank by addressing feedback and delivering fixes.

For the Figma-to-Code microservice, established and enforced project-wide development standards with a robust Pre-commit setup. Integrated Black for consistent code formatting, isort for import organization, Autoflake for removing unused code, Flake8 for style and error detection, Mypy for improving static typing, Pyupgrade for modernizing syntax, Bandit for security vulnerability scanning, and core pre-commit-hooks for catching common issues early. Managed dependencies via Poetry, ensuring automated quality checks and a maintainable, secure codebase.

Designed and implemented a feedback and issue reporting workflow for the presentation generation tool. On the frontend, built responsive modals in React for collecting user feedback and bug reports. On the backend, developed handlers to store reports in PostgreSQL and a Python service to export data to Excel and Google Sheets. Automated daily updates through GitHub Actions and cron jobs, ensuring the team always had up-to-date user insights.

Delivered consistently in an Agile team environment—contributing to standups, sprint planning, and code reviews. Collaborated with designers and QA to clarify requirements, maintain design consistency, and surface technical trade-offs early in the cycle.

## Education

- **Southern New Hampshire University** *(June 2025 - May 2028, Manchester, NH)*
  - B.Sc. in Computer Science

- **Yandex.Practicum** *(September 2022 - May 2024, Moscow, Russia)*
  - Web Developer Professional Training Course

## Skills

- **Technical:** React, Next.js, NestJS, Node.js, TypeScript, JavaScript, Python, Redux, TanStack Query, Zod, HTML, CSS, Tailwind CSS, MUI, shadcn/ui, PostgreSQL, MongoDB, Redis, Prisma, Docker, Git, GitHub Actions, Poetry, S3 Storage, Yandex Cloud, Black, isort, Autoflake, Flake8, Mypy, Pyupgrade, Bandit, pre-commit
- **AI Tools:** GPT, DeepSeek, Claude, Gemini
- **Languages:** Russian, English

## Projects

### **Quzzly AI**
- **Tech Stack:** React, Vite, Tailwind CSS, shadcn/ui, Zustand, Axios, Netlify
- **Description:** An interactive web-based quiz application that allows users to test their knowledge with real-time feedback. The app fetches trivia questions from an external API and provides a dynamic quiz experience. It is built with React, styled with Tailwind, and supports integration with Telegram WebApps for seamless use within the Telegram ecosystem.
- [GitHub - Quzzly AI](https://github.com/kulembetov/quizzly-ai)

### **Order Validation Food Delivery**
- **Tech Stack:** Python
- **Description:** I ordered water, a pie, and bread from a local thai app. Water was out of stock. When the first delivery came, one pie was out of stock. I ordered 10 pies (400 baht) and a few bottles (50 baht), getting free delivery. To prevent this issue, I wrote a script.
- [GitHub - Order Validation Food Delivery](https://github.com/kulembetov/order-validation-food-delivery)

### **Card Hub**
- **Tech Stack:** React, Redux Toolkit, Tailwind CSS
- **Description:** Card Hub is a Single Page Application (SPA) built with React, Redux Toolkit, and Tailwind CSS. The application fetches and displays images from the Pexels API, allowing users to like and remove cards with the liked state persisted in local storage.
- [GitHub - Card Hub](https://github.com/kulembetov/card-hub)

### **Property Pulse**
- **Tech Stack:** Next.js, Tailwind CSS, next-auth, react-icons, react-geo, react-map-gl, react-toastify, react-spinner
- **Description:** A Next.js app for listing and searching rental properties utilizing Tailwind CSS, next-auth, react-icons, react-geo, react-map-gl, react-toastify, and react-spinner.
- [GitHub - Property Pulse](https://github.com/kulembetov/property-pulse)

