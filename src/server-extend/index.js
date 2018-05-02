import ensureHttps from './ensure-https';

const validateServerSetup = () => {
  const GRAPHQL_URL = process.env.GRAPHQL_URL;

  if (!GRAPHQL_URL) {
    console.warn(`❗️ Oops, it looks like you need to set your GRAPHQL_URL environment variable. Please see the readme.\n`);
  }
}

const serverExtend = (app) => {
  require('dotenv').config();
  app = ensureHttps(app);

  validateServerSetup();

  return app;
}


export default serverExtend;