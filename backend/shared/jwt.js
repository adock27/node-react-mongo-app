const jwt = require("jsonwebtoken");

exports.sign = (email) => {
    return jwt.sign({ email, date: Date.now() }, process.env.SECRET_KEY, {expiresIn: "24h"});
};


exports.authApply = () => {
    return (req, res, next) => {
        // Example token = Bearer oafasof89f8a0s-fafjalfjalfa
        const token = req.headers?.authorization.split(' ')[1];
        let error =  false;
        if (!token) {
            error =  true;
        } else {
            const verify = jwt.verify(token, process.env.SECRET_KEY);
            if (!verify) {
                error = true;
            }
        }

        if (error) {
            res.status(401).send({ msg: "Auth failed" });
        } else {
            next();
        }
    };
};