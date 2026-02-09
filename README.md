# Next.js Prisma Boilerplate

A modern Next.js 16 boilerplate with Prisma ORM, PostgreSQL, TypeScript, and Tailwind CSS. This project provides a solid foundation for building full-stack web applications with best practices and developer experience in mind.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Language**: TypeScript
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config

## Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-boilerplate-prisma
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your database URL in `.env.local`:

```
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
```

5. Set up the database:

```bash
npx prisma migrate dev
npx prisma generate
```

6. Seed the database (optional):

```bash
npm run db:seed
```

## Getting Started

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                 # Next.js app router pages and layouts
├── components/          # Reusable React components
├── lib/                # Utility functions and configurations
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── components.json     # shadcn/ui configuration
```

## Database

This project uses Prisma as the ORM with PostgreSQL. The schema is defined in `prisma/schema.prisma`.

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Create and run migrations
npx prisma migrate dev

# View database in Prisma Studio
npx prisma studio

# Seed the database
npm run db:seed
```

## Styling

The project uses Tailwind CSS for styling with shadcn/ui components. Components are configured in `components.json`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes database setup)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed the database

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy

### Other Platforms

Ensure your environment variables are properly configured and run:

```bash
npm run build
npm run start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Contributing

Feel free to submit issues and enhancement requests!
