const jwt = require("jsonwebtoken");
const secretKey=process.env.SECRET_KEY;
function authMiddleware(req, res, next) {
    const authHeader = req.header('authorization');
    console.log(authHeader);
    /*Ek authMiddleware m hum check karege ki authHeader jisme jwt token rakha h jo signup or
    signin k time per pass hua tha woh valid jwt token h ya nahi agar nai toh fir usko slice karke
    uska token nikalege hum "Bearer " hata kar hum log us token kom jwt.verify se verify karege
    aur authenticate karege iss tarah se fir whi uske andar ka data req.userId me dalege taaki aage
    humlog us cheez ka use kar skein*/
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: "Invalid authentication"
        })
    }
    const token = authHeader.slice(7);
    console.log(token);
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("decoded.userId"+decoded+decoded.userId)
       //Yaha se hum decoded token k andar ka data bhejege aage req.userId m rakhkar
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({
            msg: "Error"
        })
    }
}
module.exports={authMiddleware};