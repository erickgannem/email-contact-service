import App from './app.js';

const app = new App().server;
const PORT = process.env.PORT || 3030;

app.listen(PORT, process.stdout.write(`Server listening on port: ${PORT} \n`));
