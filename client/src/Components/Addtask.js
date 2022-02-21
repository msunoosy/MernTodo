import React,{useState} from 'react';
import axios from 'axios';
import "./Addtask.css"

function Addtask(props) {
    const[taskInput,settaskInput]=useState("")
const TaskButtonclick=()=>{
    if(taskInput.trim()===""){
        return
    }else{
axios.post("http://localhost:3001/api/tasks",{
    todo:taskInput,
    isComplete:false
}).then(res=>{
    settaskInput("")
    props.addtask(res.data)  // need to understand
}).catch(err=>console.log(err))
    }
}

  return <div className='addtask'>
      <input type="text" placeholder='Add task...' value={taskInput} onChange={e=>settaskInput(e.target.value)}></input>
      <button onClick={()=>TaskButtonclick()} >Add task</button>
  </div>;
}

export default Addtask;


