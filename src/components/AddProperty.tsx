import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface AddPropertyProps {
  onNavigate: (screen: string) => void;
}

export function AddProperty({ onNavigate }: AddPropertyProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Add New Property">
      <div className="max-w-4xl">
        <Card className="p-6 bg-white border-2 border-gray-300">
          <form className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Property Name*</Label>
                  <Input 
                    placeholder="e.g., Sunset Apartments"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Property Type*</Label>
                  <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                    <option>Select type...</option>
                    <option>Apartment Complex</option>
                    <option>Single Family Home</option>
                    <option>Townhouse</option>
                    <option>Condo</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <Label className="text-gray-700 text-xs mb-1 block">Description</Label>
                  <Textarea 
                    placeholder="Property description..."
                    className="border-2 border-gray-400 bg-gray-50 min-h-24"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label className="text-gray-700 text-xs mb-1 block">Street Address*</Label>
                  <Input 
                    placeholder="123 Main Street"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">City*</Label>
                  <Input 
                    placeholder="City"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">State*</Label>
                  <Input 
                    placeholder="State"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">ZIP Code*</Label>
                  <Input 
                    placeholder="12345"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Country*</Label>
                  <Input 
                    placeholder="Country"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Property Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Total Units*</Label>
                  <Input 
                    type="number"
                    placeholder="0"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Year Built</Label>
                  <Input 
                    type="number"
                    placeholder="2020"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 text-xs mb-1 block">Square Footage</Label>
                  <Input 
                    type="number"
                    placeholder="0"
                    className="border-2 border-gray-400 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Amenities</h3>
              <div className="grid grid-cols-3 gap-3">
                {['Parking', 'Pool', 'Gym', 'Laundry', 'Pet Friendly', 'Air Conditioning', 'Heating', 'Elevator', 'Security'].map((amenity) => (
                  <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" className="border-2 border-gray-400" />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Images */}
            <div>
              <h3 className="text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Images</h3>
              <div className="border-2 border-dashed border-gray-400 rounded p-8 text-center bg-gray-50">
                <div className="mb-2 text-gray-600">📷</div>
                <p className="text-sm text-gray-700 mb-1">Drop images here or click to upload</p>
                <p className="text-xs text-gray-600">PNG, JPG up to 10MB</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t-2 border-gray-300">
              <button 
                type="button"
                onClick={() => onNavigate('properties-list')}
                className="px-6 py-2 border-2 border-gray-400 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700"
              >
                Create Property
              </button>
            </div>
          </form>
        </Card>
      </div>
    </WireframeLayout>
  );
}
