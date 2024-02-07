const express = require("express")
const router = express.Router()
const userRouter = require("./user.route")
const accountRouter = require("./account.route")

router.use("/user",userRouter)
router.use("/account",accountRouter)

module.exports = router