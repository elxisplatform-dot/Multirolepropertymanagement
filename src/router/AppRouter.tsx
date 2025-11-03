import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PageLoader } from '../modules/shared/components/Loader';
import { useAuth } from '../modules/shared/hooks/useAuth';

// Public pages
import { Landing } from '../pages/Landing';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { Unauthorized } from '../pages/Unauthorized';

// Lazy load modules
const SuperAdminModule = lazy(() => import('../modules/superadmin'));
const LandlordModule = lazy(() => import('../modules/landlord'));
const TenantModule = lazy(() => import('../modules/tenant'));
const StaffModule = lazy(() => import('../modules/staff'));

function DashboardRedirect() {
  const { userRole } = useAuth();

  if (!userRole) return <PageLoader />;

  const roleRoutes = {
    superadmin: '/superadmin',
    landlord: '/landlord',
    tenant: '/tenant',
    staff: '/staff',
  };

  return <Navigate to={roleRoutes[userRole] || '/login'} replace />;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Dashboard redirect */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardRedirect />
            </ProtectedRoute>
          }
        />

        {/* Super Admin routes */}
        <Route
          path="/superadmin/*"
          element={
            <ProtectedRoute allowedRoles={['superadmin']}>
              <Suspense fallback={<PageLoader />}>
                <SuperAdminModule />
              </Suspense>
            </ProtectedRoute>
          }
        />

        {/* Landlord routes */}
        <Route
          path="/landlord/*"
          element={
            <ProtectedRoute allowedRoles={['landlord']}>
              <Suspense fallback={<PageLoader />}>
                <LandlordModule />
              </Suspense>
            </ProtectedRoute>
          }
        />

        {/* Tenant routes */}
        <Route
          path="/tenant/*"
          element={
            <ProtectedRoute allowedRoles={['tenant']}>
              <Suspense fallback={<PageLoader />}>
                <TenantModule />
              </Suspense>
            </ProtectedRoute>
          }
        />

        {/* Staff routes */}
        <Route
          path="/staff/*"
          element={
            <ProtectedRoute allowedRoles={['staff']}>
              <Suspense fallback={<PageLoader />}>
                <StaffModule />
              </Suspense>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
