const express = require("express");
const server = express()
const rootRouter = require("./routes/index")
const cors = require("cors")
const bodyParser = require("body-parser")

server.use(cors())
server.use(bodyParser.json())

server.use("/api/v1",rootRouter)



server.listen(8080,()=>{
    console.log("server listening on port 8080")
})

