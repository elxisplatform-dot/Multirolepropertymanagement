import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Search, Filter, Download } from 'lucide-react';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface PaymentsListProps {
  onNavigate: (screen: string) => void;
}

export function PaymentsList({ onNavigate }: PaymentsListProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Payments">
      {/* Filters and Search */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Search payments..." 
            className="pl-10 border-2 border-gray-400 bg-white"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-400 rounded bg-white hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-400 rounded bg-white hover:bg-gray-50">
          <Download className="w-4 h-4" />
          <span className="text-sm">Export</span>
        </button>
        
        {/* Record Payment Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700">
              + Record Payment
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-white border-2 border-gray-400">
            <DialogHeader>
              <DialogTitle className="text-gray-800">Record Payment</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Tenant*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select tenant...</option>
                  <option>John Smith - Unit 1A</option>
                  <option>Sarah Johnson - Unit 2A</option>
                  <option>Mike Chen - Unit 3B</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Amount*</Label>
                <Input 
                  type="number"
                  placeholder="1250.00"
                  className="border-2 border-gray-400 bg-gray-50"
                />
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Payment Date*</Label>
                <Input 
                  type="date"
                  className="border-2 border-gray-400 bg-gray-50"
                />
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Payment Method*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select method...</option>
                  <option>Cash</option>
                  <option>Check</option>
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Notes</Label>
                <Input 
                  placeholder="Optional notes..."
                  className="border-2 border-gray-400 bg-gray-50"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" className="flex-1 border-2 border-gray-400">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-gray-800 text-white border-2 border-gray-900">
                  Record Payment
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Collected', value: '$48,250', period: 'This Month' },
          { label: 'Expected Revenue', value: '$52,800', period: 'This Month' },
          { label: 'Outstanding', value: '$4,550', period: 'Overdue' },
          { label: 'Payments Processed', value: '38', period: 'This Month' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300">
            <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
            <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.period}</div>
          </Card>
        ))}
      </div>

      {/* Payments Table */}
      <Card className="p-4 bg-white border-2 border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">Recent Payments</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border-2 border-gray-800 bg-gray-800 text-white rounded">All</button>
            <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Paid</button>
            <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Pending</button>
            <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Overdue</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-3 px-4 text-xs text-gray-600">Date</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Tenant</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Property</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Unit</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Amount</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Method</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-xs text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: 'Nov 01, 2025', tenant: 'Sarah Johnson', property: 'Sunset Apartments', unit: '4B', amount: '$1,250', method: 'Bank Transfer', status: 'Paid' },
              { date: 'Nov 01, 2025', tenant: 'John Smith', property: 'Sunset Apartments', unit: '1A', amount: '$1,200', method: 'Check', status: 'Paid' },
              { date: 'Nov 01, 2025', tenant: 'Mike Chen', property: 'Garden View', unit: '3B', amount: '$1,100', method: 'Cash', status: 'Paid' },
              { date: 'Oct 30, 2025', tenant: 'Emma Wilson', property: 'Historic Town', unit: '2C', amount: '$1,350', method: 'Credit Card', status: 'Pending' },
              { date: 'Oct 25, 2025', tenant: 'David Brown', property: 'Garden View', unit: '1A', amount: '$1,000', method: 'Bank Transfer', status: 'Overdue' },
            ].map((payment, i) => (
              <tr key={i} className="border-b border-gray-300">
                <td className="py-3 px-4 text-sm text-gray-800">{payment.date}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{payment.tenant}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{payment.property}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{payment.unit}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{payment.amount}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{payment.method}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    payment.status === 'Paid' 
                      ? 'bg-gray-700 text-white border-gray-900' 
                      : payment.status === 'Pending'
                      ? 'bg-yellow-100 text-gray-800 border-yellow-400'
                      : 'bg-red-100 text-gray-800 border-red-400'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">Receipt</button>
                    <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </WireframeLayout>
  );
}
