const mongoose=require('mongoose')

const TaskSchema=mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    createAt:{type:Date,default:new Date()},
   
    
})

const TASK=mongoose.model('task',TaskSchema)
module.exports=TASK