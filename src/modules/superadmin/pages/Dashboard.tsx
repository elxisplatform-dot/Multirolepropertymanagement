import { Card } from '../../../components/ui/card';
import { Users, Building2, UserCheck, DollarSign } from 'lucide-react';
import { config } from '../../../config/env';

export function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Super Admin Dashboard</h1>
        <p className="text-gray-600">Monitor system-wide activity and manage accounts</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Landlords', value: '156', icon: Users },
          { label: 'Total Properties', value: '1,248', icon: Building2 },
          { label: 'Active Tenants', value: '3,842', icon: UserCheck },
          { label: 'System Revenue', value: '₦124,500', icon: DollarSign },
        ].map((stat, i) => (
          <Card key={i} className="p-6 bg-white border-2 border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div 
                className="w-10 h-10 border rounded flex items-center justify-center"
                style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
              >
                <stat.icon className="w-5 h-5" style={{ color: config.app.primaryColor }} />
              </div>
            </div>
            <div className="text-2xl text-gray-900">{stat.value}</div>
          </Card>
        ))}
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white border-2 border-gray-200">
          <h3 className="text-gray-800 mb-4">Recent Landlord Activity</h3>
          <div className="space-y-3">
            {[
              { name: 'John Manager', action: 'Added new property', time: '10 min ago' },
              { name: 'Sarah Property Co.', action: 'Updated tenant info', time: '1 hour ago' },
              { name: 'Mike Landlord', action: 'Recorded payment', time: '2 hours ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-200 last:border-0">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm text-white"
                  style={{ backgroundColor: config.app.primaryColor }}
                >
                  {activity.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-800">{activity.name}</div>
                  <div className="text-xs text-gray-600">{activity.action} • {activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white border-2 border-gray-200">
          <h3 className="text-gray-800 mb-4">System Health</h3>
          <div className="space-y-3">
            {[
              { metric: 'Server Status', status: 'Operational', color: config.app.primaryColor },
              { metric: 'Database', status: 'Healthy', color: config.app.primaryColor },
              { metric: 'Payment Gateway', status: 'Connected', color: config.app.primaryColor },
            ].map((health, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-0">
                <span className="text-sm text-gray-700">{health.metric}</span>
                <span 
                  className="text-xs px-3 py-1 text-white rounded border"
                  style={{ backgroundColor: health.color, borderColor: health.color }}
                >
                  {health.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Landlord Management Table */}
      <Card className="p-6 bg-white border-2 border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">Landlord Accounts</h3>
          <button 
            className="px-4 py-2 text-white border rounded text-sm hover:opacity-90"
            style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
          >
            + Add Landlord
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left text-xs text-gray-600 p-3">Landlord</th>
                <th className="text-left text-xs text-gray-600 p-3">Properties</th>
                <th className="text-left text-xs text-gray-600 p-3">Tenants</th>
                <th className="text-left text-xs text-gray-600 p-3">Status</th>
                <th className="text-left text-xs text-gray-600 p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'John Manager', email: 'john@example.com', properties: 12, tenants: 34, status: 'Active' },
                { name: 'Sarah Property Co.', email: 'sarah@properties.com', properties: 8, tenants: 22, status: 'Active' },
                { name: 'Mike Landlord', email: 'mike@landlord.com', properties: 5, tenants: 15, status: 'Active' },
              ].map((landlord, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="text-sm text-gray-800">{landlord.name}</div>
                    <div className="text-xs text-gray-500">{landlord.email}</div>
                  </td>
                  <td className="p-3 text-sm text-gray-700">{landlord.properties}</td>
                  <td className="p-3 text-sm text-gray-700">{landlord.tenants}</td>
                  <td className="p-3">
                    <span 
                      className="text-xs px-2 py-1 rounded border"
                      style={{ backgroundColor: `${config.app.primaryColor}20`, color: config.app.primaryColor, borderColor: config.app.primaryColor }}
                    >
                      {landlord.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-xs text-gray-600 hover:underline mr-3">View</button>
                    <button className="text-xs text-gray-600 hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
