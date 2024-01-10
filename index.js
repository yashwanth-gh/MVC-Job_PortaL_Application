import express, { urlencoded } from "express";
import jobRouter from './src/routes/job.route.js';

import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
//* --> Creating Express Server:
const server = express();

//* --> Configuring data movements:
server.use(express.json());
server.use(express.static(path.resolve("src", "public")));
server.use(urlencoded({ extended: true }));

//* --> Setting Ejs Layouts:
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));
server.set("layout", path.resolve("src", "views", "layout"));

server.use(jobRouter);

export default server;