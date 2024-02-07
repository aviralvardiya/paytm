const { Account } = require("../db");
const authMiddleware = require("../middlewares");
const mongoose = require("mongoose")

const router = require("express").Router()

router.get("/",(req,res)=>{
    res.json({msg:"you have reached account route"})
})

router.get("/balance",authMiddleware,async (req,res)=>{
    console.log(req.userId)
    const fetchedAccount = await Account.findOne({userId:req.userId})
    res.status(200).json({userName:req.userName,accountBalance:fetchedAccount.balance})

})

router.post("/transfer",authMiddleware,async (req,res)=>{
    const session = await mongoose.startSession()
    session.startTransaction()
    const {amount,to}=req.body

    const fromAccount = await Account.findOne({userId:req.userId}).session(session)
    
    if(!fromAccount||fromAccount.balance<amount){
        await session.abortTransaction()
        return res.status(400).json({msg:"insufficient balance"})
    }

    const toAccount = await Account.findOne({userId:to}).session(session)

    if(!toAccount){
        await session.abortTransaction()
        return res.status(400).json({msg:"invalid reciever account"})
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session)

    await session.commitTransaction()
    res.status(200).json({msg:"transaction successful"})
    

})

module.exports = router;