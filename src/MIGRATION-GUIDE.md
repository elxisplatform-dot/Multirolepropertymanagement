# Migration Guide: Old Structure → New Modular Architecture

## Overview

This guide helps you understand how the old wireframe components map to the new modular structure.

## Component Mapping

### Old Location → New Location

#### Authentication & Landing
```
/components/Login.tsx → /pages/Login.tsx (refactored)
/components/LandingPage.tsx → /pages/Landing.tsx (refactored)
```

#### Super Admin
```
/components/SuperAdminDashboard.tsx → /modules/superadmin/pages/Dashboard.tsx
```

#### Landlord
```
/components/LandlordDashboard.tsx → /modules/landlord/pages/Dashboard.tsx
/components/PropertiesList.tsx → /modules/landlord/pages/Properties.tsx
/components/AddProperty.tsx → (Integrated into Properties page)
/components/PropertyDetails.tsx → (Integrated into Properties page)
/components/TenantsList.tsx → /modules/landlord/pages/Tenants.tsx
/components/AddTenant.tsx → (Integrated into Tenants page)
/components/PaymentsList.tsx → /modules/landlord/pages/Payments.tsx
/components/MaintenanceList.tsx → /modules/landlord/pages/Maintenance.tsx (pending)
```

#### Tenant
```
/components/TenantDashboard.tsx → /modules/tenant/pages/Dashboard.tsx
(New) → /modules/tenant/pages/Lease.tsx
(New) → /modules/tenant/pages/Payments.tsx
(New) → /modules/tenant/pages/Maintenance.tsx
```

#### Shared Components
```
/components/WireframeLayout.tsx → /modules/shared/layouts/DashboardLayout.tsx (refactored)
(New) → /modules/shared/layouts/AuthLayout.tsx
(New) → /modules/shared/components/Navbar.tsx
(New) → /modules/shared/components/Sidebar.tsx
(New) → /modules/shared/components/Loader.tsx
```

#### UI Components (Unchanged)
```
/components/ui/* → /components/ui/* (No changes)
/components/figma/* → /components/figma/* (No changes)
```

## Navigation Pattern Changes

### Old Way (Props Drilling)
```tsx
// Old approach
function LandlordDashboard({ onNavigate }: Props) {
  return (
    <button onClick={() => onNavigate('properties-list')}>
      View Properties
    </button>
  );
}
```

### New Way (React Router)
```tsx
// New approach
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/constants';

function LandlordDashboard() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate(ROUTES.LANDLORD_PROPERTIES)}>
      View Properties
    </button>
  );
}
```

## Route Mapping

### Old Screen Names → New Routes

```
'landing'              → '/'
'login'                → '/login'
'superadmin-dashboard' → '/superadmin'
'landlord-dashboard'   → '/landlord'
'tenant-dashboard'     → '/tenant'
'properties-list'      → '/landlord/properties'
'add-property'         → '/landlord/properties/add'
'property-details'     → '/landlord/properties/:id'
'tenants-list'         → '/landlord/tenants'
'add-tenant'           → '/landlord/tenants/add'
'payments-list'        → '/landlord/payments'
'maintenance-list'     → '/landlord/maintenance'
```

## Data Flow Changes

### Old: Inline Data
```tsx
// Old approach - data in component
const properties = [
  { id: 1, name: 'Sunset Apartments', ... },
  // ...
];
```

### New: API Utilities
```tsx
// New approach - data from API
import { propertiesApi } from '../../shared/utils/api';
import { useState, useEffect } from 'react';

const [properties, setProperties] = useState([]);

useEffect(() => {
  propertiesApi.getAll(landlordId)
    .then(setProperties)
    .catch(console.error);
}, [landlordId]);
```

## Authentication Changes

### Old: No Auth
```tsx
// Old - just set user role
setUserRole('landlord');
onNavigate('landlord-dashboard');
```

### New: Full Auth System
```tsx
// New - real authentication
import { useAuth } from '../../shared/hooks/useAuth';

const { signIn } = useAuth();

await signIn(email, password);
// Auto-redirects to role-specific dashboard
```

## Layout Changes

### Old: Custom Layout Component
```tsx
// Old WireframeLayout
<WireframeLayout onNavigate={onNavigate} title="Dashboard" role="Landlord">
  {/* content */}
</WireframeLayout>
```

### New: DashboardLayout with Router
```tsx
// New module index
<DashboardLayout sidebarItems={sidebarItems} title="Landlord Portal">
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="properties" element={<Properties />} />
    {/* ... */}
  </Routes>
</DashboardLayout>
```

## Sidebar Configuration

### Old: Hardcoded in Layout
```tsx
// Old - sidebar items in layout component
const menuItems = [
  { icon: '🏠', label: 'Dashboard', screen: 'landlord-dashboard' },
  // ...
];
```

### New: Per-Module Configuration
```tsx
// New - sidebar in module index
const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: 'Dashboard',
    path: '/landlord',
  },
  // ...
];
```

## Styling Changes

### Old: Grayscale Colors
```tsx
// Old wireframe aesthetic
className="bg-gray-800 text-white border-2 border-gray-900"
```

### New: Primary Color System
```tsx
// New - using theme color
import { config } from '../../../config/env';

style={{ backgroundColor: config.app.primaryColor }}
// Or use CSS variable
className="bg-primary text-primary-foreground"
```

## Constants Usage

### Old: Magic Strings
```tsx
// Old
if (userRole === 'landlord') {
  onNavigate('landlord-dashboard');
}
```

### New: Type-Safe Constants
```tsx
// New
import { USER_ROLES, ROUTES } from '../../shared/utils/constants';

if (userRole === USER_ROLES.LANDLORD) {
  navigate(ROUTES.LANDLORD_DASHBOARD);
}
```

## File Organization

### Old Structure
```
/components
  ├── Login.tsx
  ├── LandingPage.tsx
  ├── LandlordDashboard.tsx
  ├── PropertiesList.tsx
  └── ... (all mixed together)
```

### New Structure
```
/modules
  ├── landlord/
  │   ├── pages/
  │   │   ├── Dashboard.tsx
  │   │   ├── Properties.tsx
  │   │   └── ...
  │   └── index.tsx
  └── shared/
      ├── components/
      ├── layouts/
      ├── hooks/
      └── utils/
```

## Import Path Changes

### Old Imports
```tsx
import { Button } from './ui/button';
import { LandlordDashboard } from './LandlordDashboard';
```

### New Imports
```tsx
// UI components
import { Button } from '../../../components/ui/button';

// Utilities
import { config } from '../../../config/env';
import { ROUTES } from '../../shared/utils/constants';
import { formatDate } from '../../shared/utils/helpers';

// Hooks
import { useAuth } from '../../shared/hooks/useAuth';
import { useRole } from '../../shared/hooks/useRole';

// Navigation
import { useNavigate } from 'react-router-dom';
```

## Common Migration Tasks

### 1. Converting a Page Component

**Before:**
```tsx
interface Props {
  onNavigate: (screen: string) => void;
}

export function PropertiesList({ onNavigate }: Props) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Properties" role="Landlord">
      <button onClick={() => onNavigate('add-property')}>Add</button>
    </WireframeLayout>
  );
}
```

**After:**
```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/constants';

export function Properties() {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <button onClick={() => navigate(ROUTES.LANDLORD_PROPERTIES_ADD)}>
        Add
      </button>
    </div>
  );
}

// Note: Layout is in module index, not in page
```

### 2. Adding Authentication

**Before:**
```tsx
// No auth check
```

**After:**
```tsx
import { useAuth } from '../../shared/hooks/useAuth';

export function SomePage() {
  const { user, userRole } = useAuth();
  
  // Component auto-protected by ProtectedRoute wrapper
  return <div>...</div>;
}
```

### 3. Fetching Data

**Before:**
```tsx
const properties = [
  { id: 1, name: 'Property 1' }
];
```

**After:**
```tsx
import { useState, useEffect } from 'react';
import { propertiesApi } from '../../shared/utils/api';

export function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    propertiesApi.getAll()
      .then(setProperties)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <Loader />;
  
  return <div>{/* render properties */}</div>;
}
```

## Breaking Changes

1. **No more `onNavigate` prop** - Use `useNavigate()` hook
2. **No more screen names** - Use route paths from `ROUTES` constant
3. **No more `WireframeLayout`** - Use `DashboardLayout` in module index
4. **No more `userRole` prop** - Use `useAuth()` or `useRole()` hook
5. **No switch statement routing** - React Router handles all routing

## Benefits of New Structure

✅ **Type Safety** - Routes and roles are constants, not strings
✅ **Code Splitting** - Each module loads independently
✅ **Scalability** - Easy to add new roles/features
✅ **Real URLs** - Bookmarkable, shareable links
✅ **Auth Built-in** - Security by default
✅ **Better DX** - Clear file organization
✅ **Maintainability** - Isolated, modular code

## Backward Compatibility

The old components in `/components` are preserved but unused. They can be:
- **Kept** as reference during development
- **Removed** once migration is verified
- **Archived** to a `_archive` folder

## Testing Migration

1. ✅ Test all routes load correctly
2. ✅ Test authentication flow
3. ✅ Test role-based access
4. ✅ Test navigation between pages
5. ✅ Test mobile responsiveness
6. ✅ Test form submissions (when connected to backend)

## Need Help?

- Check `QUICKSTART.md` for setup instructions
- Review `ARCHITECTURE.md` for system overview
- Look at existing module code for patterns
- Compare old and new file side-by-side
