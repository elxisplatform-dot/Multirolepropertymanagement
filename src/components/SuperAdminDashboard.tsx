import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';

interface SuperAdminDashboardProps {
  onNavigate: (screen: string) => void;
}

export function SuperAdminDashboard({ onNavigate }: SuperAdminDashboardProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Super Admin Dashboard" role="Super Admin">
      {/* System Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Landlords', value: '156', icon: '👥' },
          { label: 'Total Properties', value: '1,248', icon: '🏢' },
          { label: 'Active Tenants', value: '3,842', icon: '👤' },
          { label: 'System Revenue', value: '$124,500', icon: '💰' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300">
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs text-gray-600">{stat.label}</div>
              <div className="w-8 h-8 bg-gray-100 border border-gray-400 rounded flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl text-gray-900">{stat.value}</div>
          </Card>
        ))}
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-4 bg-white border-2 border-gray-300">
          <h3 className="text-gray-800 mb-4">Recent Landlord Activity</h3>
          <div className="space-y-3">
            {[
              { name: 'John Manager', action: 'Added new property', time: '10 min ago' },
              { name: 'Sarah Property Co.', action: 'Updated tenant info', time: '1 hour ago' },
              { name: 'Mike Landlord', action: 'Recorded payment', time: '2 hours ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-300 last:border-0">
                <div className="w-10 h-10 bg-gray-300 border-2 border-gray-500 rounded-full flex items-center justify-center text-xs">
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

        <Card className="p-4 bg-white border-2 border-gray-300">
          <h3 className="text-gray-800 mb-4">System Health</h3>
          <div className="space-y-3">
            {[
              { metric: 'Server Status', status: 'Operational', color: 'bg-gray-700' },
              { metric: 'Database', status: 'Healthy', color: 'bg-gray-600' },
              { metric: 'Payment Gateway', status: 'Connected', color: 'bg-gray-700' },
            ].map((health, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-300 last:border-0">
                <span className="text-sm text-gray-700">{health.metric}</span>
                <span className={`text-xs px-3 py-1 ${health.color} text-white rounded border-2 border-gray-900`}>
                  {health.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Landlord Management Table */}
      <Card className="p-4 bg-white border-2 border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">Landlord Accounts</h3>
          <button className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded text-sm">
            + Add Landlord
          </button>
        </div>
        
        <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-3 px-4 text-xs text-gray-600">Name</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Email</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Properties</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'John Manager', email: 'john@example.com', properties: '24', status: 'Active' },
              { name: 'Sarah Property Co.', email: 'sarah@propco.com', properties: '18', status: 'Active' },
              { name: 'Mike Landlord', email: 'mike@rentals.com', properties: '12', status: 'Active' },
              { name: 'Emma Realty', email: 'emma@realty.com', properties: '8', status: 'Inactive' },
            ].map((landlord, i) => (
              <tr key={i} className="border-b border-gray-300">
                <td className="py-3 px-4 text-sm text-gray-800">{landlord.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{landlord.email}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{landlord.properties}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    landlord.status === 'Active' 
                      ? 'bg-gray-700 text-white border-gray-900' 
                      : 'bg-gray-300 text-gray-700 border-gray-500'
                  }`}>
                    {landlord.status}
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
