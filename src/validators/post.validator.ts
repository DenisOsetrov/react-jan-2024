// створюємо протоколи валідації за допомогою бібл. joi

import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi
        .string()
        .pattern(/^\w{3,400}$/)
        .required()
        .messages({
            "string.pattern.base": "Title must be a word between 4 and 20 characters",
            "any.required": "Title is required",
        }),
    body: Joi
        .string()
        .min(3)
        .max(1000)
        .required()
        .messages({
            "string.min": "Body must be at least 10 characters",
            "string.max": "Body must be less than 1000 characters",
            "any.required": "Body is required",
        }),
    userId: Joi
        .number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "User ID must be a number",
            "number.integer": "User ID must be an integer",
            "number.positive": "User ID must be a positive number",
            "any.required": "User ID is required",
        }),
});