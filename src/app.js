import express from "express";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import moduleAlias from "module-alias";
import { authMiddleware } from "./modules/auth/auth.middleware.js";
import routes from "./routes/index.js";

dotenv.config();
moduleAlias.register();

const app = express();

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(authMiddleware);

// Routes
app.use("/api", routes);
