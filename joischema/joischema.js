const joi = require('joi');

module.exports.productSchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  price: joi.number().min(0).required(),
  desc: joi.string().required()
});

module.exports.reviewSchema = joi.object({});