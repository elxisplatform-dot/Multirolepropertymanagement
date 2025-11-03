import { Card } from '../../../components/ui/card';
import { ClipboardList, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { config } from '../../../config/env';

export function StaffDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Staff Dashboard</h1>
        <p className="text-gray-600">Manage assigned tasks and maintenance work</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Assigned Tasks', value: '12', icon: ClipboardList },
          { label: 'Completed Today', value: '5', icon: CheckCircle },
          { label: 'In Progress', value: '4', icon: Clock },
          { label: 'Urgent', value: '3', icon: AlertCircle },
        ].map((stat, i) => (
          <Card key={i} className="p-6 bg-white border-2 border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{stat.label}</span>
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

      {/* Today's Tasks */}
      <Card className="p-6 bg-white border-2 border-gray-200">
        <h3 className="text-gray-800 mb-4">Today's Tasks</h3>
        <div className="space-y-3">
          {[
            { task: 'Fix leaking faucet - Unit 2A', property: 'Sunset Apartments', priority: 'high', status: 'in_progress' },
            { task: 'AC maintenance - Unit 5C', property: 'Downtown Plaza', priority: 'medium', status: 'pending' },
            { task: 'Light bulb replacement - Unit 1B', property: 'Riverfront Complex', priority: 'low', status: 'completed' },
          ].map((task, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded hover:bg-gray-50">
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">{task.task}</div>
                <div className="text-xs text-gray-600">{task.property}</div>
              </div>
              <div className="flex items-center gap-2">
                <span 
                  className="text-xs px-2 py-1 rounded"
                  style={
                    task.priority === 'high'
                      ? { backgroundColor: '#fee2e2', color: '#991b1b' }
                      : task.priority === 'medium'
                      ? { backgroundColor: '#fef3c7', color: '#92400e' }
                      : { backgroundColor: '#f3f4f6', color: '#4b5563' }
                  }
                >
                  {task.priority}
                </span>
                <span 
                  className="text-xs px-2 py-1 rounded"
                  style={
                    task.status === 'completed'
                      ? { backgroundColor: `${config.app.primaryColor}20`, color: config.app.primaryColor }
                      : task.status === 'in_progress'
                      ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                      : { backgroundColor: '#f3f4f6', color: '#4b5563' }
                  }
                >
                  {task.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
