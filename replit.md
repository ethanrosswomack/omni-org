# Omniversal Media Website

## Overview
This repository contains a full-stack web application for "Omniversal Media", a professional media production company. The project is built with React for the frontend and Express.js for the backend, using Drizzle ORM for database operations.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Components**: shadcn/ui component library (based on Radix UI primitives)
- **Styling**: Tailwind CSS with a customized theme system (dark/light mode support)
- **State Management**: React Query for server state, React Context for application state
- **Routing**: wouter for lightweight client-side routing
- **Animation**: Framer Motion for UI animations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API endpoints with JSON responses
- **Database Access**: Drizzle ORM for database operations
- **Validation**: Zod for schema validation
- **File Structure**: 
  - `server/index.ts` - Express app setup
  - `server/routes.ts` - API route definitions
  - `server/storage.ts` - Data storage abstraction
  - `shared/schema.ts` - Database schema definitions

### Database Architecture
- **ORM**: Drizzle with PostgreSQL compatibility
- **Schema**: 
  - `users` table for user accounts
  - `contact_forms` table for storing contact form submissions
- **Migrations**: Drizzle Kit for managing database migrations

## Key Components

### Frontend Components
1. **Layout Components**: 
   - `Header.tsx` - Site navigation and theme toggle
   - `Footer.tsx` - Footer with links and copyright
   
2. **Page Components**:
   - `Home.tsx` - Main landing page
   - `NotFound.tsx` - 404 page

3. **Section Components**:
   - `HeroSection.tsx` - Homepage hero banner
   - `AboutSection.tsx` - Company information
   - `ServicesSection.tsx` - Service offerings
   - `WorkShowcase.tsx` - Portfolio display
   - `TestimonialsSection.tsx` - Client testimonials
   - `ContactSection.tsx` - Contact form
   - `CTASection.tsx` - Call to action

4. **UI Components**:
   - Comprehensive set of UI components from shadcn/ui
   - Custom theme implementation with dark/light mode support

### Backend Components
1. **API Endpoints**:
   - `/api/contact` - Endpoint for contact form submissions

2. **Database Models**:
   - User model for authentication (not fully implemented)
   - Contact form model for storing submissions

3. **Storage Layer**:
   - `MemStorage` class for in-memory storage (development)
   - Designed to be replaced with database-backed storage

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Frontend validates data with Zod schema
   - Frontend sends data to `/api/contact` endpoint
   - Backend validates data against schema
   - Backend stores valid data in database
   - Backend returns success/error response
   - Frontend displays toast notification based on response

2. **Theme Management**:
   - Theme preference stored in localStorage
   - ThemeProvider context manages theme state
   - UI components respond to theme changes

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***  - Primitive UI components
- **@tanstack/react-query** - Data fetching and caching
- **class-variance-authority** - Component styling variants
- **clsx** - Conditional class names
- **tailwindcss** - Utility-first CSS
- **framer-motion** - Animation library
- **wouter** - Routing library
- **lucide-react** - Icon library

### Backend Dependencies
- **express** - Web server framework
- **drizzle-orm** - Database ORM
- **zod** - Schema validation
- **@neondatabase/serverless** - Database client

## Deployment Strategy
The application is configured for deployment on Replit with:

- **Development**: `npm run dev` script using tsx for TypeScript execution
- **Build**: Vite for frontend bundling, esbuild for backend
- **Production**: Node.js serving the bundled application
- **Database**: Configured to use PostgreSQL via DATABASE_URL environment variable

The deployment workflow includes:
1. Building the frontend with Vite
2. Bundling the backend with esbuild
3. Running the production server with Node.js
4. Exposing port 5000 as port 80 to the public

## Setup Instructions

1. **Environment Variables**:
   - `DATABASE_URL` - PostgreSQL connection string

2. **Database Setup**:
   - Run `npm run db:push` to push the schema to the database

3. **Development**:
   - Run `npm run dev` to start the development server

4. **Production Build**:
   - Run `npm run build` to create production bundle
   - Run `npm run start` to start the production server