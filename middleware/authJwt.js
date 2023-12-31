const jwt=require('jsonwebtoken');
const config=require('./../config/auth.config');
const VerifyToken=(req,res,next)=>{
    let token=req.headers['x-access-token'];
    if(!token)
    {
        //UNAUTHORIZED
        res.status(401).json({
            message:'Invalid Token',
        });
        return;
    }
    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            res.status(401).json({
                message:'Unauthorized',
            });
        }
        //SERVERPASSINGIDFROMTOKEN
        req.userId=decoded.id;
        next();
    });
};
module.exports={
    VerifyToken,
};