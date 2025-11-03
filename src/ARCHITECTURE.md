# PropertyFlow - Modular SaaS Architecture

## Overview

PropertyFlow has been refactored into a modular, multi-tenant SaaS application with role-based access control. The application supports four user roles: Super Admin, Landlord, Tenant, and Staff.

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v4.0
- **Routing**: React Router v6
- **Backend**: Supabase (Auth, Database, Storage)
- **Payments**: Paystack
- **UI Components**: shadcn/ui

## Project Structure

```
src/
├── config/                    # Configuration files
│   ├── env.ts                # Environment variables
│   ├── supabaseClient.ts     # Supabase client & types
│   └── paystack.ts           # Paystack integration
│
├── context/                   # React Context providers
│   ├── AuthContext.tsx       # Authentication state
│   └── ThemeContext.tsx      # Theme management
│
├── router/                    # Routing configuration
│   ├── AppRouter.tsx         # Main router with lazy loading
│   └── ProtectedRoute.tsx    # Route protection wrapper
│
├── pages/                     # Standalone pages
│   ├── Landing.tsx           # Marketing landing page
│   ├── Login.tsx             # Login page
│   ├── Register.tsx          # Registration page
│   ├── NotFound.tsx          # 404 page
│   └── Unauthorized.tsx      # 403 page
│
├── modules/                   # Feature modules (role-based)
│   ├── superadmin/
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   └── index.tsx         # Module entry with layout
│   │
│   ├── landlord/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Properties.tsx
│   │   │   ├── Tenants.tsx
│   │   │   └── Payments.tsx
│   │   └── index.tsx
│   │
│   ├── tenant/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Lease.tsx
│   │   │   ├── Payments.tsx
│   │   │   └── Maintenance.tsx
│   │   └── index.tsx
│   │
│   ├── staff/
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   └── index.tsx
│   │
│   └── shared/                # Shared across all modules
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── Sidebar.tsx
│       │   └── Loader.tsx
│       ├── layouts/
│       │   ├── AuthLayout.tsx
│       │   └── DashboardLayout.tsx
│       ├── hooks/
│       │   ├── useAuth.ts
│       │   └── useRole.ts
│       └── utils/
│           ├── constants.ts
│           ├── helpers.ts
│           └── api.ts
│
├── components/
│   ├── ui/                    # shadcn/ui components
│   └── figma/                 # Figma-specific components
│
├── App.tsx                    # App entry point
└── main.tsx                   # Vite entry point
```

## Key Features

### 1. Modular Architecture
- Each user role has its own module with isolated pages and components
- Lazy loading for optimal performance
- Shared components and utilities across modules

### 2. Role-Based Access Control
- Protected routes with role validation
- Automatic redirection based on user role
- Unauthorized access handling

### 3. Authentication Flow
1. User lands on marketing page (`/`)
2. User signs up/logs in (`/login`, `/register`)
3. System authenticates with Supabase
4. User is redirected to role-specific dashboard
5. Session persists across refreshes

### 4. Layout System
- **AuthLayout**: Used for login/register pages with branding
- **DashboardLayout**: Used for all authenticated pages with navbar + sidebar

### 5. Theming
- Primary color: `#5d866c` (green)
- Consistent color palette across the app
- Dark mode support (via ThemeContext)

## Environment Setup

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
```

## Supabase Database Schema

### Tables to create:

1. **profiles**
   - id (uuid, primary key, references auth.users)
   - email (text)
   - full_name (text)
   - role (text: 'superadmin' | 'landlord' | 'tenant' | 'staff')
   - created_at (timestamp)
   - updated_at (timestamp)

2. **properties**
   - id (uuid, primary key)
   - landlord_id (uuid, references profiles)
   - name (text)
   - address (text)
   - units (integer)
   - created_at (timestamp)

3. **tenants**
   - id (uuid, primary key)
   - property_id (uuid, references properties)
   - full_name (text)
   - email (text)
   - phone (text)
   - lease_start (date)
   - lease_end (date)

4. **payments**
   - id (uuid, primary key)
   - tenant_id (uuid, references tenants)
   - amount (numeric)
   - status (text: 'pending' | 'completed' | 'failed')
   - payment_date (date)
   - reference (text)

5. **maintenance_requests**
   - id (uuid, primary key)
   - property_id (uuid, references properties)
   - tenant_id (uuid, references tenants)
   - title (text)
   - description (text)
   - status (text: 'pending' | 'in_progress' | 'completed')
   - priority (text: 'low' | 'medium' | 'high')
   - created_at (timestamp)

## Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page
- `/register` - Registration page

### Super Admin Routes
- `/superadmin` - Dashboard
- `/superadmin/landlords` - Manage landlords
- `/superadmin/settings` - System settings
- `/superadmin/whitelabel` - White label configuration

### Landlord Routes
- `/landlord` - Dashboard
- `/landlord/properties` - Properties list
- `/landlord/properties/add` - Add property
- `/landlord/tenants` - Tenants list
- `/landlord/tenants/add` - Add tenant
- `/landlord/payments` - Payments
- `/landlord/maintenance` - Maintenance requests

### Tenant Routes
- `/tenant` - Dashboard
- `/tenant/lease` - Lease agreement
- `/tenant/payments` - Payment history
- `/tenant/maintenance` - Maintenance requests

### Staff Routes
- `/staff` - Dashboard
- `/staff/tasks` - Assigned tasks
- `/staff/maintenance` - Maintenance work orders

## Demo Mode

The login page includes demo buttons that bypass authentication for wireframe testing. In production, these should be removed.

## Next Steps

1. **Connect Supabase**: Set up your Supabase project and update environment variables
2. **Database Setup**: Create the tables listed above using Supabase SQL editor
3. **Paystack Integration**: Configure Paystack for payment processing
4. **Implement CRUD Operations**: Connect the UI to Supabase using the API utilities
5. **Add Validation**: Implement form validation using react-hook-form + zod
6. **Testing**: Add unit and integration tests
7. **White Label**: Implement multi-tenant branding features

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes

- All modules use lazy loading for better performance
- Session management handles inactivity and cleanup automatically
- The architecture supports easy addition of new roles/modules
- Shared components ensure UI consistency across the app
