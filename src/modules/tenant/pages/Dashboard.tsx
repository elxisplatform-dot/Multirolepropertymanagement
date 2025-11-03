import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Home, CreditCard, Wrench, FileText, DollarSign, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/env';
import { ROUTES } from '../../shared/utils/constants';

export function TenantDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Tenant Dashboard</h1>
        <p className="text-gray-600">Welcome to your tenant portal</p>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Property', value: 'Sunset Apartments', icon: Home },
          { label: 'Unit', value: '4B', icon: Home },
          { label: 'Monthly Rent', value: '₦1,250', icon: DollarSign },
          { label: 'Lease Expires', value: 'Dec 31, 2025', icon: Calendar },
        ].map((info, i) => (
          <Card key={i} className="p-6 bg-white border-2 border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{info.label}</span>
              <info.icon className="w-5 h-5" style={{ color: config.app.primaryColor }} />
            </div>
            <div className="text-lg text-gray-900">{info.value}</div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: CreditCard, label: 'Pay Rent', desc: 'Make a payment online', route: ROUTES.TENANT_PAYMENTS },
            { icon: Wrench, label: 'Maintenance Request', desc: 'Report an issue', route: ROUTES.TENANT_MAINTENANCE },
            { icon: FileText, label: 'View Lease', desc: 'Access your lease agreement', route: ROUTES.TENANT_LEASE },
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
        {/* Payment History */}
        <Card className="p-6 bg-white border-2 border-gray-200">
          <h3 className="text-gray-800 mb-4">Recent Payments</h3>
          <div className="space-y-3">
            {[
              { date: 'Nov 1, 2025', amount: '₦1,250', status: 'Paid' },
              { date: 'Oct 1, 2025', amount: '₦1,250', status: 'Paid' },
              { date: 'Sep 1, 2025', amount: '₦1,250', status: 'Paid' },
            ].map((payment, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-0">
                <div>
                  <div className="text-sm text-gray-800">{payment.date}</div>
                  <div className="text-xs text-gray-600">{payment.amount}</div>
                </div>
                <span 
                  className="text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: `${config.app.primaryColor}20`, color: config.app.primaryColor }}
                >
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => navigate(ROUTES.TENANT_PAYMENTS)}
          >
            View All Payments
          </Button>
        </Card>

        {/* Maintenance Requests */}
        <Card className="p-6 bg-white border-2 border-gray-200">
          <h3 className="text-gray-800 mb-4">Maintenance Requests</h3>
          <div className="space-y-3">
            {[
              { title: 'Leaking faucet', date: 'Nov 2, 2025', status: 'In Progress' },
              { title: 'AC not cooling', date: 'Oct 15, 2025', status: 'Completed' },
            ].map((request, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-0">
                <div>
                  <div className="text-sm text-gray-800">{request.title}</div>
                  <div className="text-xs text-gray-600">{request.date}</div>
                </div>
                <span 
                  className="text-xs px-2 py-1 rounded"
                  style={{ 
                    backgroundColor: request.status === 'Completed' ? `${config.app.primaryColor}20` : '#fef3c7',
                    color: request.status === 'Completed' ? config.app.primaryColor : '#92400e'
                  }}
                >
                  {request.status}
                </span>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => navigate(ROUTES.TENANT_MAINTENANCE)}
          >
            View All Requests
          </Button>
        </Card>
      </div>
    </div>
  );
}
