import express from 'express';
import { sql } from "@vercel/postgres";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notesId = (req.query.id || 'NONE_SENTINEL') as string;
    // TODO santize notesId
    const query = sql`
      SELECT * FROM notes WHERE note_id = ${notesId};
    `;
    const { rows } = await query;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'error fetching notes' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { note_id, notes } = req.body;
    // TODO santize note_id and strings
    const query = sql`
      INSERT INTO notes (note_id, strings) VALUES (${note_id}, ${notes});
    `;
    const { rows } = await query;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'error create notes' });
  }
});

export default router;
