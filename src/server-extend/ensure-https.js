// eslint-disable-next-line prettier/prettier
const isDevelopment = (
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'staging'
);

export default app => {
  // redirect http to https unless isDevelopment
  if (isDevelopment) {
    app.enable('trust proxy');
    app.use((req, res, next) => {
      if (
        req.headers['x-forwarded-proto'] &&
        req.headers['x-forwarded-proto'].toLowerCase() === 'http'
      ) {
        return res.redirect(`https://${req.headers.host}${req.url}`);
      }
      return next();
    });
  }

  return app;
};
