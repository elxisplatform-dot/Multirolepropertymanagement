import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/helpers';
import { X } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export interface SidebarItem {
  icon: ReactNode;
  label: string;
  path: string;
  badge?: string | number;
}

interface SidebarProps {
  items: SidebarItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ items, isOpen = true, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-64 bg-white border-r transition-transform duration-300 md:translate-x-0 md:static',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b md:hidden">
          <span>Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-[#5d866c]/10 text-[#5d866c]'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <span className={cn('w-5 h-5', isActive && 'text-[#5d866c]')}>
                  {item.icon}
                </span>
                <span className="flex-1 text-sm">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-200">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
