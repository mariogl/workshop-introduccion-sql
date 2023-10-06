/* eslint-disable @typescript-eslint/naming-convention */
import Joi from "joi";

const envSchema = Joi.object({
  DB_URL: Joi.string().required(),
  PORT: Joi.string().required(),
}).unknown();

export default envSchema;
