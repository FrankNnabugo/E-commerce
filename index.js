const app = require("./app")
const PORT = process.env.PORT;



app.listen(process.env.PORT, ()=>{
    console.log("server is running on port", PORT)
});
