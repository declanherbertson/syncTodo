import express from 'express';
import { kv } from '@vercel/kv';


const router = express.Router();

router.get('/', async (req, res) => {
  const user = await kv.hgetall('user:me');
  return res.status(200).json(user);
});

export default router;
