const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function doLogin(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password)

    if (email === "teste@123.com"
        && bcrypt.compareSync(password, "$2a$12$wcvl5qhuiWXJLpOcYHa1MOLETd5fCOoo5bN5FtSgJXq/oFhZVeqIK")) {
            const token = jwt.sign({id: 1}, process.env.JWT_SECRET, {
                expiresIn: parseInt(process.env.JWT_EXPIRES)
            })
        res.json({token});
    }
    else res.sendStatus(401);
}

const blackList = [];

function doLogout(req, res, next) {
    const token = req.headers['authorization'];
    blackList.push(token);
    res.sendStatus(200);
}

function isBlackListed(token){
    return blackList.some(t => t === token);
}

module.exports = {
    doLogin,
    doLogout,
    isBlackListed
}