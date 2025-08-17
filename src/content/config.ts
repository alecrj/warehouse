import { defineCollection, z } from 'astro:content';

const warehousesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    price: z.string(),
    size: z.number(),
    location: z.string(),
    address: z.string(),
    features: z.array(z.string()),
    images: z.array(z.string()),
    description: z.string(),
    availability: z.enum(['available', 'leased', 'pending']),
    featured: z.boolean().default(false),
    createdAt: z.string().default(() => new Date().toISOString()),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const leadsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    company: z.string().optional(),
    propertyInterested: z.string().optional(),
    message: z.string(),
    source: z.string().default('website'),
    status: z.enum(['new', 'contacted', 'qualified', 'closed']).default('new'),
    notes: z.string().optional(),
    createdAt: z.string().default(() => new Date().toISOString()),
  }),
});

export const collections = {
  'warehouses': warehousesCollection,
  'leads': leadsCollection,
};