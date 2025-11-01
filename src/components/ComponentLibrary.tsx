import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

interface ComponentLibraryProps {
  onNavigate: (screen: string) => void;
}

export function ComponentLibrary({ onNavigate }: ComponentLibraryProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => onNavigate('login')}
            className="text-sm text-gray-600 hover:text-gray-800 mb-4"
          >
            ← Back to Wireframes
          </button>
          <h1 className="text-gray-800 mb-2">Component Library</h1>
          <p className="text-sm text-gray-600">Shared components for design consistency</p>
        </div>

        <div className="space-y-8">
          {/* Colors */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Color Palette</h2>
            <div className="grid grid-cols-6 gap-4">
              {[
                { name: 'Gray 900', color: 'bg-gray-900', border: 'border-gray-900' },
                { name: 'Gray 800', color: 'bg-gray-800', border: 'border-gray-900' },
                { name: 'Gray 700', color: 'bg-gray-700', border: 'border-gray-900' },
                { name: 'Gray 600', color: 'bg-gray-600', border: 'border-gray-800' },
                { name: 'Gray 500', color: 'bg-gray-500', border: 'border-gray-700' },
                { name: 'Gray 400', color: 'bg-gray-400', border: 'border-gray-600' },
                { name: 'Gray 300', color: 'bg-gray-300', border: 'border-gray-500' },
                { name: 'Gray 200', color: 'bg-gray-200', border: 'border-gray-400' },
                { name: 'Gray 100', color: 'bg-gray-100', border: 'border-gray-400' },
                { name: 'Gray 50', color: 'bg-gray-50', border: 'border-gray-400' },
                { name: 'Yellow 100', color: 'bg-yellow-100', border: 'border-yellow-400' },
                { name: 'Red 100', color: 'bg-red-100', border: 'border-red-400' },
              ].map((colorItem) => (
                <div key={colorItem.name} className="text-center">
                  <div className={`${colorItem.color} border-2 ${colorItem.border} h-16 rounded mb-2`}></div>
                  <div className="text-xs text-gray-700">{colorItem.name}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Buttons */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Buttons</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-700 mb-2">Primary Button</div>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-900">
                  Primary Action
                </Button>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-2">Secondary Button</div>
                <Button variant="outline" className="border-2 border-gray-400 hover:bg-gray-50">
                  Secondary Action
                </Button>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-2">Small Buttons</div>
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 border-2 border-gray-800 bg-gray-800 text-white rounded">Active</button>
                  <button className="text-xs px-3 py-1 border-2 border-gray-400 bg-white text-gray-700 rounded">Inactive</button>
                </div>
              </div>
            </div>
          </Card>

          {/* Form Elements */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Form Elements</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Input Field</Label>
                <Input 
                  placeholder="Placeholder text"
                  className="border-2 border-gray-400 bg-gray-50"
                />
              </div>
              <div>
                <Label className="text-gray-700 text-xs mb-1 block">Select Dropdown</Label>
                <select className="w-full px-3 py-2 border-2 border-gray-400 rounded bg-gray-50 text-sm">
                  <option>Select option...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="border-2 border-gray-400" />
                  Checkbox Label
                </label>
              </div>
            </div>
          </Card>

          {/* Badges/Status */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Badges & Status Indicators</h2>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 bg-gray-700 text-white border border-gray-900 rounded">Active</span>
              <span className="text-xs px-3 py-1 bg-gray-600 text-white border border-gray-800 rounded">Success</span>
              <span className="text-xs px-3 py-1 bg-yellow-100 text-gray-800 border border-yellow-400 rounded">Pending</span>
              <span className="text-xs px-3 py-1 bg-red-100 text-gray-800 border border-red-400 rounded">Error</span>
              <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 border border-gray-400 rounded">Inactive</span>
            </div>
          </Card>

          {/* Cards */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Cards</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white border-2 border-gray-300">
                <h3 className="text-gray-800 mb-2">Card Title</h3>
                <p className="text-sm text-gray-600">Card content goes here with some descriptive text.</p>
              </Card>
              <Card className="p-4 bg-white border-2 border-gray-300 hover:border-gray-500 cursor-pointer">
                <h3 className="text-gray-800 mb-2">Hoverable Card</h3>
                <p className="text-sm text-gray-600">This card has a hover state.</p>
              </Card>
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Stat Cards</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Metric Name', value: '1,234' },
                { label: 'Another Metric', value: '56%' },
                { label: 'Count', value: '89' },
                { label: 'Currency', value: '$12,450' },
              ].map((stat, i) => (
                <Card key={i} className="p-4 bg-white border-2 border-gray-300">
                  <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-2xl text-gray-900">{stat.value}</div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Image Placeholders */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Image Placeholders</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-32 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600">IMAGE</span>
              </div>
              <div className="h-32 bg-gray-100 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600">DASHED</span>
              </div>
              <div className="w-32 h-32 bg-gray-300 border-2 border-gray-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xs text-gray-600">AVATAR</span>
              </div>
            </div>
          </Card>

          {/* Typography */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Typography</h2>
            <div className="space-y-3">
              <div>
                <h1 className="text-gray-800">Heading 1</h1>
              </div>
              <div>
                <h2 className="text-gray-800">Heading 2</h2>
              </div>
              <div>
                <h3 className="text-gray-800">Heading 3</h3>
              </div>
              <div>
                <p className="text-sm text-gray-700">Body Text - Regular weight for general content</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Small Text - For labels and captions</p>
              </div>
            </div>
          </Card>

          {/* Icons/Emojis */}
          <Card className="p-6 bg-white border-2 border-gray-300">
            <h2 className="text-gray-800 mb-4">Icons (Emoji Placeholders)</h2>
            <div className="flex gap-4">
              {['🏢', '👤', '💰', '🔧', '📊', '🔔', '⚙️', '📅', '💳', '📧'].map((emoji, i) => (
                <div key={i} className="w-12 h-12 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-xl">
                  {emoji}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
