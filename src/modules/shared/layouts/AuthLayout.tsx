import { ReactNode } from 'react';
import { config } from '../../../config/env';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Branding */}
      <div 
        className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white"
        style={{ backgroundColor: config.app.primaryColor }}
      >
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded flex items-center justify-center">
              <span className="text-sm text-white">PF</span>
            </div>
            <span className="text-2xl">PropertyFlow</span>
          </div>
          <h2 className="text-3xl mb-4">
            Manage Properties, Tenants & Payments in One Place
          </h2>
          <p className="text-white/80 text-sm mb-8">
            A complete property management solution for landlords, property managers, and tenants.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <div className="text-sm">Track Properties & Tenants</div>
                <div className="text-xs text-white/70">Manage all your properties in one dashboard</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <div className="text-sm">Online Rent Collection</div>
                <div className="text-xs text-white/70">Automated payment processing with Paystack</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <div className="text-sm">Maintenance Tracking</div>
                <div className="text-xs text-white/70">Streamline work orders and requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
