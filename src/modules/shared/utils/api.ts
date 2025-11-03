import { supabase } from '../../../config/supabaseClient';
import type { Property, Tenant, Payment, MaintenanceRequest } from '../../../config/supabaseClient';

// Properties API
export const propertiesApi = {
  getAll: async (landlordId?: string) => {
    let query = supabase.from('properties').select('*');
    if (landlordId) {
      query = query.eq('landlord_id', landlordId);
    }
    const { data, error } = await query;
    if (error) throw error;
    return data as Property[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Property;
  },

  create: async (property: Omit<Property, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('properties')
      .insert(property)
      .select()
      .single();
    if (error) throw error;
    return data as Property;
  },

  update: async (id: string, updates: Partial<Property>) => {
    const { data, error } = await supabase
      .from('properties')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Property;
  },

  delete: async (id: string) => {
    const { error } = await supabase.from('properties').delete().eq('id', id);
    if (error) throw error;
  },
};

// Tenants API
export const tenantsApi = {
  getAll: async (propertyId?: string) => {
    let query = supabase.from('tenants').select('*');
    if (propertyId) {
      query = query.eq('property_id', propertyId);
    }
    const { data, error } = await query;
    if (error) throw error;
    return data as Tenant[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Tenant;
  },

  create: async (tenant: Omit<Tenant, 'id'>) => {
    const { data, error } = await supabase
      .from('tenants')
      .insert(tenant)
      .select()
      .single();
    if (error) throw error;
    return data as Tenant;
  },

  update: async (id: string, updates: Partial<Tenant>) => {
    const { data, error } = await supabase
      .from('tenants')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Tenant;
  },

  delete: async (id: string) => {
    const { error } = await supabase.from('tenants').delete().eq('id', id);
    if (error) throw error;
  },
};

// Payments API
export const paymentsApi = {
  getAll: async (tenantId?: string) => {
    let query = supabase.from('payments').select('*');
    if (tenantId) {
      query = query.eq('tenant_id', tenantId);
    }
    const { data, error } = await query.order('payment_date', { ascending: false });
    if (error) throw error;
    return data as Payment[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Payment;
  },

  create: async (payment: Omit<Payment, 'id'>) => {
    const { data, error } = await supabase
      .from('payments')
      .insert(payment)
      .select()
      .single();
    if (error) throw error;
    return data as Payment;
  },

  updateStatus: async (id: string, status: Payment['status']) => {
    const { data, error } = await supabase
      .from('payments')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Payment;
  },
};

// Maintenance API
export const maintenanceApi = {
  getAll: async (propertyId?: string) => {
    let query = supabase.from('maintenance_requests').select('*');
    if (propertyId) {
      query = query.eq('property_id', propertyId);
    }
    const { data, error } = await query.order('created_at', { ascending: false });
    if (error) throw error;
    return data as MaintenanceRequest[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('maintenance_requests')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as MaintenanceRequest;
  },

  create: async (request: Omit<MaintenanceRequest, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('maintenance_requests')
      .insert(request)
      .select()
      .single();
    if (error) throw error;
    return data as MaintenanceRequest;
  },

  updateStatus: async (id: string, status: MaintenanceRequest['status']) => {
    const { data, error } = await supabase
      .from('maintenance_requests')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as MaintenanceRequest;
  },
};
