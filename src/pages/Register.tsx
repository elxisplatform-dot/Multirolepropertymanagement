import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { AuthLayout } from '../modules/shared/layouts/AuthLayout';
import { useAuth } from '../modules/shared/hooks/useAuth';
import { toast } from 'sonner@2.0.3';
import { Loader2 } from 'lucide-react';
import { config } from '../config/env';
import type { UserRole } from '../config/supabaseClient';

export function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'landlord' as UserRole,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signUp(formData.email, formData.password, formData.role);
      toast.success('Account created successfully! Please check your email to verify.');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-gray-900 mb-1">Create Account</h1>
          <p className="text-sm text-gray-600">Start managing your properties today</p>
        </div>

        {/* Register Form */}
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
            <Label htmlFor="role" className="text-gray-700 text-sm mb-1 block">
              Account Type
            </Label>
            <Select
              value={formData.role}
              onValueChange={(value: UserRole) => setFormData({ ...formData, role: value })}
            >
              <SelectTrigger className="border-2 border-gray-300 bg-gray-50">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landlord">Landlord</SelectItem>
                <SelectItem value="tenant">Tenant</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
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

          <div>
            <Label htmlFor="confirmPassword" className="text-gray-700 text-sm mb-1 block">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              className="border-2 border-gray-300 bg-gray-50"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white border-2 hover:opacity-90"
            style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="hover:underline"
            style={{ color: config.app.primaryColor }}
          >
            Sign in
          </button>
        </div>
      </Card>
    </AuthLayout>
  );
}
