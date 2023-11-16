function getSettings(req, res, next){
    res.json({
        email:"test@123.com",
    }) 
}

module.exports = {getSettings}