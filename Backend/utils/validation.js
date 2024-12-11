const Joi = require('joi');

exports.validateSignupInput = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .required()
            .trim(),
        email: Joi.string()
            .email()
            .required()
            .trim()
            .lowercase(),
        password: Joi.string()
            .min(6)
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .messages({
                'string.pattern.base': 'Password must contain only letters and numbers'
            })
    });

    return schema.validate(data);
};

exports.validateLoginInput = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required()
            .trim()
            .lowercase(),
        password: Joi.string()
            .required()
    });

    return schema.validate(data);
};

exports.validateProfileUpdate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().trim(),
        lastName: Joi.string().trim(),
        email: Joi.string().email().trim().lowercase(),
        username: Joi.string().min(3).max(30).trim()
    });

    return schema.validate(data);
};

exports.validateIssuingAuthorityInput = (data) => {
    const schema = Joi.object({
        organizationName: Joi.string()
            .required()
            .trim()
            .min(3)
            .max(100),
        registrationNumber: Joi.string()
            .required()
            .trim(),
        email: Joi.string()
            .email()
            .required()
            .trim()
            .lowercase(),
        password: Joi.string()
            .min(6)
            .required(),
        address: Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            country: Joi.string().required(),
            postalCode: Joi.string().required()
        }),
        contactNumber: Joi.string()
            .required()
            .pattern(/^\+?[\d\s-]+$/),
        authorizedPersonName: Joi.string()
            .required()
            .trim(),
        authorizedPersonPosition: Joi.string()
            .required()
            .trim()
    });

    return schema.validate(data);
}; 