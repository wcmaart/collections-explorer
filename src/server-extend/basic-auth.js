const path = require('path');
const fs = require('fs');
const htpasswdFilePath = path.resolve(__dirname, '../../.htpasswd');
const auth = require('http-auth');

export default (app) => {
  // if SHOULD_USE_BASIC_AUTH is true, and .htpasswd file exists, set up authentication
  if (process.env.SHOULD_USE_BASIC_AUTH && fs.existsSync(htpasswdFilePath)) {
    const basic = auth.basic({
      file: htpasswdFilePath
    })
    app.use(auth.connect(basic))
  }

  return app;
};
