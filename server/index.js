const url = require("url");
const throng = require("throng");
const mongoose = require("mongoose");

const app = require("./app");
const config = require("./config/keys");

const mongoHost = new url.URL(config.MONGO_URI).host;

const startServer = async function () {
  const mongooseOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise,
  };

  try {
    await Promise.all([
      mongoose.connect(config.MONGO_URI, mongooseOptions),
      app.listen(config.PORT),
    ]);

    // eslint-disable-next-line no-console
    console.log(
      `Server has started on port: ${config.PORT}, connected to mongo at ${mongoHost}`
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Could not start the app: `, error);
  }
};

// Make Node.js clustered for beter multi-core performance
throng(
  {
    workers: config.WORKERS,
    lifetime: Infinity,
  },
  startServer
);
