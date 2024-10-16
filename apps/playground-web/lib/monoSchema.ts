import { z } from 'zod';

const BodySchema = z.object({
  data: z.string(),
});

// Define the schema for an error response
const ErrorSchema = z.object({
  error: z.string().nullable(),
});

// Combine the schemas
export const MonoSchema = z.union([BodySchema, ErrorSchema]);
