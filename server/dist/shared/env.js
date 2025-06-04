import { z } from 'zod';
import { config } from 'dotenv';
config();
const envSchema = z.object({
    PORT: z.string().transform((v) => Number(v)),
    JWT_KEY: z.string(),
    JWT_KEY_EXPIRES: z.string().transform((v) => Number(v)),
    JWT_REFRESH_KEY_EXPIRES: z.string().transform((v) => Number(v)),
    DB_URL: z.string(),
});
export const env = envSchema.parse(process.env);
//# sourceMappingURL=env.js.map