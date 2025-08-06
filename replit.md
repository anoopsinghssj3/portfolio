# Alex Thompson Portfolio - Full Stack Developer

## Overview

This is a modern personal portfolio website for Alex Thompson, a full stack developer and UI/UX designer. The application showcases professional experience, skills, projects, and contact information through an interactive, animated interface. Built with React and TypeScript, the portfolio features smooth scrolling navigation, responsive design, and modern animations to create an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**Performance Optimizations (August 6, 2025)**
- Implemented lazy loading for all images and React components using React.lazy() and Suspense
- Optimized image sizes: hero (160x160), projects (400x300), about section (600x450)
- Added requestAnimationFrame throttling for scroll events to improve performance
- Created loading spinner component for better perceived performance during transitions
- Added DNS prefetching and preconnect for external resources (fonts, images)
- Enhanced color theme with modern purple-to-green gradients and better contrast ratios
- Improved hover effects and animations throughout the portfolio
- Code splitting implemented for faster initial page loads

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript in a modern single-page application (SPA) architecture. The application uses Vite as the build tool for fast development and optimized production builds. Component composition follows a modular approach with separate sections for different portfolio content areas (hero, about, skills, projects, contact).

### UI Component System
The application leverages shadcn/ui components built on top of Radix UI primitives, providing a comprehensive design system with consistent styling via Tailwind CSS. Components are configured with CSS variables for theme customization, supporting both light and dark modes through the design token system.

### Animation and Interactions
Framer Motion is integrated for smooth animations and transitions throughout the portfolio. The system uses scroll-triggered animations with `useInView` hooks to create engaging reveal effects as users navigate through different sections.

### State Management
The application uses TanStack Query (React Query) for server state management, though the current implementation primarily focuses on static portfolio content. Local state is managed through React hooks with a centralized query client configuration.

### Routing System
Navigation is handled through Wouter, a lightweight client-side routing solution. The application implements smooth scrolling navigation between portfolio sections rather than traditional page-based routing.

### Styling Architecture
Tailwind CSS provides the styling foundation with a custom configuration extending the default theme. The system uses CSS custom properties for dynamic theming and includes PostCSS for additional processing capabilities.

### Development Tooling
The project includes comprehensive TypeScript configuration with strict type checking enabled. ESBuild handles server-side bundling for production deployments, while Vite manages client-side development and building.

## External Dependencies

### UI and Animation Libraries
- **Radix UI**: Provides accessible, unstyled UI primitives for complex components like dialogs, dropdowns, and navigation menus
- **Framer Motion**: Handles all animations, transitions, and scroll-triggered effects throughout the portfolio
- **Lucide React**: Supplies consistent icon components used across the interface

### Development and Build Tools
- **Vite**: Primary build tool and development server with React plugin integration
- **Tailwind CSS**: Utility-first CSS framework for styling with PostCSS processing
- **TypeScript**: Provides static type checking and enhanced developer experience

### Data Management
- **TanStack Query**: Client-side state management and data synchronization, configured for portfolio data handling
- **Wouter**: Lightweight routing library for single-page application navigation

### Backend Infrastructure
- **Express.js**: Web application framework for the Node.js server
- **Drizzle ORM**: Database toolkit configured for PostgreSQL integration with Neon Database
- **PostgreSQL**: Primary database system for data persistence (via Neon serverless platform)

### Database and Storage
- **Neon Database**: Serverless PostgreSQL platform providing the database backend
- **Drizzle Kit**: Database migration and schema management tooling

The architecture supports both development and production environments with appropriate configurations for each, including hot module replacement in development and optimized builds for production deployment.