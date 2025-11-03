import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../shared/layouts/DashboardLayout';
import { StaffDashboard } from './pages/Dashboard';
import { LayoutDashboard, ClipboardList, Wrench } from 'lucide-react';
import type { SidebarItem } from '../shared/components/Sidebar';

const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: 'Dashboard',
    path: '/staff',
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    label: 'My Tasks',
    path: '/staff/tasks',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: 'Maintenance',
    path: '/staff/maintenance',
  },
];

export default function StaffModule() {
  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Staff Portal">
      <Routes>
        <Route index element={<StaffDashboard />} />
      </Routes>
    </DashboardLayout>
  );
}
