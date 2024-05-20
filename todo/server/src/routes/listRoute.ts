import express from 'express';
import { sql } from "@vercel/postgres";

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Test');
});

router.post('/', async (req, res) => {
  res.send('Test');
});

export default router;
