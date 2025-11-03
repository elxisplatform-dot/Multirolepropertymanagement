import { Building2, Users, CreditCard, Wrench, TrendingUp, Shield, Menu, X } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config/env';

export function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 border rounded flex items-center justify-center"
                style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
              >
                <span className="text-[10px] text-white">PF</span>
              </div>
              <span className="text-gray-800">PropertyFlow</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">About</a>
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-50 text-sm"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-4 py-2 text-white border-2 rounded hover:opacity-90 text-sm"
                style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t-2 border-gray-200 space-y-3">
              <a href="#features" className="block text-sm text-gray-700 hover:text-gray-900 py-2">Features</a>
              <a href="#pricing" className="block text-sm text-gray-700 hover:text-gray-900 py-2">Pricing</a>
              <a href="#about" className="block text-sm text-gray-700 hover:text-gray-900 py-2">About</a>
              <button 
                onClick={() => navigate('/login')}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-50 text-sm"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="w-full px-4 py-2 text-white border-2 rounded hover:opacity-90 text-sm"
                style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-gray-200 border-2 border-gray-300 rounded-full mb-6">
              <span className="text-xs text-gray-700">Property Management Made Simple</span>
            </div>
            
            <h1 className="text-gray-900 mb-6">
              Manage Properties, Tenants & Payments in One Place
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              PropertyFlow is a complete property management solution for landlords and property managers. 
              Track rent, manage maintenance requests, and communicate with tenants seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="w-full sm:w-auto px-8 py-3 text-white border-2 rounded hover:opacity-90"
                style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
              >
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 rounded hover:bg-gray-50">
                Watch Demo
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">No credit card required • 14-day free trial</p>
          </div>

          {/* Hero Wireframe */}
          <div className="mt-12 max-w-5xl mx-auto">
            <Card className="p-4 bg-white border-2 border-gray-200">
              <div className="aspect-video bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 border-2 rounded mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
                  >
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">[Dashboard Preview]</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-white border-y-2 border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Everything You Need to Manage Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for landlords, property managers, and real estate professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Property Management',
                description: 'Track all your properties, units, and vacancies in one centralized dashboard',
              },
              {
                icon: Users,
                title: 'Tenant Portal',
                description: 'Give tenants access to pay rent, submit maintenance requests, and view documents',
              },
              {
                icon: CreditCard,
                title: 'Payment Processing',
                description: 'Collect rent online with automated reminders and tracking of payment history',
              },
              {
                icon: Wrench,
                title: 'Maintenance Tracking',
                description: 'Manage work orders, assign vendors, and track repair history for each property',
              },
              {
                icon: TrendingUp,
                title: 'Financial Reports',
                description: 'Generate income statements, expense reports, and tax summaries automatically',
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'Bank-level security with automated compliance tracking and document storage',
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-colors">
                <div 
                  className="w-12 h-12 border-2 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${config.app.primaryColor}20`, borderColor: config.app.primaryColor }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: config.app.primaryColor }} />
                </div>
                <h3 className="text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10,000+', label: 'Properties Managed' },
              { value: '50,000+', label: 'Active Tenants' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <Card key={i} className="p-6 text-center bg-white border-2 border-gray-200">
                <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 bg-white border-y-2 border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Choose the plan that fits your portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                features: ['Up to 5 properties', 'Unlimited tenants', 'Payment processing', 'Basic reporting', 'Email support'],
                highlighted: false
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                features: ['Up to 25 properties', 'Unlimited tenants', 'Payment processing', 'Advanced reporting', 'Priority support', 'Custom branding'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: ['Unlimited properties', 'Unlimited tenants', 'Payment processing', 'Custom integrations', 'Dedicated support', 'White-label option'],
                highlighted: false
              },
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-6 ${plan.highlighted ? 'border-2' : 'bg-gray-50 border-2 border-gray-200'}`}
                style={plan.highlighted ? { backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor } : {}}
              >
                <div className={`text-xs ${plan.highlighted ? 'text-white/80' : 'text-gray-600'} mb-2`}>{plan.name}</div>
                <div className="mb-6">
                  <span className={`text-3xl ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'} flex items-start gap-2`}>
                      <span className="text-xs mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => navigate('/register')}
                  className={`w-full py-3 border-2 rounded ${
                    plan.highlighted 
                      ? 'bg-white text-gray-900 border-white hover:bg-gray-100' 
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                  style={!plan.highlighted ? { color: config.app.primaryColor, borderColor: config.app.primaryColor } : {}}
                >
                  Get Started
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card 
            className="p-8 md:p-12 border-2 text-center"
            style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
          >
            <h2 className="text-white mb-4">Ready to Simplify Property Management?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of landlords and property managers who trust PropertyFlow 
              to manage their properties efficiently.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 border-2 border-white rounded hover:bg-gray-100"
              >
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white rounded hover:bg-white/10">
                Contact Sales
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-gray-800 mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">API</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 border rounded flex items-center justify-center"
                style={{ backgroundColor: config.app.primaryColor, borderColor: config.app.primaryColor }}
              >
                <span className="text-[10px] text-white">PF</span>
              </div>
              <span className="text-sm text-gray-600">© 2025 PropertyFlow. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
