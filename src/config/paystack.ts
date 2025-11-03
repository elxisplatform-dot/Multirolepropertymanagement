import { config } from './env';

export interface PaystackConfig {
  publicKey: string;
  email: string;
  amount: number;
  reference: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
}

export const initializePayment = (paymentConfig: Omit<PaystackConfig, 'publicKey'>) => {
  // @ts-ignore - PaystackPop is loaded from external script
  const handler = window.PaystackPop?.setup({
    key: config.paystack.publicKey,
    ...paymentConfig,
  });

  return handler?.openIframe();
};

export const verifyPayment = async (reference: string) => {
  // In production, this would call your backend to verify the payment
  // Backend would call: https://api.paystack.co/transaction/verify/:reference
  try {
    const response = await fetch(`/api/payments/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Payment verification failed:', error);
    throw error;
  }
};

// Subscription plans
export const SUBSCRIPTION_PLANS = {
  starter: {
    name: 'Starter',
    price: 2900, // in kobo (₦29)
    features: ['Up to 5 properties', 'Unlimited tenants', 'Basic reporting'],
  },
  professional: {
    name: 'Professional',
    price: 7900, // in kobo (₦79)
    features: ['Up to 25 properties', 'Advanced reporting', 'Priority support'],
  },
  enterprise: {
    name: 'Enterprise',
    price: 0, // Custom pricing
    features: ['Unlimited properties', 'Custom integrations', 'Dedicated support'],
  },
} as const;
