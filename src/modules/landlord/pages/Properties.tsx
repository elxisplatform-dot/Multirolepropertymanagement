import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Building2, Plus, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/env';
import { ROUTES } from '../../shared/utils/constants';

export function Properties() {
  const navigate = useNavigate();

  const properties = [
    { id: 1, name: 'Sunset Apartments', address: '123 Main St, Lagos', units: 24, occupied: 24, revenue: '₦12,500' },
    { id: 2, name: 'Downtown Plaza', address: '456 Center Ave, Abuja', units: 18, occupied: 17, revenue: '₦10,200' },
    { id: 3, name: 'Riverfront Complex', address: '789 River Rd, Port Harcourt', units: 30, occupied: 26, revenue: '₦8,750' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Properties</h1>
          <p className="text-gray-600">Manage your rental properties</p>
        </div>
        <Button
          onClick={() => navigate(ROUTES.LANDLORD_PROPERTIES_ADD)}
          style={{ backgroundColor: config.app.primaryColor }}
          className="text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="p-6 bg-white border-2 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div 
                className="w-12 h-12 border rounded flex items-center justify-center"
                style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
              >
                <Building2 className="w-6 h-6" style={{ color: config.app.primaryColor }} />
              </div>
              <span 
                className="text-xs px-2 py-1 rounded"
                style={{ backgroundColor: `${config.app.primaryColor}20`, color: config.app.primaryColor }}
              >
                {property.occupied}/{property.units} Occupied
              </span>
            </div>

            <h3 className="text-gray-900 mb-2">{property.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              {property.address}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <div className="text-xs text-gray-600">Monthly Revenue</div>
                <div className="text-gray-900">{property.revenue}</div>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
