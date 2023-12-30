const Nodecache = require("node-cache");
const cache = new Nodecache();

const cacheMiddleware =(req, res, next)=>{

    if(req.method !== "GET"){
    console.log("cannot cache non-GET method");
    next();
    }

    const key = req.method + req.originalUrl;
    const cachedData = cache.get(key);
if(cachedData){
return res.json(cachedData);
}

if(!res._headerset){
    const originalSend = res.send;
    res.send=(body)=>{
        cache.set(key,body,10);
        originalSend.call(res, body);

    }
}next(err);

}


module.exports = {cacheMiddleware};