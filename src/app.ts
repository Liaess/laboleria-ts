import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import "./setup";
import routers from "./routers";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";

const app = express();
app.use(json());
app.use(cors());
app.use(routers);
app.use(errorHandlingMiddleware);

app.get("/health", (_req, res) => {
  res.status(200).send("Server running");
});

export default app;
