import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import ordersSchema from "../schemas/ordersSchema";
import * as controller from "../controllers/ordersController";

const ordersRouter = Router();

ordersRouter.post(
  "/order",
  validateSchemaMiddleware(ordersSchema),
  controller.createOrder
);
ordersRouter.get("/order", controller.getOrders);
ordersRouter.get("/order/:id", controller.getOrdersWithId);

export default ordersRouter;
