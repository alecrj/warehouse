/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// GSAP Types - Fix for TypeScript errors
declare global {
  interface Window {
    gsap: typeof import('gsap').gsap;
    ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
    ScrollToPlugin: typeof import('gsap/ScrollToPlugin').ScrollToPlugin;
  }
  
  const gsap: typeof import('gsap').gsap;
  const ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  const ScrollToPlugin: typeof import('gsap/ScrollToPlugin').ScrollToPlugin;
}

// Netlify Identity Widget
interface NetlifyIdentity {
  on(event: 'init', callback: (user: any) => void): void;
  on(event: 'login', callback: () => void): void;
  on(event: 'logout', callback: () => void): void;
  on(event: 'error', callback: (err: Error) => void): void;
  on(event: 'open', callback: () => void): void;
  on(event: 'close', callback: () => void): void;
  open(): void;
  close(): void;
  currentUser(): any;
  logout(): void;
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
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