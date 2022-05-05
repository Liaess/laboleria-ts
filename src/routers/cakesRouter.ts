import { Router } from "express";
import * as controller from "../controllers/cakesController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import cakesSchema from "../schemas/cakesSchema";

const cakesRouter = Router();

cakesRouter.use(
  "/cakes",
  validateSchemaMiddleware(cakesSchema),
  controller.createCake
);

export default cakesRouter;
