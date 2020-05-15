const requiresLogin = (req, res, next) => {
    if(req.session.user) {
        next()
    } else {
        res.status(401).json('You have to loggin')
    }
}

module.exports = {requiresLogin}