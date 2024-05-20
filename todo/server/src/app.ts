import path from 'path';
import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 4000;

routes(app);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);

export default app;
