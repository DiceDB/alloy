import { z } from 'zod';

// Schema for normal API responses
const BodySchema = z.object({
  data: z.string(),
});

// Define the schema for an error response
const ErrorSchema = z.object({
  error: z.string(),
});

// Schema for /health endpoint responses
export const HealthSchema = z.object({
  message: z.string(),
});

// Combined schema for normal responses
export const MonoSchema = z.union([BodySchema, ErrorSchema, HealthSchema]);

