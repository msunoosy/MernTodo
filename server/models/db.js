const mongoose=require('mongoose')
module.exports=mongoose.connect('mongodb+srv://root:root@cluster0.n9mth.mongodb.net/todolist?retryWrites=true&w=majority',{

},err=>{
    if(err)console.log(`Error in Db connection ${err}`)
    console.log('DB connection success')
})