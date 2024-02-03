const Joi = require("joi");

const createUserSchema = Joi.object({
    userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().allow('', null), // If mobile is optional and can be empty
    displayPicture: Joi.string().allow('', null) // If display picture is optional and can be empty or a URL
    // Add other fields as necessary
});

module.exports = {
    createUserSchema,
};
