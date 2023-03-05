const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { authApply, sign } = require("../shared/jwt");
// constraseña
const bcrypt = require('bcrypt');

// validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    // validate user
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({ error: 'Email ya registrado' })
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})



router.post('/login', async (req, res) => {


    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.json({ error: 'llenar todos los campos' })



    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (!user) return res.json({ error: 'Correo no registrado' });


    console.log({ db_password: user.password });
    console.log({ body_password: req.body.password });

    if (req.body.password !== user.password) return res.json({ error: 'Contraseña no coincide' })

    const token = sign(req.body.email)
    console.log(token);
    res.json({ jwt: token });
    return true
})


router.post('/token', authApply(), function (req, res) {
    return res.status(200).send({msg: "Hello World"});
});


module.exports = router;