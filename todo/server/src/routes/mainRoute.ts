import express from 'express';
import { kv } from '@vercel/kv';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test 🔥');
});

export default router;
