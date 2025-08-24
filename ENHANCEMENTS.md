# Project Structure and Enhancement Guide

This guide outlines the key parts of the project and how to extend it.

## Project Structure

- `app/` – Next.js App Router pages. Each subdirectory under `app` represents a route.
- `components/` – Shared React components such as the navigation bar.
- `__tests__/` – Jest unit tests for pages and components.
- `prisma/` – Prisma schema and database migrations.
- `pages/api/` – API routes for server-side functionality.

## Navigating and Enhancing

1. **Add a new page**
   - Create a new folder inside `app/` with a `page.tsx` file.
   - Include any components or content required for the route.
   - Update navigation in `components/NavBar.tsx` if the page should be linked there.

2. **Write tests**
   - Add a corresponding test in `__tests__/` to ensure the page renders expected content.
   - Run `npm test` to verify all tests pass.

3. **Style and Components**
   - Use Tailwind CSS utility classes for styling.
   - Create reusable components in `components/` and import them where needed.

4. **Data and Backend**
   - Use Prisma models in `prisma/schema.prisma` for database work.
   - API routes live under `pages/api/`.

5. **Running and Building**
   - `npm run dev` starts the development server.
   - `npm run build` builds the production bundle.

Following this structure helps maintain consistency and makes it easier to extend the application.
