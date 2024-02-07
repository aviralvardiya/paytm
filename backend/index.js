const express = require("express");
const server = express()
const rootRouter = require("./routes/index")
const cors = require("cors")
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares");


server.use(cors())
server.use(bodyParser.json())

server.use("/api/v1",rootRouter)

server.get("/testkaro",authMiddleware,(req,res)=>{
    res.json({msg:"you have reached test route"})
})



server.listen(8080,()=>{
    console.log("server listening on port 8080")
})

