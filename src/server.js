import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import morgan from 'morgan';
import Database from './config/db';
Database.setup();
class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors()); // Modify According To The Use Case
    this.app.use(helmet());
    this.app.use(morgan(":method :url :response-time"));
    routes.forEach((router, path) => {
      this.app.use(path, router);
    });
    this.app.listen(5000, (err) => {
      if (!err) console.log("running successfully");
      else console.log(err);
    });
  }
}

export default Server;
