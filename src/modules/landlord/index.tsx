import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../shared/layouts/DashboardLayout';
import { LandlordDashboard } from './pages/Dashboard';
import { Properties } from './pages/Properties';
import { Tenants } from './pages/Tenants';
import { Payments } from './pages/Payments';
import { LayoutDashboard, Building2, Users, CreditCard, Wrench } from 'lucide-react';
import type { SidebarItem } from '../shared/components/Sidebar';

const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: 'Dashboard',
    path: '/landlord',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    label: 'Properties',
    path: '/landlord/properties',
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: 'Tenants',
    path: '/landlord/tenants',
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    label: 'Payments',
    path: '/landlord/payments',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: 'Maintenance',
    path: '/landlord/maintenance',
  },
];

export default function LandlordModule() {
  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Landlord Portal">
      <Routes>
        <Route index element={<LandlordDashboard />} />
        <Route path="properties" element={<Properties />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="payments" element={<Payments />} />
      </Routes>
    </DashboardLayout>
  );
}
