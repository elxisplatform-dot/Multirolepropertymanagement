# Required Dependencies

## Installation

Run this command to install all required dependencies:

```bash
npm install @supabase/supabase-js react-router-dom clsx tailwind-merge sonner@2.0.3
```

## Dependencies List

### Core Dependencies (Already Installed)
- `react` - UI library
- `react-dom` - React DOM renderer
- `lucide-react` - Icons
- `tailwindcss` - Styling
- `@radix-ui/*` - UI primitives (via shadcn)

### New Dependencies Required

#### Routing
```bash
npm install react-router-dom
```
- Version: Latest (^6.x)
- Purpose: Client-side routing, navigation

#### Backend
```bash
npm install @supabase/supabase-js
```
- Version: Latest (^2.x)
- Purpose: Authentication, database, storage

#### Utilities
```bash
npm install clsx tailwind-merge
```
- `clsx`: Conditional className management
- `tailwind-merge`: Merge Tailwind classes intelligently

#### Notifications
```bash
npm install sonner@2.0.3
```
- Version: 2.0.3 (specific version required)
- Purpose: Toast notifications

## TypeScript Types

If using TypeScript (recommended), install type definitions:

```bash
npm install -D @types/node
```

## Verify Installation

After installing, verify in your `package.json`:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.x.x",
    "clsx": "^2.x.x",
    "lucide-react": "^0.x.x",
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "react-router-dom": "^6.x.x",
    "sonner": "2.0.3",
    "tailwind-merge": "^2.x.x"
  }
}
```

## Optional Dependencies

### Form Handling
```bash
npm install react-hook-form@7.55.0 zod @hookform/resolvers
```
- For advanced form validation
- Already configured in form components

### Development Tools
```bash
npm install -D @types/react @types/react-dom
```
- TypeScript definitions for React

## Environment Setup

After installing dependencies:

1. Copy `.env.example` to `.env`
2. Fill in your Supabase and Paystack credentials
3. Run `npm run dev` to start development server

## Build Check

To verify everything works:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

If there are no errors, you're ready to go! 🚀
