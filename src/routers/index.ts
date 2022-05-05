import { Router } from "express";
import cakesRouter from "./cakesRouter";
import clientsRouter from "./clientsRouter";
import ordersRouter from "./ordersRouter";

const router = Router();

router.use(cakesRouter);
router.use(clientsRouter);
router.use(ordersRouter);

export default router;
