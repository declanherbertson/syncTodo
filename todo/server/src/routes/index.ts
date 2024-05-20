import { Express } from 'express';
import mainRoute from './mainRoute';
import listRoute from './listRoute';
import dbAdminRoute from './dbAdminRoute';

const routes = (app: Express) => {
  const API_ROUTE = '/api';

  app.use('/', mainRoute);
  app.use('/list', listRoute);
  app.use('/admin', dbAdminRoute);
};

export default routes;
