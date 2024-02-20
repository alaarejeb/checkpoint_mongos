const TASK=require('../models/TaskSchema')

const CreatTask=async(req,res)=>{
    try {
        const {title,description,userId}=req.body
        const newtask=await TASK.create({title,description,owner:userId})
        res.status(201).json({msg:'task created'})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'})
    }
}

const GetUserTasks=async(req,res)=>{
    try {
        const UserTasks=await TASK.findById({_id:req.params.id})
        res.status(201).json({msg:'task deleted'})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'})
    }
}
const DeletUserTasks=async(req,res)=>{
    try {
        const UserTasks=await TASK.findByIdAndDelete({_id:req.params.id})
        res.status(201).json({msg:'task deleted'})
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'})
    }
}

const UpdateUserTasks=async(req,res)=>{
    try {
        const UpdateTasks=await TASK.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(201).json({msg:'task updated'},UpdateTasks)
    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'})
    }
}

module.exports = {CreatTask,GetUserTasks,DeletUserTasks,UpdateUserTasks}