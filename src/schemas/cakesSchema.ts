import Joi from "joi";

const cakesSchema = Joi.object({
  name: Joi.string().max(30, "utf8").required(),
  price: Joi.number().positive().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
});

export default cakesSchema;
