import express, { urlencoded } from "express";
import jobRouter from './src/routes/job.route.js';
import authRouter from './src/routes/auth.route.js'

import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from "express-session";
import cookieParser from "cookie-parser";

//* --> Creating Express Server:
const server = express();


//* --> Cookie Parser
server.use(cookieParser())

//* --> Configuring data movements:
server.use(express.json());
server.use(express.static(path.resolve("src", "public")));
server.use(urlencoded({ extended: true }));

//* --> Setting Ejs Layouts:
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));
server.set("layout", path.resolve("src", "views", "layout"));

//* --> Express session setup:
server.use(session({
    secret: 'YashwanthKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

server.use(jobRouter);
server.use(authRouter)

export default server;