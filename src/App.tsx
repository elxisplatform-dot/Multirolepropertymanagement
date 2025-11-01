import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { SuperAdminDashboard } from './components/SuperAdminDashboard';
import { LandlordDashboard } from './components/LandlordDashboard';
import { TenantDashboard } from './components/TenantDashboard';
import { PropertiesList } from './components/PropertiesList';
import { AddProperty } from './components/AddProperty';
import { PropertyDetails } from './components/PropertyDetails';
import { TenantsList } from './components/TenantsList';
import { AddTenant } from './components/AddTenant';
import { PaymentsList } from './components/PaymentsList';
import { MaintenanceList } from './components/MaintenanceList';
import { ComponentLibrary } from './components/ComponentLibrary';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [userRole, setUserRole] = useState<'superadmin' | 'landlord' | 'tenant' | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentScreen} />;
      case 'login':
        return <Login onNavigate={setCurrentScreen} setUserRole={setUserRole} />;
      case 'superadmin-dashboard':
        return <SuperAdminDashboard onNavigate={setCurrentScreen} />;
      case 'landlord-dashboard':
        return <LandlordDashboard onNavigate={setCurrentScreen} />;
      case 'tenant-dashboard':
        return <TenantDashboard onNavigate={setCurrentScreen} />;
      case 'properties-list':
        return <PropertiesList onNavigate={setCurrentScreen} />;
      case 'add-property':
        return <AddProperty onNavigate={setCurrentScreen} />;
      case 'property-details':
        return <PropertyDetails onNavigate={setCurrentScreen} />;
      case 'tenants-list':
        return <TenantsList onNavigate={setCurrentScreen} />;
      case 'add-tenant':
        return <AddTenant onNavigate={setCurrentScreen} />;
      case 'payments-list':
        return <PaymentsList onNavigate={setCurrentScreen} />;
      case 'maintenance-list':
        return <MaintenanceList onNavigate={setCurrentScreen} />;
      case 'components':
        return <ComponentLibrary onNavigate={setCurrentScreen} />;
      default:
        return <Login onNavigate={setCurrentScreen} setUserRole={setUserRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      
      {/* Wireframe Navigation Helper */}
      <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
        <div className="text-xs mb-2">Navigation:</div>
        <select 
          className="w-full p-2 border border-gray-400 rounded text-xs"
          value={currentScreen}
          onChange={(e) => setCurrentScreen(e.target.value)}
        >
          <optgroup label="Marketing">
            <option value="landing">Landing Page</option>
          </optgroup>
          <optgroup label="Auth Flow">
            <option value="login">Login</option>
          </optgroup>
          <optgroup label="Dashboards">
            <option value="superadmin-dashboard">Super Admin Dashboard</option>
            <option value="landlord-dashboard">Landlord Dashboard</option>
            <option value="tenant-dashboard">Tenant Dashboard</option>
          </optgroup>
          <optgroup label="Properties">
            <option value="properties-list">Properties List</option>
            <option value="add-property">Add Property</option>
            <option value="property-details">Property Details</option>
          </optgroup>
          <optgroup label="Tenants">
            <option value="tenants-list">Tenants List</option>
            <option value="add-tenant">Add Tenant</option>
          </optgroup>
          <optgroup label="Financial">
            <option value="payments-list">Payments</option>
          </optgroup>
          <optgroup label="Maintenance">
            <option value="maintenance-list">Maintenance Requests</option>
          </optgroup>
          <optgroup label="Design System">
            <option value="components">Component Library</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
