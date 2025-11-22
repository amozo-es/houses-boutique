import type { CollectionEntry } from 'astro:content';
import { z, defineCollection } from 'astro:content';

// Define collection schemas
const propertiesSchema = z.object({
  title: z.string(),
  zone: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  currency: z.string().default('USD'),
  bedrooms: z.number(),
  bathrooms: z.number(),
  size: z.number(), // in square meters
  sizeUnit: z.string().default('m²'),
  description: z.string(),
  featured: z.boolean().default(false),
  status: z.enum(['available', 'pending', 'sold']).default('available'),
  image: z.string(),
  images: z.array(z.string()).optional(),
  location: z.object({
    address: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }),
  amenities: z.array(z.string()).optional(),
  facilities: z.array(z.string()).optional(),
  yearBuilt: z.number().optional(),
  parking: z.number().optional(),
  'agent-id': z.string().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date())
});

const zonesSchema = z.object({
  title: z.string(),
  description: z.string(),
  overview: z.string(),
  image: z.string(),
  mapEmbedUrl: z.string().optional(),
  coordinates: z.object({
    center: z.object({
      lat: z.number(),
      lng: z.number()
    }),
    zoom: z.number().default(14)
  }).optional(),
  features: z.array(z.string()).optional(),
  averagePrice: z.number().optional(),
  properties: z.array(z.string()).optional() // Array of property slugs
});

const agentsSchema = z.object({
  'agent-id': z.string(),
  title: z.string(),
  name: z.string(),
  jobTitle: z.string(),
  bio: z.string(),
  email: z.string(),
  phone: z.string(),
  image: z.string(),
  languages: z.array(z.string()).optional(),
  specialties: z.array(z.string()).optional(),
  experience: z.string().optional()
});

// Define collections
const propertiesCollection = defineCollection({ schema: propertiesSchema });
const zonesCollection = defineCollection({ schema: zonesSchema });
const agentsCollection = defineCollection({ schema: agentsSchema });

// Export collection definitions
export const collections = {
  properties: propertiesCollection,
  zones: zonesCollection,
  agents: agentsCollection
};