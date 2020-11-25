import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes.js';
import loadEnv from './middlewares/loadEnv.js';

export default class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use((_, __, next) => loadEnv(next, dotenv));
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}
