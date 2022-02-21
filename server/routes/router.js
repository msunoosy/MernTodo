const express=require('express')
const router=express.Router()
const Task=require('../models/models')

router.get('/',(req,res)=>{
   Task.find((err,docs)=>{
    if(err)console.log(err)
    res.json(docs)
   })
})


router.post('/',(req,res)=>{
    const task =new Task(req.body)
    task.save((err,doc)=>{
        if(err)console.log(err)
        res.json(doc)
    })
})

router.put('/:id',(req,res)=>{
    Task.findByIdAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    },(err,doc)=>{
        if(err)console.log(err)
        res.json(doc)
    })
})

 router.delete('/:id',(req,res)=>{
     Task.findOneAndDelete(req.params.id,(err,doc)=>{
         if(err)console.log(err)
         res.json(doc)
     })
 })

module.exports=router