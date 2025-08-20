/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Enhanced GSAP Types - Fix for TypeScript errors
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

// Fix for GSAP Utils typing
declare module 'gsap' {
  namespace gsap {
    interface Utils {
      toArray<T = Element>(target: string | NodeList | Element[] | Element): T[];
    }
  }
}

// Fix for GSAP forEach callbacks
interface GSAPTarget extends Element {
  [key: string]: any;
}

// Enhanced event handler types
interface TypedEventListener<T extends Element> {
  (this: T, e: Event): void;
}

interface TypedMouseEventListener<T extends Element> {
  (this: T, e: MouseEvent): void;
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

// Enhanced Warehouse listing type
export interface Warehouse {
  id: string;
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
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  amenities?: string[];
  contactInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}

// Enhanced Lead type for CRM
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
  updatedAt?: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  priority?: 'low' | 'medium' | 'high';
  notes?: string[];
  followUpDate?: string;
  assignedTo?: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  propertyType: string;
  message: string;
  source: string;
}

export interface SearchFilters {
  minSize?: number;
  maxSize?: number;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  features?: string[];
  availability?: 'available' | 'leased' | 'pending';
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Animation helper types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export interface ScrollTriggerConfig {
  trigger: string | Element;
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

// Enhanced utility types for better type safety
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

// Theme and styling types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  success: string;
  warning: string;
  error: string;
}

export interface BreakpointConfig {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}