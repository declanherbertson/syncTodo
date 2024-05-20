import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

routes(app);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);

export default app;
