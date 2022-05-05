import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import Unauthorized from "../errors/unauthorized";
import UnprocessableEntity from "../errors/unprocessableEntity";

export function validateSchemaMiddleware(schema: Schema) {
  return function (req: Request, _res: Response, next: NextFunction) {
    const { error } = schema.validate(req.body);
    if (error) {
      if (error.details[0].path[0] === "image") {
        throw new UnprocessableEntity();
      }
      throw new Unauthorized();
    }
    next();
  };
}
