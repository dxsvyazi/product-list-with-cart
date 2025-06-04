import { z } from 'zod';
import { fixKeys } from './utils/utils';

const envSchema = z.object({
  SERVER: z.string(),
  PRODUCT_PER_PAGE: z.string().transform((v) => Number(v)),
});

export const env = envSchema.parse(
  fixKeys(import.meta.env, (key) => key.replace('VITE_', ''))
);
