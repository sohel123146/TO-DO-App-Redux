var jwt = require('jsonwebtoken');
const JWT_SECRET = "soheldeve$loper"

const fetchuser = (req, res, next) => {
    // Assuming you use a token to get the user ID
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

}


module.exports = fetchuser;