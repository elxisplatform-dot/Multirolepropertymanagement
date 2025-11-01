import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';

interface TenantsListProps {
  onNavigate: (screen: string) => void;
}

export function TenantsList({ onNavigate }: TenantsListProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Tenants">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Search tenants..." 
            className="pl-10 border-2 border-gray-400 bg-white"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-400 rounded bg-white hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>
        <button 
          onClick={() => onNavigate('add-tenant')}
          className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700"
        >
          + Add Tenant
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Tenants', value: '42' },
          { label: 'Active Leases', value: '38' },
          { label: 'Expiring Soon', value: '5' },
          { label: 'Payment Issues', value: '2' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300">
            <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
            <div className="text-2xl text-gray-900">{stat.value}</div>
          </Card>
        ))}
      </div>

      {/* Tenants Table */}
      <Card className="p-4 bg-white border-2 border-gray-300">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-3 px-4 text-xs text-gray-600">Tenant</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Property</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Unit</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Rent</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Lease End</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'John Smith', email: 'john@email.com', property: 'Sunset Apartments', unit: '1A', rent: '$1,200', leaseEnd: 'Mar 15, 2026', status: 'Active' },
              { name: 'Sarah Johnson', email: 'sarah@email.com', property: 'Sunset Apartments', unit: '2A', rent: '$950', leaseEnd: 'Jun 30, 2026', status: 'Active' },
              { name: 'Mike Chen', email: 'mike@email.com', property: 'Garden View', unit: '3B', rent: '$1,100', leaseEnd: 'Dec 31, 2025', status: 'Expiring' },
              { name: 'Emma Wilson', email: 'emma@email.com', property: 'Historic Town', unit: '2C', rent: '$1,350', leaseEnd: 'Sep 01, 2026', status: 'Active' },
              { name: 'David Brown', email: 'david@email.com', property: 'Garden View', unit: '1A', rent: '$1,000', leaseEnd: 'Apr 20, 2026', status: 'Late Payment' },
            ].map((tenant, i) => (
              <tr key={i} className="border-b border-gray-300">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 border-2 border-gray-500 rounded-full flex items-center justify-center text-xs">
                      {tenant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm text-gray-800">{tenant.name}</div>
                      <div className="text-xs text-gray-600">{tenant.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-800">{tenant.property}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{tenant.unit}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{tenant.rent}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{tenant.leaseEnd}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    tenant.status === 'Active' 
                      ? 'bg-gray-700 text-white border-gray-900' 
                      : tenant.status === 'Expiring'
                      ? 'bg-yellow-100 text-gray-800 border-yellow-400'
                      : 'bg-red-100 text-gray-800 border-red-400'
                  }`}>
                    {tenant.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">Edit</button>
                    <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Card>
    </WireframeLayout>
  );
}
