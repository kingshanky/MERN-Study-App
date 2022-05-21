// Autenticate is the Middle Ware Here.
// It will checked before the response.

const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');           //Because of network problem it show app crashed for remove this error rewrite the Users = require(...)

const authenticate = async (req, res, next)=>{
  try{
      // Get the Cookies
      const token = req.cookies.jwt;
      // console.log(token)
      if(!token){
          res.status(401).send("No token");
      } else {
          const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
          
          // console.log(varifyToken)

          const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

          if(!rootUser){
              res.status(401).send(" User Not Found")
          }else {
              res.status(200).send(" Authorized User")
          }

        }

        next()
  } catch (error) {

         res.status(401).send("Error");
         console.log(error);

  }

}
 
module.exports = authenticate;



