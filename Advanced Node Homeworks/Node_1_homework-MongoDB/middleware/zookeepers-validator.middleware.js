import joi from "joi";

const zooKeeperSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().required().min(0),
    location: joi.string().required(),
    isActive: joi.boolean().required(),
});

const zooKeeperValidator = (req, res, next) => {
    const zooKeeperData = req.body;
    const validate = zooKeeperSchema.validate(zooKeeperData);
    if (validate?.error) {
        res.status(400).send(validate?.error?.details[0]?.message);
    } else {
        next();
    }
};

export default zooKeeperValidator;