import { Router } from "express";
import * as controller from "../controllers/clientsController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import clientsSchema from "../schemas/clientsSchema";

const clientsRouter = Router();

clientsRouter.post(
  "/clients",
  validateSchemaMiddleware(clientsSchema),
  controller.createClient
);
clientsRouter.get("/clients/:id/orders", controller.getAllOrdersFromClient);

export default clientsRouter;
