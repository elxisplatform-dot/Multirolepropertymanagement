import { ReactNode, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar, type SidebarItem } from '../components/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  title?: string;
}

export function DashboardLayout({ children, sidebarItems, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onMenuClick={() => setSidebarOpen(true)} 
        title={title}
      />
      
      <div className="flex">
        <Sidebar
          items={sidebarItems}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
