export default function loadEnv(next, dotenv) {
  dotenv.config();
  next();
}