# Replit.md

## Overview

This is a React-based social media marketing website for Emilie Lundberg, built with a modern full-stack architecture. The application features a professional landing page with contact form functionality, using Express.js for the backend API and React with TypeScript for the frontend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Development**: Hot module replacement via Vite in development mode

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color palette and design system
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Data Storage**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Validation**: Zod schemas for request validation with shared types
- **Development Setup**: Integrated with Vite for seamless development experience

### Database Schema
The application defines two main entities:
- **Users**: Basic user authentication structure (id, username, password)
- **Contacts**: Contact form submissions (id, firstName, lastName, email, businessName, services, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - Frontend form validates input using Zod schemas
   - Data is sent to `/api/contact` endpoint via POST request
   - Backend validates data and stores contact information
   - Success/error response is displayed to user via toast notifications

2. **Contact Retrieval**:
   - Admin endpoint `/api/contacts` returns all contact submissions
   - Data flows through TanStack Query for caching and state management

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Backend**: Express.js, Node.js with ES modules
- **Database**: Drizzle ORM with PostgreSQL support (@neondatabase/serverless)
- **Validation**: Zod with drizzle-zod integration

### UI and Styling
- **Component Library**: Complete shadcn/ui suite with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icons, React Icons for social media

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across the stack
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

The application is configured for both development and production environments:

### Development
- **Dev Server**: Vite development server with HMR
- **API Integration**: Express server runs alongside Vite dev server
- **Database**: Currently using in-memory storage with Drizzle configured for PostgreSQL

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles Express server to `dist/index.js`
- **Static Serving**: Express serves built React app in production
- **Database**: Ready for PostgreSQL deployment with connection string configuration

### Key Architectural Decisions

1. **Monorepo Structure**: Keeps related code together while maintaining clear boundaries between client/server/shared code

2. **Shared Type Safety**: Zod schemas in shared directory ensure type safety across the full stack

3. **Storage Abstraction**: IStorage interface allows easy switching between in-memory and database implementations

4. **Component Library**: shadcn/ui provides consistent, accessible components with customizable theming

5. **Modern Development Experience**: Vite + TypeScript + Hot reloading for fast development cycles