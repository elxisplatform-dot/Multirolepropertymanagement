import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { AuthLayout } from '../modules/shared/layouts/AuthLayout';
import { useAuth } from '../modules/shared/hooks/useAuth';
import { toast } from 'sonner@2.0.3';
import { Loader2 } from 'lucide-react';
import { config } from '../config/env';

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
      toast.success('Successfully signed in!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  // Demo login function for wireframe testing
  const handleDemoLogin = (role: 'superadmin' | 'landlord' | 'tenant' | 'staff') => {
    const roleRoutes = {
      superadmin: '/superadmin',
      landlord: '/landlord',
      tenant: '/tenant',
      staff: '/staff',
    };
    navigate(roleRoutes[role]);
  };

  return (
    <AuthLayout>
      <Card className="p-8 bg-white border-2 border-gray-200 shadow-sm">
        {/* Logo/Brand */}
        <div className="mb-8 text-center">
          <div 
            className="w-16 h-16 rounded mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: config.app.primaryColor }}
          >
            <span className="text-sm text-white">PF</span>
          </div>
          <h1 className="text-gray-900 mb-1">Welcome Back</h1>
          <p className="text-sm text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <Label htmlFor="email" className="text-gray-700 text-sm mb-1 block">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-2 border-gray-300 bg-gray-50"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-700 text-sm mb-1 block">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="border-2 border-gray-300 bg-gray-50"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                className="border-gray-400"
              />
              Remember me
            </label>
            <button type="button" className="text-gray-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white border-2 hover:opacity-90"
            style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600 mb-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="hover:underline"
            style={{ color: config.app.primaryColor }}
          >
            Sign up
          </button>
        </div>

        {/* Demo Login Options */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 mb-3 text-center">Demo Login As:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              onClick={() => handleDemoLogin('superadmin')}
              className="text-white text-sm"
              variant="outline"
              style={{ backgroundColor: config.app.primaryColor }}
            >
              Super Admin
            </Button>
            <Button
              type="button"
              onClick={() => handleDemoLogin('landlord')}
              className="text-white text-sm"
              variant="outline"
              style={{ backgroundColor: '#4a6b56' }}
            >
              Landlord
            </Button>
            <Button
              type="button"
              onClick={() => handleDemoLogin('tenant')}
              className="text-white text-sm"
              variant="outline"
              style={{ backgroundColor: '#7aa086' }}
            >
              Tenant
            </Button>
            <Button
              type="button"
              onClick={() => handleDemoLogin('staff')}
              className="text-white text-sm"
              variant="outline"
              style={{ backgroundColor: '#2d4033' }}
            >
              Staff
            </Button>
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
}
