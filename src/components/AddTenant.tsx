import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface AddTenantProps {
  onNavigate: (screen: string) => void;
}

export function AddTenant({ onNavigate }: AddTenantProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Add New Tenant">
      <div className="max-w-4xl">
        <Card className="p-6 bg-white border-2 border-gray-300">
          <form className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">First Name*</Label>
                  <Input 
                    placeholder="John"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Last Name*</Label>
                  <Input 
                    placeholder="Doe"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Email*</Label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Phone*</Label>
                  <Input 
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Date of Birth</Label>
                  <Input 
                    type="date"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">SSN (Last 4)</Label>
                  <Input 
                    placeholder="****"
                    maxLength={4}
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Lease Information */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Lease Information</h3>
              <div className="grid grid-cols-2 gap-4">
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
                  <Label className="text-gray-700 text-xs mb-1 block">Lease Start Date*</Label>
                  <Input 
                    type="date"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Lease End Date*</Label>
                  <Input 
                    type="date"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Monthly Rent*</Label>
                  <Input 
                    type="number"
                    placeholder="1250.00"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Security Deposit*</Label>
                  <Input 
                    type="number"
                    placeholder="1250.00"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Emergency Contact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Contact Name</Label>
                  <Input 
                    placeholder="Jane Doe"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Relationship</Label>
                  <Input 
                    placeholder="Spouse, Parent, etc."
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Contact Phone</Label>
                  <Input 
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Additional Information</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="border-2 border-gray-400" />
                  Has pets
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="border-2 border-gray-400" />
                  Parking required
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="border-2 border-gray-400" />
                  Send welcome email
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t-2 border-gray-300">
              <button 
                type="button"
                onClick={() => onNavigate('tenants-list')}
                className="px-6 py-2 border-2 border-gray-400 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700"
              >
                Add Tenant
              </button>
            </div>
          </form>
        </Card>
      </div>
    </WireframeLayout>
  );
}
