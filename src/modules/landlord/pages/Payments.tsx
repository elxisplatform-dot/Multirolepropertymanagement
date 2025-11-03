import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { DollarSign } from 'lucide-react';
import { config } from '../../../config/env';
import { formatDate } from '../../shared/utils/helpers';

export function Payments() {
  const payments = [
    { id: 1, tenant: 'Sarah Johnson', property: 'Sunset Apartments', unit: '4B', amount: 1250, date: '2025-11-01', status: 'completed', reference: 'PAY-001' },
    { id: 2, tenant: 'Michael Chen', property: 'Downtown Plaza', unit: '2A', amount: 1100, date: '2025-11-01', status: 'completed', reference: 'PAY-002' },
    { id: 3, tenant: 'Emily Davis', property: 'Riverfront Complex', unit: '5C', amount: 950, date: '2025-11-03', status: 'pending', reference: 'PAY-003' },
    { id: 4, tenant: 'John Smith', property: 'Sunset Apartments', unit: '1A', amount: 1300, date: '2025-10-28', status: 'failed', reference: 'PAY-004' },
  ];

  const totalRevenue = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Payments</h1>
        <p className="text-gray-600">Track rent payments and revenue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-6 bg-white border-2 border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Revenue</span>
            <div 
              className="w-8 h-8 border rounded flex items-center justify-center"
              style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
            >
              <DollarSign className="w-4 h-4" style={{ color: config.app.primaryColor }} />
            </div>
          </div>
          <div className="text-2xl text-gray-900">₦{totalRevenue.toLocaleString()}</div>
        </Card>

        <Card className="p-6 bg-white border-2 border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Completed</div>
          <div className="text-2xl text-gray-900">
            {payments.filter(p => p.status === 'completed').length}
          </div>
        </Card>

        <Card className="p-6 bg-white border-2 border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Pending</div>
          <div className="text-2xl text-gray-900">
            {payments.filter(p => p.status === 'pending').length}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-white border-2 border-gray-200">
        <h3 className="text-gray-800 mb-4">Recent Payments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left text-sm text-gray-600 p-3">Tenant</th>
                <th className="text-left text-sm text-gray-600 p-3">Property</th>
                <th className="text-left text-sm text-gray-600 p-3">Amount</th>
                <th className="text-left text-sm text-gray-600 p-3">Date</th>
                <th className="text-left text-sm text-gray-600 p-3">Status</th>
                <th className="text-left text-sm text-gray-600 p-3">Reference</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900">{payment.tenant}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {payment.property} - {payment.unit}
                  </td>
                  <td className="p-3 text-sm text-gray-900">₦{payment.amount.toLocaleString()}</td>
                  <td className="p-3 text-sm text-gray-700">{formatDate(payment.date)}</td>
                  <td className="p-3">
                    <Badge
                      variant={payment.status === 'completed' ? 'default' : 'outline'}
                      style={
                        payment.status === 'completed'
                          ? { backgroundColor: config.app.primaryColor }
                          : payment.status === 'pending'
                          ? { backgroundColor: '#eab308', color: 'white' }
                          : { backgroundColor: '#ef4444', color: 'white' }
                      }
                    >
                      {payment.status}
                    </Badge>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{payment.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
