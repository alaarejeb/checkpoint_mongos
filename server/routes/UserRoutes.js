const express=require('express')
const router=express.Router()
const {CreatTask,GetUserTasks,DeletUserTasks,UpdateUserTasks}= require ('../controllers/TaskController')

router.post("/cearteTask",CreatTask )
router.get("/getusertasks",GetUserTasks )
router.delete("/deletusertasks/:id",DeletUserTasks )
router.put("/deletusertasks/:id",UpdateUserTasks )

module.exports=router