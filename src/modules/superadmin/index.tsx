import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../shared/layouts/DashboardLayout';
import { SuperAdminDashboard } from './pages/Dashboard';
import { Building2, Users, Settings, Palette } from 'lucide-react';
import type { SidebarItem } from '../shared/components/Sidebar';

const sidebarItems: SidebarItem[] = [
  {
    icon: <Building2 className="w-5 h-5" />,
    label: 'Dashboard',
    path: '/superadmin',
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Landlords',
    path: '/superadmin/landlords',
  },
  {
    icon: <Settings className="w-5 h-5" />,
    label: 'System Settings',
    path: '/superadmin/settings',
  },
  {
    icon: <Palette className="w-5 h-5" />,
    label: 'White Label',
    path: '/superadmin/whitelabel',
  },
];

export default function SuperAdminModule() {
  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Super Admin">
      <Routes>
        <Route index element={<SuperAdminDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </DashboardLayout>
  );
}
