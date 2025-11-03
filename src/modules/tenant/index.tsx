import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../shared/layouts/DashboardLayout';
import { TenantDashboard } from './pages/Dashboard';
import { TenantPayments } from './pages/Payments';
import { TenantMaintenance } from './pages/Maintenance';
import { TenantLease } from './pages/Lease';
import { LayoutDashboard, FileText, Wrench, CreditCard } from 'lucide-react';
import type { SidebarItem } from '../shared/components/Sidebar';

const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: 'Dashboard',
    path: '/tenant',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'My Lease',
    path: '/tenant/lease',
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    label: 'Payments',
    path: '/tenant/payments',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: 'Maintenance',
    path: '/tenant/maintenance',
  },
];

export default function TenantModule() {
  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Tenant Portal">
      <Routes>
        <Route index element={<TenantDashboard />} />
        <Route path="lease" element={<TenantLease />} />
        <Route path="payments" element={<TenantPayments />} />
        <Route path="maintenance" element={<TenantMaintenance />} />
      </Routes>
    </DashboardLayout>
  );
}
