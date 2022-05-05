import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import Conflict from "../errors/conflict";
import NotFound from "../errors/NotFound";
import Unauthorized from "../errors/unauthorized";
import UnprocessableEntity from "../errors/unprocessableEntity";

export default function errorHandlingMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof UnprocessableEntity) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
      message: err.message,
    });
  }

  if (err instanceof Unauthorized) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  if (err instanceof Conflict) {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err instanceof NotFound) {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: "Error interno no servidor!",
  });
}
