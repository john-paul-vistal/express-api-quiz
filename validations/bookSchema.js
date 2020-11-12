const Joi = require("joi");

const BookSchema = Joi.object({
    title: Joi.string().required().min(2).max(100),
    author: Joi.string().required().min(2).max(50),
    genre: Joi.string().required().min(2).max(100),
    yearPublished: Joi.string().required().isoDate(),
    price: Joi.string().required()
});

module.exports = BookSchema;