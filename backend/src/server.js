import { createApp } from './app.js';
import { initializeDatabase } from './database/index.js';
import { appConfig } from './config/database.js';

const bootstrap = async () => {
  try {
    await initializeDatabase();
    const app = createApp();
    app.listen(appConfig.port, () => {
      console.log(`🚀 API rodando na porta ${appConfig.port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar aplicação', error);
    process.exit(1);
  }
};

bootstrap();
