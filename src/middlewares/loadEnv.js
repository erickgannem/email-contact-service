export default function loadEnv(dotenv) {
  return function(_, __, next) {
    dotenv.config();
    next();
  }
}
