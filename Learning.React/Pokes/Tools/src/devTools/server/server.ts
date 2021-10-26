import express from 'express';
import cors from 'cors';
import loadApiMocks from './server.util';

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);

const generateSwaggerOpenApi = require('express-oas-generator');

generateSwaggerOpenApi.init(app, {});

app.listen(PORT, async () => {
  console.log( // eslint-disable-line
    `%c API mocks listening http://localhost:${PORT}/api-docs/`,
    'background: #222; color: #bada55'
  );
  await loadApiMocks(app);
});
