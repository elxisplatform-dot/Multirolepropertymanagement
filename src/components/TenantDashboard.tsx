import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';

interface TenantDashboardProps {
  onNavigate: (screen: string) => void;
}

export function TenantDashboard({ onNavigate }: TenantDashboardProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Tenant Dashboard" role="Tenant">
      {/* Tenant Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Monthly Rent', value: '$1,250', icon: '💳' },
          { label: 'Lease Expiry', value: 'Mar 15, 2026', icon: '📅' },
          { label: 'Outstanding Balance', value: '$0', icon: '💰' },
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

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '💳', label: 'Pay Rent', desc: 'Make a payment' },
            { icon: '🔧', label: 'Request Maintenance', desc: 'Report an issue' },
            { icon: '💬', label: 'Message Landlord', desc: 'Send a message' },
          ].map((action, i) => (
            <button
              key={i}
              className="p-4 bg-white border-2 border-gray-400 rounded hover:bg-gray-50 text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 border-2 border-gray-500 rounded flex items-center justify-center text-xl">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-800">{action.label}</div>
                  <div className="text-xs text-gray-600">{action.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Unit */}
        <Card className="p-4 bg-white border-2 border-gray-300">
          <h3 className="text-gray-800 mb-4">My Unit</h3>
          
          {/* Property Image */}
          <div className="h-48 bg-gray-200 border-2 border-gray-400 rounded mb-4 flex items-center justify-center">
            <span className="text-xs text-gray-600">UNIT IMAGE</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-gray-600">Property</span>
              <span className="text-sm text-gray-800">Sunset Apartments</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-600">Unit</span>
              <span className="text-sm text-gray-800">Apartment 4B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-600">Address</span>
              <span className="text-sm text-gray-800">123 Main St, Unit 4B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-600">Landlord</span>
              <span className="text-sm text-gray-800">John Manager</span>
            </div>
          </div>
        </Card>

        {/* Payment History */}
        <Card className="p-4 bg-white border-2 border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Payment History</h3>
            <button className="text-xs text-gray-600 underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { date: 'Nov 01, 2025', amount: '$1,250', status: 'Paid' },
              { date: 'Oct 01, 2025', amount: '$1,250', status: 'Paid' },
              { date: 'Sep 01, 2025', amount: '$1,250', status: 'Paid' },
              { date: 'Aug 01, 2025', amount: '$1,250', status: 'Paid' },
            ].map((payment, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-300 last:border-0">
                <div>
                  <div className="text-sm text-gray-800">{payment.date}</div>
                  <div className="text-xs text-gray-600">{payment.amount}</div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-700 text-white border border-gray-900 rounded">
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Maintenance Requests */}
      <Card className="p-4 bg-white border-2 border-gray-300 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">My Maintenance Requests</h3>
          <button onClick={() => onNavigate('maintenance-list')} className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded text-sm">
            + New Request
          </button>
        </div>
        
        <div className="space-y-3">
          {[
            { title: 'Leaking faucet in kitchen', date: 'Oct 28, 2025', status: 'In Progress', priority: 'Medium' },
            { title: 'AC not cooling properly', date: 'Oct 15, 2025', status: 'Completed', priority: 'High' },
            { title: 'Broken window latch', date: 'Oct 02, 2025', status: 'Completed', priority: 'Low' },
          ].map((request, i) => (
            <div key={i} className="flex items-center justify-between p-3 border-2 border-gray-300 rounded">
              <div className="flex-1">
                <div className="text-sm text-gray-800 mb-1">{request.title}</div>
                <div className="text-xs text-gray-600">{request.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded border ${
                  request.status === 'Completed' 
                    ? 'bg-gray-700 text-white border-gray-900' 
                    : 'bg-yellow-100 text-gray-800 border-yellow-400'
                }`}>
                  {request.status}
                </span>
                <span className={`text-xs px-2 py-1 rounded border ${
                  request.priority === 'High' 
                    ? 'bg-gray-800 text-white border-gray-900' 
                    : 'bg-gray-200 text-gray-700 border-gray-400'
                }`}>
                  {request.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </WireframeLayout>
  );
}
