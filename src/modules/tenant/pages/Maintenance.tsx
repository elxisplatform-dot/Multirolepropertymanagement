import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Plus } from 'lucide-react';
import { config } from '../../../config/env';
import { formatDate } from '../../shared/utils/helpers';

export function TenantMaintenance() {
  const requests = [
    { id: 1, title: 'Leaking faucet', description: 'Kitchen sink is dripping', date: '2025-11-02', status: 'in_progress', priority: 'medium' },
    { id: 2, title: 'AC not cooling', description: 'Air conditioner not working properly', date: '2025-10-15', status: 'completed', priority: 'high' },
    { id: 3, title: 'Light bulb replacement', description: 'Living room light needs replacement', date: '2025-10-05', status: 'completed', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Maintenance Requests</h1>
          <p className="text-gray-600">Submit and track maintenance issues</p>
        </div>
        <Button
          style={{ backgroundColor: config.app.primaryColor }}
          className="text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Request
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-6 bg-white border-2 border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-gray-900">{request.title}</h3>
                  <Badge
                    variant="outline"
                    style={
                      request.status === 'completed'
                        ? { backgroundColor: `${config.app.primaryColor}20`, color: config.app.primaryColor }
                        : request.status === 'in_progress'
                        ? { backgroundColor: '#fef3c7', color: '#92400e' }
                        : { backgroundColor: '#fee2e2', color: '#991b1b' }
                    }
                  >
                    {request.status.replace('_', ' ')}
                  </Badge>
                  <Badge
                    variant="outline"
                    style={
                      request.priority === 'high'
                        ? { backgroundColor: '#fee2e2', color: '#991b1b' }
                        : request.priority === 'medium'
                        ? { backgroundColor: '#fef3c7', color: '#92400e' }
                        : { backgroundColor: '#f3f4f6', color: '#4b5563' }
                    }
                  >
                    {request.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                <p className="text-xs text-gray-500">Submitted: {formatDate(request.date)}</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
