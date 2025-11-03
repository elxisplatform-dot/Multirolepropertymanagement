export const ROUTES = {
  // Public routes
  LANDING: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  
  // Super Admin routes
  SUPERADMIN_DASHBOARD: '/superadmin',
  SUPERADMIN_SETTINGS: '/superadmin/settings',
  SUPERADMIN_BILLING: '/superadmin/billing',
  SUPERADMIN_WHITELABEL: '/superadmin/whitelabel',
  
  // Landlord routes
  LANDLORD_DASHBOARD: '/landlord',
  LANDLORD_PROPERTIES: '/landlord/properties',
  LANDLORD_PROPERTIES_ADD: '/landlord/properties/add',
  LANDLORD_PROPERTY_DETAILS: '/landlord/properties/:id',
  LANDLORD_TENANTS: '/landlord/tenants',
  LANDLORD_TENANTS_ADD: '/landlord/tenants/add',
  LANDLORD_PAYMENTS: '/landlord/payments',
  LANDLORD_MAINTENANCE: '/landlord/maintenance',
  
  // Tenant routes
  TENANT_DASHBOARD: '/tenant',
  TENANT_LEASE: '/tenant/lease',
  TENANT_MAINTENANCE: '/tenant/maintenance',
  TENANT_PAYMENTS: '/tenant/payments',
  
  // Staff routes
  STAFF_DASHBOARD: '/staff',
  STAFF_TASKS: '/staff/tasks',
  STAFF_MAINTENANCE: '/staff/maintenance',
  
  // Error routes
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/unauthorized',
} as const;

export const USER_ROLES = {
  SUPERADMIN: 'superadmin',
  LANDLORD: 'landlord',
  TENANT: 'tenant',
  STAFF: 'staff',
} as const;

export const MAINTENANCE_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
} as const;

export const MAINTENANCE_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

export const COLORS = {
  PRIMARY: '#5d866c',
  SECONDARY: '#4a6b56',
  ACCENT: '#7aa086',
  LIGHT: '#e8f0eb',
  DARK: '#2d4033',
} as const;
