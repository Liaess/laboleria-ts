import { Router } from "express";
import * as controller from "../controllers/clientsController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import clientsSchema from "../schemas/clientsSchema";

const clientsRouter = Router();

clientsRouter.use(
  "/clients",
  validateSchemaMiddleware(clientsSchema),
  controller.createClient
);

export default clientsRouter;
