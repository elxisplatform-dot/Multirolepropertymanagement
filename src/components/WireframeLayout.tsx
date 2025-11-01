import { ReactNode, useState } from 'react';
import { Home, Building2, Users, CreditCard, Wrench, FileText, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react';

interface WireframeLayoutProps {
  children: ReactNode;
  onNavigate: (screen: string) => void;
  title: string;
  role?: string;
}

export function WireframeLayout({ children, onNavigate, title, role = 'Landlord' }: WireframeLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: 'Dashboard', screen: 'landlord-dashboard' },
    { icon: Building2, label: 'Properties', screen: 'properties-list' },
    { icon: Users, label: 'Tenants', screen: 'tenants-list' },
    { icon: CreditCard, label: 'Payments', screen: 'payments-list' },
    { icon: Wrench, label: 'Maintenance', screen: 'maintenance-list' },
    { icon: FileText, label: 'Reports', screen: 'reports' },
    { icon: MessageSquare, label: 'Messages', screen: 'messages' },
    { icon: Settings, label: 'Settings', screen: 'settings' },
  ];

  const handleNavClick = (screen: string) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r-2 border-gray-300 flex flex-col
        transform transition-transform duration-300 lg:transform-none
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-4 border-b-2 border-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 border border-gray-900 rounded flex items-center justify-center">
                <span className="text-[10px] text-white">PF</span>
              </div>
              <span className="text-gray-800">PropertyFlow</span>
            </div>
            <button 
              className="lg:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.screen)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded border border-transparent hover:bg-gray-100 hover:border-gray-400 text-gray-700 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 border-2 border-gray-500 rounded-full flex items-center justify-center">
              <span className="text-xs">JM</span>
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-800">John Manager</div>
              <div className="text-xs text-gray-600">{role}</div>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-400">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white border-b-2 border-gray-300 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className="lg:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-gray-800">{title}</h1>
                <p className="text-xs text-gray-600 mt-1 hidden sm:block">Manage your properties and tenants</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <button className="w-10 h-10 border-2 border-gray-400 rounded bg-gray-50 flex items-center justify-center hover:bg-gray-100">
                <span className="text-xs">🔔</span>
              </button>
              <button className="hidden sm:block px-4 py-2 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700 text-sm">
                + Add Property
              </button>
              <button className="sm:hidden w-10 h-10 bg-gray-800 text-white border-2 border-gray-900 rounded hover:bg-gray-700 flex items-center justify-center">
                +
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
