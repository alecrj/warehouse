/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Warehouse listing type
export interface Warehouse {
  title: string;
  slug: string;
  price: string;
  size: number;
  location: string;
  address: string;
  features: string[];
  images: string[];
  description: string;
  availability: 'available' | 'leased' | 'pending';
  featured: boolean;
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
}

// Lead type for CRM
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  propertyInterested?: string;
  message: string;
  source: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
}