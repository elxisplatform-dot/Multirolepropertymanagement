import { useAuth } from '../../../context/AuthContext';
import { USER_ROLES } from '../utils/constants';
import type { UserRole } from '../../../config/supabaseClient';

export function useRole() {
  const { userRole } = useAuth();

  const isSuperAdmin = userRole === USER_ROLES.SUPERADMIN;
  const isLandlord = userRole === USER_ROLES.LANDLORD;
  const isTenant = userRole === USER_ROLES.TENANT;
  const isStaff = userRole === USER_ROLES.STAFF;

  const hasRole = (role: UserRole) => userRole === role;
  const hasAnyRole = (roles: UserRole[]) => roles.includes(userRole as UserRole);

  return {
    userRole,
    isSuperAdmin,
    isLandlord,
    isTenant,
    isStaff,
    hasRole,
    hasAnyRole,
  };
}
