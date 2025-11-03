import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { FileText, Download } from 'lucide-react';
import { config } from '../../../config/env';

export function TenantLease() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-gray-900 mb-2">Lease Agreement</h1>
        <p className="text-gray-600">View your lease details and documents</p>
      </div>

      <Card className="p-6 bg-white border-2 border-gray-200">
        <h3 className="text-gray-800 mb-4">Lease Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-gray-600 mb-1">Property</div>
            <div className="text-gray-900">Sunset Apartments</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Unit</div>
            <div className="text-gray-900">4B</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Lease Start</div>
            <div className="text-gray-900">January 1, 2025</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Lease End</div>
            <div className="text-gray-900">December 31, 2025</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Monthly Rent</div>
            <div className="text-gray-900">₦1,250</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Security Deposit</div>
            <div className="text-gray-900">₦2,500</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white border-2 border-gray-200">
        <h3 className="text-gray-800 mb-4">Lease Documents</h3>
        <div className="space-y-3">
          {[
            { name: 'Lease Agreement.pdf', size: '2.4 MB', date: 'Jan 1, 2025' },
            { name: 'Move-in Checklist.pdf', size: '1.1 MB', date: 'Jan 1, 2025' },
            { name: 'Property Rules.pdf', size: '856 KB', date: 'Jan 1, 2025' },
          ].map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 border rounded flex items-center justify-center"
                  style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
                >
                  <FileText className="w-5 h-5" style={{ color: config.app.primaryColor }} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">{doc.name}</div>
                  <div className="text-xs text-gray-600">{doc.size} • {doc.date}</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
