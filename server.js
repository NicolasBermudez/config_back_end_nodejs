// en scripts debug : ndb app.js

const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./controllers/error.controller");
const AppError = require("./utils/appError");

// creamos una clase

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT || 4000;

    this.paths = {
      transfer: "/api/v1/",
      user: "/api/v1/",
    };

    this.database();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.transfer, transferRouter);

    this.app.use(this.paths.user, usersRouter);

    this.app.all("*", (req, res, next) => {
      return next(
        new AppErrorr(`can't find ${req.originalUrl} on this server`, 404)
      );
    });

    this.app.use(globalErrorHandler);
  }

  database() {
    db.authenticate()
      .then(() => console.log("Database authenticated"))
      .catch((error) => console.log(error));

    db.sync()
      .then(() => console.log("Database synced"))
      .catch((err) => console.log(err));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running on port", this.port);
    });
  }
}

// exportamos el servidor
module.exports = Server;
