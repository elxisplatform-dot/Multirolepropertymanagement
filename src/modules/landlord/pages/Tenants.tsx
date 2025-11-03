import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { UserPlus, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/env';
import { ROUTES } from '../../shared/utils/constants';
import { getInitials } from '../../shared/utils/helpers';

export function Tenants() {
  const navigate = useNavigate();

  const tenants = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+234 801 234 5678', property: 'Sunset Apartments', unit: '4B', rent: '₦1,250', status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'michael@email.com', phone: '+234 802 345 6789', property: 'Downtown Plaza', unit: '2A', rent: '₦1,100', status: 'Active' },
    { id: 3, name: 'Emily Davis', email: 'emily@email.com', phone: '+234 803 456 7890', property: 'Riverfront Complex', unit: '5C', rent: '₦950', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Tenants</h1>
          <p className="text-gray-600">Manage tenant information and leases</p>
        </div>
        <Button
          onClick={() => navigate(ROUTES.LANDLORD_TENANTS_ADD)}
          style={{ backgroundColor: config.app.primaryColor }}
          className="text-white"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Tenant
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tenants.map((tenant) => (
          <Card key={tenant.id} className="p-6 bg-white border-2 border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: config.app.primaryColor }}
                >
                  {getInitials(tenant.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900">{tenant.name}</h3>
                    <span 
                      className="text-xs px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: tenant.status === 'Active' ? `${config.app.primaryColor}20` : '#f3f4f6',
                        color: tenant.status === 'Active' ? config.app.primaryColor : '#6b7280'
                      }}
                    >
                      {tenant.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {tenant.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {tenant.phone}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Property:</span>{' '}
                      <span className="text-gray-900">{tenant.property}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Unit:</span>{' '}
                      <span className="text-gray-900">{tenant.unit}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Monthly Rent:</span>{' '}
                      <span className="text-gray-900">{tenant.rent}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
