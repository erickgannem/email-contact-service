import { Router } from 'express';
import ContactController from './controllers/ContactController.js';

const routes = Router();

routes.post('/contact', ContactController.send);

export default routes;
