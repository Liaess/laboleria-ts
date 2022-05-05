import Joi from "joi";

const clientsSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});

export default clientsSchema;
