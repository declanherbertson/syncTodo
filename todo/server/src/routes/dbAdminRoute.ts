import express from 'express';
import { sql, db } from "@vercel/postgres";

async function createTables() {
  const query = sql`
    CREATE TABLE IF NOT EXISTS notes (
      note_id VARCHAR(255),
      strings TEXT[] NOT NULL,
      primary key (note_id)
    );
  `;
  const { rows } = await query;
  console.log('Table created successfully');
}

async function seeTables() {
  const query = sql`
    SELECT * FROM pg_tables;
  `;
  const { rows } = await query;
  return rows;
}

async function listNotes() {
  const query = sql`
    SELECT * FROM notes;
  `;
  const { rows } = await query;
  return rows;
}

const router = express.Router();

router.get('/create', async (req, res) => {
  try {
    await createTables();
    res.send("Table created successfully");
  }
  catch (error) {
    res.send("Error creating table");
  }
});

router.get('/list', async (req, res) => {
  try {
    const rows = await seeTables();
    res.status(200).json(rows);
  }
  catch (error) {
    res.send("Error listing tables");
  }
});

router.get('/notes', async (req, res) => {
  try {
    const rows = await listNotes();
    res.status(200).json(rows);
  }
  catch (error) {
    res.send("Error listing notes");
  }
});

router.get('/dropNotes', async (req, res) => {
  try {
    const query = sql`
      DROP TABLE notes;
    `;
    const { rows } = await query;
    res.send("Table dropped successfully");
  }
  catch (error) {
    res.send("Error dropping table");
  }
});

router.post('/sql', async (req, res) => {
  try {
    const client = await db.connect();
    const { query } = req.body;
    const { rows } = await client.sql`${query}`;
    res.status(200).json(rows);
  }
  catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});



export default router;
