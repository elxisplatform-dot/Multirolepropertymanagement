# PropertyFlow - Quick Start Guide

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)
- A Paystack account (for payment processing)

### 2. Clone and Install

```bash
# Install dependencies
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the database to be provisioned

#### Run Database Setup
1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy the contents of `supabase-setup.sql`
4. Paste and run the SQL script
5. Your database tables and policies are now created!

#### Get Your API Keys
1. In Supabase dashboard, go to **Settings > API**
2. Copy your:
   - Project URL
   - Anon/Public key

### 4. Set Up Paystack

1. Create account at [paystack.com](https://paystack.com)
2. Go to **Settings > API Keys & Webhooks**
3. Copy your **Public Key** (use test key for development)

### 5. Configure Environment

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your-key-here
```

### 6. Run the App

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎯 Demo Mode (No Backend Required)

The app includes **demo login buttons** that work without Supabase:

1. Go to `/login`
2. Click one of the "Demo Login As" buttons:
   - **Super Admin** - View system overview
   - **Landlord** - Manage properties and tenants
   - **Tenant** - View lease and make payments
   - **Staff** - Handle maintenance tasks

This lets you test the UI without setting up the backend!

## 🔐 Real Authentication Flow

### Register a New User

1. Go to `/register`
2. Fill in:
   - Email
   - Password (min 6 characters)
   - Account type (Landlord/Tenant/Staff)
3. Click "Create Account"
4. Check your email for verification link
5. Click the link to verify
6. Go to `/login` and sign in

### Create a Super Admin

After registering your first user:

1. Go to Supabase dashboard
2. Go to **Table Editor > profiles**
3. Find your user row
4. Change `role` from `landlord` to `superadmin`
5. Log out and log back in
6. You now have super admin access!

## 📁 Project Structure Overview

```
src/
├── modules/              # Role-based feature modules
│   ├── superadmin/      # Super admin dashboard & features
│   ├── landlord/        # Landlord portal
│   ├── tenant/          # Tenant portal
│   ├── staff/           # Staff portal
│   └── shared/          # Shared components & utilities
│
├── pages/               # Standalone pages (landing, login, etc.)
├── router/              # Route configuration
├── context/             # Global state (auth, theme)
└── config/              # App configuration
```

## 🎨 Customizing the Brand Color

The primary color is **#5d866c** (green). To change it:

1. **Update config**: Edit `/config/env.ts`
   ```typescript
   primaryColor: '#your-color',
   ```

2. **Update CSS**: Edit `/styles/globals.css`
   ```css
   --primary: #your-color;
   ```

## 📱 Key Features by Role

### Super Admin
- View all landlords, properties, tenants
- Monitor system health
- Manage user accounts
- System-wide analytics

### Landlord
- Manage properties
- Add/edit tenants
- Track rent payments
- Handle maintenance requests
- View financial reports

### Tenant
- View lease agreement
- Pay rent online
- Submit maintenance requests
- View payment history

### Staff
- View assigned tasks
- Update maintenance status
- Track work orders

## 🔧 Common Tasks

### Add a New Property (as Landlord)

1. Log in as landlord
2. Go to **Properties**
3. Click **"Add Property"**
4. Fill in property details
5. Click **"Save"**

### Submit Maintenance Request (as Tenant)

1. Log in as tenant
2. Go to **Maintenance**
3. Click **"New Request"**
4. Describe the issue
5. Select priority
6. Submit

### Process Payment (Integration)

Payments use Paystack. To integrate:

```typescript
import { initializePayment } from './config/paystack';

initializePayment({
  email: tenant.email,
  amount: rent * 100, // in kobo
  reference: generateReference(),
  onSuccess: (ref) => {
    // Update payment status in database
  },
  onClose: () => {
    // Handle payment cancellation
  },
});
```

## 🐛 Troubleshooting

### "Failed to fetch" on login
- Check your `.env` file has correct Supabase credentials
- Make sure Supabase project is active
- Check browser console for detailed errors

### "Email not confirmed"
- Check your spam folder for verification email
- Or use demo login buttons for testing

### Routes not working
- Make sure you're running the dev server (`npm run dev`)
- Clear browser cache and refresh

### Database errors
- Verify you ran the `supabase-setup.sql` script
- Check Row Level Security policies are enabled
- Verify your user has correct role in profiles table

## 📚 Next Steps

1. **Read** `ARCHITECTURE.md` for detailed system overview
2. **Customize** the UI to match your brand
3. **Implement** real CRUD operations with Supabase
4. **Add** email notifications for events
5. **Deploy** to Vercel/Netlify

## 🤝 Need Help?

- Check `ARCHITECTURE.md` for detailed documentation
- Review `supabase-setup.sql` for database schema
- Inspect existing module code for patterns
- Use the demo mode to understand features

Happy building! 🏗️
