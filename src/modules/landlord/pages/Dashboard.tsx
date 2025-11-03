import { Card } from '../../../components/ui/card';
import { Building2, TrendingUp, DollarSign, Wrench, ArrowUpRight, Plus, CreditCard, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/env';
import { ROUTES } from '../../shared/utils/constants';

export function LandlordDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your property overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Properties', value: '24', change: '+2.5% from last month', trend: 'up', icon: Building2 },
          { label: 'Occupancy Rate', value: '92%', change: '+1.2% from last month', trend: 'up', icon: TrendingUp },
          { label: 'Monthly Revenue', value: '₦48,250', change: '+6.1% from last month', trend: 'up', icon: DollarSign },
          { label: 'Pending Requests', value: '7', change: '+3 from yesterday', trend: 'up', icon: Wrench },
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
            <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <ArrowUpRight className="w-3 h-3" style={{ color: config.app.primaryColor }} />
              {stat.change}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Plus, label: 'Add New Property', desc: 'List a new rental property', route: ROUTES.LANDLORD_PROPERTIES_ADD },
            { icon: CreditCard, label: 'Record Payment', desc: 'Log rent payment received', route: ROUTES.LANDLORD_PAYMENTS },
            { icon: UserPlus, label: 'Add Tenant', desc: 'Register a new tenant', route: ROUTES.LANDLORD_TENANTS_ADD },
          ].map((action, i) => (
            <button
              key={i}
              onClick={() => navigate(action.route)}
              className="p-4 bg-white border-2 border-gray-200 rounded hover:border-gray-300 text-left transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 border rounded flex items-center justify-center"
                  style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
                >
                  <action.icon className="w-6 h-6" style={{ color: config.app.primaryColor }} />
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
        <Card className="p-6 bg-white border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Recent Activity</h3>
            <button className="text-xs text-gray-600 hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { icon: '✅', title: 'Payment received from Sarah Johnson', desc: 'Apartment 4B - ₦1,250', time: '2 hours ago', color: '#22c55e' },
              { icon: '🔧', title: 'New maintenance request', desc: 'Unit 2A - Leaking faucet', time: '4 hours ago', color: '#eab308' },
              { icon: '👤', title: 'New tenant application', desc: 'Michael Chen - Unit 5C', time: '6 hours ago', color: '#3b82f6' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center text-xs flex-shrink-0"
                  style={{ backgroundColor: `${activity.color}20`, color: activity.color }}
                >
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-800">{activity.title}</div>
                  <div className="text-xs text-gray-600">{activity.desc}</div>
                  <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Property Performance */}
        <Card className="p-6 bg-white border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">Top Performing Properties</h3>
            <button 
              onClick={() => navigate(ROUTES.LANDLORD_PROPERTIES)}
              className="text-xs text-gray-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Sunset Apartments', units: '24 units', revenue: '₦12,500', occupancy: '100%' },
              { name: 'Downtown Plaza', units: '18 units', revenue: '₦10,200', occupancy: '94%' },
              { name: 'Riverfront Complex', units: '30 units', revenue: '₦8,750', occupancy: '87%' },
            ].map((property, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-0">
                <div className="flex-1">
                  <div className="text-sm text-gray-800">{property.name}</div>
                  <div className="text-xs text-gray-600">{property.units} • {property.occupancy} occupied</div>
                </div>
                <div className="text-sm text-gray-900">{property.revenue}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
