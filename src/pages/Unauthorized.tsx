import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ShieldAlert } from 'lucide-react';
import { useAuth } from '../modules/shared/hooks/useAuth';

export function Unauthorized() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <ShieldAlert className="w-20 h-20 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl text-gray-800 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-8">
          You don't have permission to access this page. Please contact your administrator
          if you believe this is an error.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
