import { Router } from 'express';
import Product from '../model/product.model.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { offset = '', limit = '' } = req.query;
    const query = Product.find().skip(Number(offset));
    const products = await (limit ? query.limit(Number(limit)) : query);
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
