import { Express } from 'express';
import mainRoute from './mainRoute';

const routes = (app: Express) => {
  const API_ROUTE = '/api';

  app.use('/', mainRoute);
};

export default routes;
