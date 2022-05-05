import Joi from "joi";

const ordersSchema = Joi.object({
  clientId: Joi.number().positive().required(),
  cakeId: Joi.number().positive().required(),
  quantity: Joi.number().positive().max(5).required(),
});

export default ordersSchema;
