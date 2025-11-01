import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PropertyDetailsProps {
  onNavigate: (screen: string) => void;
}

export function PropertyDetails({ onNavigate }: PropertyDetailsProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Property Details">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <h2 className="text-gray-800 mb-1">Sunset Apartments</h2>
            <p className="text-sm text-gray-600">123 Main Street, Downtown District</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border-2 border-gray-400 rounded hover:bg-gray-50 text-sm">Edit</button>
            <button className="px-4 py-2 border-2 border-gray-400 rounded hover:bg-gray-50 text-sm">Delete</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Units', value: '12' },
            { label: 'Occupied', value: '10' },
            { label: 'Vacant', value: '2' },
            { label: 'Occupancy Rate', value: '83%' },
          ].map((stat, i) => (
            <Card key={i} className="p-4 bg-white border-2 border-gray-300">
              <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
              <div className="text-2xl text-gray-900">{stat.value}</div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="units" className="w-full">
          <TabsList className="bg-white border-2 border-gray-400">
            <TabsTrigger value="units" className="data-[state=active]:bg-gray-800 data-[state=active]:text-white">Units</TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-gray-800 data-[state=active]:text-white">Details</TabsTrigger>
            <TabsTrigger value="financials" className="data-[state=active]:bg-gray-800 data-[state=active]:text-white">Financials</TabsTrigger>
            <TabsTrigger value="maintenance" className="data-[state=active]:bg-gray-800 data-[state=active]:text-white">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="units" className="mt-4">
            <Card className="p-4 bg-white border-2 border-gray-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-800">Units</h3>
                <button className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded text-sm">
                  + Add Unit
                </button>
              </div>

              <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-gray-400">
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Unit #</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Type</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Tenant</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Rent</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { unit: '1A', type: '2BR/1BA', tenant: 'John Smith', rent: '$1,200', status: 'Occupied' },
                    { unit: '2A', type: '1BR/1BA', tenant: 'Sarah Johnson', rent: '$950', status: 'Occupied' },
                    { unit: '3A', type: '2BR/2BA', tenant: '-', rent: '$1,350', status: 'Vacant' },
                    { unit: '4A', type: '1BR/1BA', tenant: 'Mike Chen', rent: '$950', status: 'Occupied' },
                  ].map((unit, i) => (
                    <tr key={i} className="border-b border-gray-300">
                      <td className="py-3 px-4 text-sm text-gray-800">{unit.unit}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{unit.type}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{unit.tenant}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{unit.rent}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded border ${
                          unit.status === 'Occupied' 
                            ? 'bg-gray-700 text-white border-gray-900' 
                            : 'bg-gray-200 text-gray-700 border-gray-400'
                        }`}>
                          {unit.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">Edit</button>
                          <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-100">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <Card className="p-6 bg-white border-2 border-gray-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-800 mb-4">Property Information</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Property Type', value: 'Apartment Complex' },
                      { label: 'Year Built', value: '2015' },
                      { label: 'Total Units', value: '12' },
                      { label: 'Square Footage', value: '15,000 sq ft' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between pb-3 border-b border-gray-300">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm text-gray-800">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-800 mb-4">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Parking', 'Pool', 'Gym', 'Laundry', 'Pet Friendly', 'AC', 'Heating', 'Elevator'].map((amenity) => (
                      <span key={amenity} className="px-3 py-1 bg-gray-200 border border-gray-400 rounded text-xs text-gray-700">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="financials" className="mt-4">
            <Card className="p-4 bg-white border-2 border-gray-300">
              <h3 className="text-gray-800 mb-4">Financial Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Monthly Rent', value: '$11,400' },
                  { label: 'Collected This Month', value: '$9,500' },
                  { label: 'Outstanding', value: '$1,900' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 border-2 border-gray-300 rounded">
                    <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-xl text-gray-900">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="mt-4">
            <Card className="p-4 bg-white border-2 border-gray-300">
              <h3 className="text-gray-800 mb-4">Maintenance Requests</h3>
              <div className="space-y-3">
                {[
                  { unit: '2A', issue: 'Leaking faucet', status: 'In Progress', priority: 'Medium' },
                  { unit: '1A', issue: 'AC not working', status: 'Open', priority: 'High' },
                  { unit: '4A', issue: 'Broken window', status: 'Completed', priority: 'Low' },
                ].map((request, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-2 border-gray-300 rounded">
                    <div>
                      <div className="text-sm text-gray-800">Unit {request.unit}: {request.issue}</div>
                    </div>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded border ${
                        request.status === 'Completed' 
                          ? 'bg-gray-700 text-white border-gray-900' 
                          : request.status === 'In Progress'
                          ? 'bg-yellow-100 text-gray-800 border-yellow-400'
                          : 'bg-gray-200 text-gray-700 border-gray-400'
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
          </TabsContent>
        </Tabs>
      </div>
    </WireframeLayout>
  );
}
