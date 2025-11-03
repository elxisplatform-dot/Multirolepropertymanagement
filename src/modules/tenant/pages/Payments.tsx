import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { CreditCard } from 'lucide-react';
import { config } from '../../../config/env';
import { formatDate } from '../../shared/utils/helpers';

export function TenantPayments() {
  const payments = [
    { id: 1, amount: 1250, date: '2025-11-01', status: 'completed', reference: 'PAY-T001', method: 'Card' },
    { id: 2, amount: 1250, date: '2025-10-01', status: 'completed', reference: 'PAY-T002', method: 'Bank Transfer' },
    { id: 3, amount: 1250, date: '2025-09-01', status: 'completed', reference: 'PAY-T003', method: 'Card' },
    { id: 4, amount: 1250, date: '2025-12-01', status: 'pending', reference: 'PAY-T004', method: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Payments</h1>
          <p className="text-gray-600">Manage your rent payments</p>
        </div>
        <Button
          style={{ backgroundColor: config.app.primaryColor }}
          className="text-white"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Pay Rent
        </Button>
      </div>

      <Card className="p-6 bg-white border-2 border-gray-200">
        <h3 className="text-gray-800 mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left text-sm text-gray-600 p-3">Date</th>
                <th className="text-left text-sm text-gray-600 p-3">Amount</th>
                <th className="text-left text-sm text-gray-600 p-3">Method</th>
                <th className="text-left text-sm text-gray-600 p-3">Reference</th>
                <th className="text-left text-sm text-gray-600 p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">{formatDate(payment.date)}</td>
                  <td className="p-3 text-sm text-gray-900">₦{payment.amount.toLocaleString()}</td>
                  <td className="p-3 text-sm text-gray-700">{payment.method}</td>
                  <td className="p-3 text-sm text-gray-600">{payment.reference}</td>
                  <td className="p-3">
                    <Badge
                      variant={payment.status === 'completed' ? 'default' : 'outline'}
                      style={
                        payment.status === 'completed'
                          ? { backgroundColor: config.app.primaryColor }
                          : { backgroundColor: '#eab308', color: 'white' }
                      }
                    >
                      {payment.status}
                    </Badge>
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
