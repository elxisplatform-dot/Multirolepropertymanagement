import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface MaintenanceListProps {
  onNavigate: (screen: string) => void;
}

export function MaintenanceList({ onNavigate }: MaintenanceListProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Maintenance Requests">
      {/* Filters and Search */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Search requests..." 
            className="pl-10 border-2 border-gray-400 bg-white"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-400 rounded bg-white hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>

        {/* Create Request Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700">
              + New Request
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-white border-2 border-gray-400">
            <DialogHeader>
              <DialogTitle className="text-gray-800">Create Maintenance Request</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Property*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select property...</option>
                  <option>Sunset Apartments</option>
                  <option>Garden View Complex</option>
                  <option>Historic Townhouses</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Unit*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select unit...</option>
                  <option>1A</option>
                  <option>2A</option>
                  <option>3A</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Category*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select category...</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Appliance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Priority*</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select priority...</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Emergency</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Description*</Label>
                <Textarea 
                  placeholder="Describe the issue..."
                  className="border-2 border-gray-400 bg-gray-50 min-h-24"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" className="flex-1 border-2 border-gray-400">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-gray-800 text-white border-2 border-gray-900">
                  Submit Request
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Open Requests', value: '12', color: 'text-gray-900' },
          { label: 'In Progress', value: '8', color: 'text-gray-900' },
          { label: 'Completed', value: '45', color: 'text-gray-900' },
          { label: 'Avg Resolution Time', value: '2.5 days', color: 'text-gray-900' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300">
            <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
            <div className={`text-2xl ${stat.color}`}>{stat.value}</div>
          </Card>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 text-xs border-2 border-gray-800 bg-gray-800 text-white rounded">All</button>
        <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Open</button>
        <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">In Progress</button>
        <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">Completed</button>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {[
          { 
            id: '#MR-2045', 
            title: 'Leaking faucet in kitchen', 
            property: 'Sunset Apartments', 
            unit: '2A', 
            tenant: 'Sarah Johnson',
            category: 'Plumbing', 
            priority: 'Medium', 
            status: 'In Progress',
            date: 'Oct 28, 2025',
            assignee: 'Joe Plumber'
          },
          { 
            id: '#MR-2044', 
            title: 'AC not cooling properly', 
            property: 'Garden View', 
            unit: '3B', 
            tenant: 'Mike Chen',
            category: 'HVAC', 
            priority: 'High', 
            status: 'Open',
            date: 'Oct 27, 2025',
            assignee: 'Unassigned'
          },
          { 
            id: '#MR-2043', 
            title: 'Broken window latch', 
            property: 'Historic Town', 
            unit: '2C', 
            tenant: 'Emma Wilson',
            category: 'Other', 
            priority: 'Low', 
            status: 'Completed',
            date: 'Oct 25, 2025',
            assignee: 'Bob Handyman'
          },
          { 
            id: '#MR-2042', 
            title: 'Refrigerator not working', 
            property: 'Sunset Apartments', 
            unit: '1A', 
            tenant: 'John Smith',
            category: 'Appliance', 
            priority: 'High', 
            status: 'In Progress',
            date: 'Oct 24, 2025',
            assignee: 'Appliance Repair Co'
          },
        ].map((request, i) => (
          <Card key={i} className="p-4 bg-white border-2 border-gray-300 hover:border-gray-500 cursor-pointer transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-600">{request.id}</span>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    request.priority === 'High' 
                      ? 'bg-gray-800 text-white border-gray-900' 
                      : request.priority === 'Medium'
                      ? 'bg-gray-600 text-white border-gray-800'
                      : 'bg-gray-300 text-gray-700 border-gray-500'
                  }`}>
                    {request.priority}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    request.status === 'Completed' 
                      ? 'bg-gray-700 text-white border-gray-900' 
                      : request.status === 'In Progress'
                      ? 'bg-yellow-100 text-gray-800 border-yellow-400'
                      : 'bg-gray-200 text-gray-700 border-gray-400'
                  }`}>
                    {request.status}
                  </span>
                </div>
                <h4 className="text-gray-800 mb-2">{request.title}</h4>
                <div className="grid grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-gray-600">Property: </span>
                    <span className="text-gray-800">{request.property}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Unit: </span>
                    <span className="text-gray-800">{request.unit}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Tenant: </span>
                    <span className="text-gray-800">{request.tenant}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Category: </span>
                    <span className="text-gray-800">{request.category}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-600 mb-2">{request.date}</div>
                <div className="text-xs text-gray-800">Assigned to: {request.assignee}</div>
              </div>
            </div>
            <div className="flex gap-2 pt-3 border-t border-gray-300">
              <button className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-50">View Details</button>
              <button className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-50">Update Status</button>
              <button className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-50">Assign</button>
            </div>
          </Card>
        ))}
      </div>
    </WireframeLayout>
  );
}
