import ensureHttps from './ensure-https';

const serverExtend = (app) => {
  require('dotenv').config();
  app = ensureHttps(app);

  return app;
}

export default serverExtend;