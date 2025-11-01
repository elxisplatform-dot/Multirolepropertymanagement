import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface LandlordDashboardProps {
  onNavigate: (screen: string) => void;
}

export function LandlordDashboard({ onNavigate }: LandlordDashboardProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Dashboard" role="Landlord">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Properties', value: '24', change: '+2.5% from last month', trend: 'up', icon: '🏢' },
          { label: 'Occupancy Rate', value: '92%', change: '+1.2% from last month', trend: 'up', icon: '📊' },
          { label: 'Monthly Revenue', value: '$48,250', change: '+6.1% from last month', trend: 'up', icon: '💰' },
          { label: 'Pending Requests', value: '7', change: '+3 from yesterday', trend: 'down', icon: '🔧' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300">
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs text-gray-600">{stat.label}</div>
              <div className="w-8 h-8 bg-gray-100 border border-gray-400 rounded flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              {stat.trend === 'up' ? (
                <ArrowUpRight className="w-3 h-3 text-gray-700" />
              ) : (
                <ArrowDownRight className="w-3 h-3 text-gray-700" />
              )}
              {stat.change}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '🏠', label: 'Add New Property', desc: 'List a new rental property', action: 'add-property' },
            { icon: '💳', label: 'Record Payment', desc: 'Log rent payment received', action: 'payments-list' },
            { icon: '👤', label: 'Add Tenant', desc: 'Register a new tenant', action: 'add-tenant' },
          ].map((action, i) => (
            <button
              key={i}
              onClick={() => onNavigate(action.action)}
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
        {/* Recent Activity */}
        <Card className="p-4 bg-white border-2 border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Recent Activity</h3>
            <button className="text-xs text-gray-600 underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { icon: '✅', title: 'Payment received from Sarah Johnson', desc: 'Apartment 4B - $1,250', time: '2 hours ago', color: 'bg-green-100 border-green-400' },
              { icon: '🔧', title: 'New maintenance request', desc: 'Unit 2A - Leaking faucet', time: '4 hours ago', color: 'bg-yellow-100 border-yellow-400' },
              { icon: '👤', title: 'New tenant application', desc: 'Michael Chen - Unit 5C', time: '6 hours ago', color: 'bg-blue-100 border-blue-400' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-3 pb-3 border-b border-gray-300 last:border-0">
                <div className={`w-10 h-10 ${activity.color} border-2 rounded flex items-center justify-center flex-shrink-0`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-800">{activity.title}</div>
                  <div className="text-xs text-gray-600">{activity.desc} • {activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="p-4 bg-white border-2 border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Upcoming Tasks</h3>
            <button className="text-xs text-gray-600 underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Lease renewal reminder', desc: 'Unit 1A expires in 5 days', priority: 'high' },
              { title: 'Property inspection', desc: 'Sunset Apartments - Tomorrow', priority: 'medium' },
              { title: 'Rent collection due', desc: '5 tenants - Dec 01', priority: 'medium' },
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-300 last:border-0">
                <input type="checkbox" className="mt-1 border-2 border-gray-400" />
                <div className="flex-1">
                  <div className="text-sm text-gray-800">{task.title}</div>
                  <div className="text-xs text-gray-600">{task.desc}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded border ${
                  task.priority === 'high' 
                    ? 'bg-gray-700 text-white border-gray-900' 
                    : 'bg-gray-300 text-gray-700 border-gray-500'
                }`}>
                  {task.priority}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Properties Overview */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800">Properties Overview</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border-2 border-gray-800 bg-gray-800 text-white rounded">All</button>
            <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Document</button>
            <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Vacant</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Sunset Apartments', location: 'Downtown District', occupied: '10/12 units occupied', rate: '83%' },
            { name: 'Garden View Complex', location: 'Riverside Area', occupied: '8/10 units occupied', rate: '80%' },
            { name: 'Historic Townhouses', location: 'Old Town', occupied: '6/6 units occupied', rate: '100%' },
          ].map((property, i) => (
            <Card key={i} className="overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-500 cursor-pointer transition-colors">
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-200 border-b-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs text-gray-600">PROPERTY IMAGE</span>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h4 className="text-gray-800 mb-1">{property.name}</h4>
                <p className="text-xs text-gray-600 mb-3">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">{property.occupied}</span>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    property.rate === '100%' 
                      ? 'bg-gray-700 text-white border-gray-900' 
                      : 'bg-gray-200 text-gray-700 border-gray-400'
                  }`}>
                    {property.rate}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </WireframeLayout>
  );
}
