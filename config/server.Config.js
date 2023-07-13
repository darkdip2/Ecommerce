if(process.env.NODE_ENV !=='production')
{
    require('dotenv').config({path:'./ECOMM/.env'});
}
module.exports={
    PORT:8080
    //process.env.PORT
}