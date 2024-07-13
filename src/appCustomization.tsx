import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Mail, FileText, Briefcase } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyManagementComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Office Building B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Retail Space C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-30' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending' },
    { id: 2, property: 'Office Building B', amount: 7500, status: 'Paid' },
    { id: 3, property: 'Retail Space C', amount: 3000, status: 'Overdue' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Group - Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#1E40AF",
  secondaryColor: "#3B82F6",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyManagement",
        label: "Property Management",
        description: "Manage property occupancy and actions",
        icon: Briefcase
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#1E40AF", "#3B82F6", "#93C5FD"],
        data: [
          { name: 'Vacant', value: 30 },
          { name: 'Occupied', value: 50 },
          { name: 'In Process', value: 20 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#1E40AF"],
        data: [
          { name: 'Pending', count: 15 },
          { name: 'Paid', count: 25 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#1E40AF"],
        data: [
          { year: '2020', growth: 100 },
          { year: '2021', growth: 200 },
          { year: '2022', growth: 400 },
          { year: '2023', growth: 800 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retail Chain", industry: "Retail" },
    { id: "client2", name: "Office Park Management", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Center Group", industry: "Retail" },
  ],
  features: {
    propertyManagement: true,
    invoiceProcessing: true,
    clientRelationshipManagement: true,
    taxAdvice: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyManagement: PropertyManagementComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Retail', 'Office', 'Shopping Center'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  actionTypes: ['Occupy', 'Vacate', 'Maintain']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};