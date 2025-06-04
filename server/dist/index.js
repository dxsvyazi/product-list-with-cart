import { fileURLToPath } from 'url';
import { connect } from 'mongoose';
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import productsRouter from './routers/product.router.js';
import authRouter from './routers/auth.router.js';
import { env } from './shared/env.js';
connect(env.DB_URL);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.resolve(dirname(__filename), '..'));
const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/api/products', productsRouter);
app.use('/auth', authRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(env.PORT, () => {
    console.log(`Server started on port ${env.PORT};`);
});
//# sourceMappingURL=index.js.map