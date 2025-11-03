import { createClient } from '@supabase/supabase-js';
import { config } from './env';

export const supabase = createClient(config.supabase.url, config.supabase.anonKey);

// Types for database tables
export type UserRole = 'superadmin' | 'landlord' | 'tenant' | 'staff';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  landlord_id: string;
  name: string;
  address: string;
  units: number;
  created_at: string;
}

export interface Tenant {
  id: string;
  property_id: string;
  full_name: string;
  email: string;
  phone: string;
  lease_start: string;
  lease_end: string;
}

export interface Payment {
  id: string;
  tenant_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  payment_date: string;
  reference: string;
}

export interface MaintenanceRequest {
  id: string;
  property_id: string;
  tenant_id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  created_at: string;
}
