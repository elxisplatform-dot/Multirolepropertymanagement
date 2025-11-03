// Environment configuration
export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY',
  },
  paystack: {
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'YOUR_PAYSTACK_PUBLIC_KEY',
  },
  app: {
    name: 'PropertyFlow',
    primaryColor: '#5d866c',
  },
} as const;
