import { Router } from "express";
import * as controller from "../controllers/cakesController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import cakesSchema from "../schemas/cakesSchema";

const cakesRouter = Router();

cakesRouter.post(
  "/cakes",
  validateSchemaMiddleware(cakesSchema),
  controller.createCake
);

export default cakesRouter;
