# AI Rules

This document defines the tech stack and the rules for which libraries to use for specific tasks in this project.

## Tech Stack (Overview)
- Next.js (App Router) with React 19 for SSR/SSG and hybrid server/client components.
- TypeScript for type safety and maintainability.
- Tailwind CSS (with tailwindcss-animate) for utility-first styling and responsive design.
- shadcn/ui built on Radix UI for accessible, composable UI components.
- lucide-react for consistent, lightweight iconography.
- next-themes for dark/light/system theme switching.
- react-hook-form + zod + @hookform/resolvers for forms and schema validation.
- sonner for toast notifications and user feedback.
- Additional utilities: recharts (charts), embla-carousel-react (carousel), date-fns + react-day-picker (dates), Supabase client (optional backend).

## Library Usage Rules

### Routing & Pages
- Use Next.js App Router (the `app/` directory) for pages and layouts.
- Default to Server Components; add `"use client"` only for interactive components that require client-side hooks/state.
- Keep route-specific UI in `app/` and shared UI in `components/`.

### UI Components & Styling
- Prefer shadcn/ui components for core UI (Button, Input, Dialog, Drawer/Sheet, Tooltip, Select, Tabs, Table, etc.).
- Use Tailwind CSS for all styling (layout, spacing, colors, states); avoid custom CSS unless necessary. Place global styles in `app/globals.css`.
- If a shadcn/ui wrapper doesn’t exist, use Radix UI primitives and wrap them in small, focused components under `components/ui/`.

### Icons
- Use lucide-react icons exclusively for in-app icons.
- Control size and color via Tailwind classes (e.g., `h-5 w-5 text-muted-foreground`) and rely on `currentColor`.

### Forms & Validation
- Use react-hook-form for form state and submission handling.
- Define validation schemas with zod; integrate via `@hookform/resolvers/zod`.
- Keep form components small and reusable under `components/` and schemas/helpers under `lib/` when shared.

### Toasts & Feedback
- Use sonner for all toast notifications; mount the toaster once at the app root (a shared Toaster component already exists).
- Show success/error/loading toasts for important user actions (submit, save, delete, network operations).

### Themes
- Use next-themes for theme switching; avoid custom theme implementations.
- Respect system theme by default; ensure components support dark/light variants via Tailwind.

### Charts & Data Visualization
- Use recharts for charts. Keep chart wrappers/components in `components/ui/` to ensure consistency and responsiveness.

### Carousel/Slides
- Use embla-carousel-react for carousels; prefer the existing `components/ui/carousel.tsx` wrapper when available.

### Dates
- Use date-fns for date utilities (formatting, parsing).
- Use react-day-picker for date selection UI.

### Drawers/Sheets
- Prefer shadcn/ui `Drawer`/`Sheet` wrappers. If advanced mobile behavior is required, use the existing implementations and keep them under `components/ui/`.

### Data & Auth (Optional)
- When backend/auth/storage is needed, prefer Supabase (`@supabase/supabase-js`).
- Store Supabase credentials as environment variables and access them through a single client initializer.

### File Structure & Aliases
- Pages/layouts: `app/`
- Reusable components: `components/`
- UI primitives/wrappers: `components/ui/`
- Hooks: `hooks/`
- Utilities/helpers: `lib/`
- Static assets: `public/`
- Use path aliases from `components.json` (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`) for imports.

### General Practices
- Do not add new libraries without prior approval; prefer existing stack.
- Keep components under 100 lines where possible; extract hooks and utilities to keep code focused.
- Ensure accessibility (labels, roles, focus management) by leveraging Radix/shadcn patterns.
- Favor simple, readable implementations; avoid overengineering and excessive abstractions.