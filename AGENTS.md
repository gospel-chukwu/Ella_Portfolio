# Next.js Version Notice

> This project uses a cutting-edge Next.js version with breaking changes. Always read `node_modules/next/dist/docs/` before writing any Next.js-specific code. Do not assume older APIs still work.

---

# Project Coding Conventions

## TypeScript
- Never use `any`. Always define proper interfaces or types.
- Prefer `interface` for object shapes and `type` for unions, intersections, and primitives.
- Enable and respect strict mode — no implicit `any`, null checks required.
- Export types/interfaces from a dedicated `types.ts` or co-located `*.types.ts` file.
- Use `unknown` instead of `any` when the type is truly not known, then narrow it.

## React & Components
- Always use **functional components** with React Hooks — no class components.
- Use `PascalCase` for component names and their files (e.g., `UserCard.tsx`).
- Keep components focused: one responsibility per component. Split if a file exceeds ~150 lines.
- Prefer named exports over default exports for components.
- Co-locate component-specific types, hooks, and utils in the same folder.
- Avoid prop drilling more than 2 levels deep — use Context or a state manager instead.
- Always define explicit prop types using an `interface` (e.g., `interface UserCardProps { ... }`).
- Always use `next/image` for images — never use raw `<img>` tags.
- Always use `next/link` for internal navigation — never use raw `<a>` tags for internal links.

## Naming
- **Variables & functions**: `camelCase`
- **Components & types/interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case` for non-component files (e.g., `api.client.ts`), `PascalCase` for component files.
- **Folders**: `snake_case` for multi-word folders (e.g., `user_profile/`). Single-word folders are just lowercase (e.g., `hooks/`, `store/`, `types/`).
- Booleans should be prefixed with `is`, `has`, or `can` (e.g., `isLoading`, `hasError`).

## Styling — Tailwind CSS v4
- Use **Tailwind CSS utility classes** as the primary styling approach. Avoid writing custom CSS unless necessary.
- Use `@layer` in `app/globals.css` for any custom base/component styles.
- Do not use inline `style={{}}` for layout or visual styles — use Tailwind classes.

## File & Folder Structure

All shared code lives under `lib/`. The structure is:

```
lib/
├── apis/                # API call functions (fetch wrappers, external service clients)
├── components/          # Page-specific components (not globally reusable)
├── empty_state/         # Component-scoped empty states (e.g., empty_state/referrals/)
├── hooks/               # Custom React hooks
├── query/               # TanStack Query definitions (queries, mutations, query keys)
├── reusable_components/ # Globally shared, reusable UI components
├── skeletons/           # Component-scoped skeletons (e.g., skeletons/referrals/)
├── store/               # Global state (Zustand or Context stores)
├── sub_components/      # Component-scoped sub-components (e.g., sub_components/referral/ReferralInput.tsx)
├── types/               # Shared TypeScript interfaces and types
├── utils/               # Pure utility/helper functions
└── wrappers/            # Layout wrappers and providers (e.g., QueryClientProvider)

app/                     # Next.js App Router routes only
├── api/                 # API route handlers
├── layout.tsx           # Root layout
└── page.tsx             # Root page

public/                  # Static assets (images, fonts, icons)
```

**Rules:**
- Place all routes under `app/` following the Next.js App Router conventions.
- Keep `page.tsx` files lean — extract all complex UI into `lib/components/`.
- Reusable UI components that are used in 2+ places go in `lib/reusable_components/`.
- All TypeScript types and interfaces go in `lib/types/`.
- All API fetching logic goes in `lib/apis/` — never inline fetch calls inside components.
- Custom hooks go in `lib/hooks/` — keep them small and single-purpose.
- Server-only logic (DB, auth, sensitive operations) must live in Server Components or `app/api/` route handlers.
- Client Components must have `"use client"` as the very first line.
- `lib/empty_state/`, `lib/skeletons/`, and `lib/sub_components/` are **component-scoped** — each subfolder maps to one specific component and is never imported outside of it (e.g., `sub_components/referral/ReferralInput.tsx` is only used by the referral component).

## Accessibility
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`) instead of generic `<div>` where appropriate.
- Always add `aria-label` on interactive elements that have no visible text (e.g., icon-only buttons).
- Ensure all form inputs have associated `<label>` elements.
- Interactive elements must be keyboard-navigable and focusable.

## Error Handling
- Always wrap async operations in `try/catch` blocks.
- Never silently swallow errors — log them with `console.error()` at minimum.
- In API route handlers, always return a proper HTTP status code and a JSON error message.
- Use typed error boundaries for client-side error handling where appropriate.

## Data Fetching
- Prefer **Server Components** for data fetching whenever possible.
- Use `async/await` — avoid `.then()` chains.
- For **client-side fetching**, always use **TanStack Query v5** (`@tanstack/react-query`) — no raw `useEffect` + `fetch` patterns.
- Define all queries and mutations in `lib/query/` — never inline `useQuery`/`useMutation` logic directly in a component.
- Always handle loading and error states explicitly in the UI.
- Store all environment variables in `.env.local` — this file is gitignored by default and should never be committed.
- Only prefix variables with `NEXT_PUBLIC_` if they absolutely must be accessible in the browser. All other variables are server-only by default.

## State Management — Zustand v5
- Use **Zustand** (`zustand`) for all global client-side state.
- Define stores in `lib/store/` — one file per store slice (e.g., `lib/store/auth.store.ts`).
- Keep stores slim: only truly global, cross-component state belongs in Zustand. Local UI state stays in `useState`.
- Always type your store with a proper `interface` — never use `any` in store definitions.
- Use Zustand's `persist` middleware only for state that genuinely needs to survive page refreshes.
- Do not put server data (fetched from APIs) in Zustand — that belongs in TanStack Query's cache.

## TanStack Query v5
- Use `useQuery` for data reads and `useMutation` for writes.
- Define query keys as constants in `lib/query/` to avoid key collisions.
- Always provide `staleTime` for queries — never leave it at the default `0` unless the data must always be fresh.
- Use `enabled` option to conditionally run queries (e.g., `enabled: !!userId`).
- Invalidate queries via `queryClient.invalidateQueries()` after successful mutations — do not manually update the cache unless necessary.

## Code Quality
- No unused variables, imports, or functions. Remove dead code.
- Keep functions short (aim for under 30 lines). Extract helpers if needed.
- Write self-documenting code — use clear variable and function names over comments.
- Add a JSDoc comment for complex utility functions.
- Run `npm run lint` before committing. Fix all ESLint errors; do not disable rules without a documented reason.

## Git
- Commit messages should be in the imperative mood: `Add feature`, `Fix bug`, `Refactor component`.
- Each commit should represent a single logical change.
