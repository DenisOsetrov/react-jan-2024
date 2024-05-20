// створюємо протоколи валідації за допомогою бібл. joi

import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi
        .string()
        .pattern(/^[\wА-Яа-яЁёЇїІіЄєҐґ\s\.,!?;:()\'\"-]{3,400}$/)  // всі символи латиниці і кирилиці та пробіли
        .required()
        .messages({
            "string.pattern.base": "Title must be a word between 3 and 400 characters",
            "any.required": "Title is required",
        }),
    body: Joi
        .string()
        .min(5)
        .max(1000)
        .required()
        .messages({
            "string.min": "Body must be at least 5 characters long",
            "string.max": "Body must be at most 1000 characters long",
            "any.required": "Body is required",
        }),
    userId: Joi
        .number()
        .max(10)
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "User ID must be a number",
            "number.max": "User ID must be less than or equal to 100",
            "number.integer": "User ID must be an integer",
            "number.positive": "User ID must be a positive number",
            "any.required": "User ID is required",
        }),
});