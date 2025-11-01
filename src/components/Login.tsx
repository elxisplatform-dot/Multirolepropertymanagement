import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface LoginProps {
  onNavigate: (screen: string) => void;
  setUserRole: (role: 'superadmin' | 'landlord' | 'tenant') => void;
}

export function Login({ onNavigate, setUserRole }: LoginProps) {
  const handleLogin = (role: 'superadmin' | 'landlord' | 'tenant') => {
    setUserRole(role);
    onNavigate(`${role}-dashboard`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white border-2 border-gray-400 p-8">
        {/* Logo/Brand */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gray-300 border-2 border-gray-600 rounded mx-auto mb-4 flex items-center justify-center">
            <span className="text-xs">LOGO</span>
          </div>
          <h1 className="text-gray-800 mb-1">PropertyFlow</h1>
          <p className="text-xs text-gray-600">Property Management System</p>
        </div>

        {/* Login Form */}
        <div className="space-y-4 mb-6">
          <div>
            <Label className="text-gray-700 text-xs mb-1 block">Email Address</Label>
            <Input 
              type="email" 
              placeholder="user@example.com"
              className="border-2 border-gray-400 bg-gray-50"
            />
          </div>
          <div>
            <Label className="text-gray-700 text-xs mb-1 block">Password</Label>
            <Input 
              type="password" 
              placeholder="••••••••"
              className="border-2 border-gray-400 bg-gray-50"
            />
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="border-gray-400" />
              Remember me
            </label>
            <button className="text-gray-600 underline">Forgot password?</button>
          </div>
        </div>

        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-900 mb-4">
          Sign In
        </Button>

        <div className="text-center text-xs text-gray-600 mb-4">
          Don't have an account? <button className="underline">Sign up</button>
        </div>

        {/* Demo Login Options */}
        <div className="mt-8 pt-6 border-t-2 border-gray-300">
          <p className="text-xs text-gray-600 mb-3 text-center">Demo Login As:</p>
          <div className="space-y-2">
            <Button 
              onClick={() => handleLogin('superadmin')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white text-xs"
              variant="outline"
            >
              Super Admin
            </Button>
            <Button 
              onClick={() => handleLogin('landlord')}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white text-xs"
              variant="outline"
            >
              Landlord
            </Button>
            <Button 
              onClick={() => handleLogin('tenant')}
              className="w-full bg-gray-500 hover:bg-gray-400 text-white text-xs"
              variant="outline"
            >
              Tenant
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
