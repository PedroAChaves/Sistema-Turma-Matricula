import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger.js';
import routes from './routes/index.js';
import { appConfig } from './config/database.js';

export const createApp = () => {
  const app = express();

  app.use(cors({ origin: appConfig.frontendUrl.split(',') }));
  app.use(express.json());

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use('/api', routes);

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));

  return app;
};
