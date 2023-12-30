const errorHandler =(err, req, res, next)=>{

    const statusCode = res.statusCode;

    switch(statusCode){
    case 404:
        res.send("Not found");
        break;

    case 400:
        res.send("Bad request");
        break;

        case 401:
            res.send("Unauthorized access");
            break;

     case 500:
        res.send("Internal server error");
        break;

        default :
        res.send("Unknown error");
        break;

    
}
next();
}


module.exports = {errorHandler};