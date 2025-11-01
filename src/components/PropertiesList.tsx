import { WireframeLayout } from './WireframeLayout';
import { Card } from './ui/card';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';

interface PropertiesListProps {
  onNavigate: (screen: string) => void;
}

export function PropertiesList({ onNavigate }: PropertiesListProps) {
  return (
    <WireframeLayout onNavigate={onNavigate} title="Properties">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Search properties..." 
            className="pl-10 border-2 border-gray-400 bg-white"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-400 rounded bg-white hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters</span>
        </button>
        <button 
          onClick={() => onNavigate('add-property')}
          className="px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700"
        >
          + Add Property
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs border-2 border-gray-800 bg-gray-800 text-white rounded">Grid</button>
          <button className="px-3 py-1 text-xs border-2 border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-50">List</button>
        </div>
        <span className="text-sm text-gray-600">24 properties</span>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, i) => ({
          name: ['Sunset Apartments', 'Garden View Complex', 'Historic Townhouses', 'Riverside Lofts', 'Park Plaza', 'Downtown Studios', 'Oak Street Residences', 'Lakeside Manor', 'City Center Apartments'][i],
          location: ['Downtown District', 'Riverside Area', 'Old Town', 'Waterfront', 'Central Park', 'Business District', 'Suburban Area', 'Lakefront', 'City Center'][i],
          units: ['12', '10', '6', '8', '15', '20', '5', '14', '18'][i],
          occupied: ['10', '8', '6', '6', '12', '18', '4', '12', '16'][i],
          rate: Math.floor((parseInt(['10', '8', '6', '6', '12', '18', '4', '12', '16'][i]) / parseInt(['12', '10', '6', '8', '15', '20', '5', '14', '18'][i])) * 100),
        })).map((property, i) => (
          <Card 
            key={i} 
            className="overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-500 cursor-pointer transition-colors"
            onClick={() => onNavigate('property-details')}
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-200 border-b-2 border-gray-400 flex items-center justify-center">
              <span className="text-xs text-gray-600">PROPERTY IMAGE</span>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h4 className="text-gray-800 mb-1">{property.name}</h4>
              <p className="text-xs text-gray-600 mb-3">{property.location}</p>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Total Units</span>
                  <span className="text-gray-800">{property.units}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Occupied</span>
                  <span className="text-gray-800">{property.occupied}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-700">Occupancy Rate</span>
                <span className={`text-xs px-2 py-1 rounded border ${
                  property.rate === 100 
                    ? 'bg-gray-700 text-white border-gray-900' 
                    : property.rate >= 80
                    ? 'bg-gray-600 text-white border-gray-800'
                    : 'bg-gray-200 text-gray-700 border-gray-400'
                }`}>
                  {property.rate}%
                </span>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t-2 border-gray-300">
                <button className="flex-1 text-xs px-2 py-2 border-2 border-gray-400 rounded hover:bg-gray-50">
                  Edit
                </button>
                <button className="flex-1 text-xs px-2 py-2 border-2 border-gray-400 rounded hover:bg-gray-50">
                  View
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </WireframeLayout>
  );
}
