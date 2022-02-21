import React,{useState,useEffect} from 'react';
import Updatetask from './Components/Updatetask';
import Todolist from "./Components/Todolist"
import Addtask from './Components/Addtask';

import axios from "axios";
import './App.css';



function App() { 

  const [todoList,setTodolist]=useState([])
  const [tasktoUpdate,setTasktoUpdate]=useState({})
  const[showPopup,setShowPopup]=useState(false)


  useEffect(()=>{
     axios.get('http://localhost:3001/api/tasks').then(res=>{
       setTodolist(res.data)
     }).catch(err=>console.log(err))
  },[])

  const addtask=newTask=>{
    setTodolist([...todoList,newTask])
  }

const taskComplete=(task)=>{
const newList=[...todoList]
newList.forEach(item=>{
  if(item._id===task._id){
    item.isComplete=task.isComplete
  }
  setTodolist(newList)
})

  }

  const removeTask=(task)=>{
const newList=todoList.filter(item=>!(item._id===task._id))
setTodolist(newList)
  }



 const updateask=task=>{
const newList=[...todoList]
newList.forEach(item=>{
  if(item._id===task._id){
    item.todo=task.todo
  }
})
setTodolist(newList)
  }

  return (
    <div >
    <Addtask addtask={addtask}></Addtask>
    <Todolist  todoList={todoList} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={(task)=>setTasktoUpdate(task)} showPopup={()=>setShowPopup(!showPopup) }/>
  {showPopup && <Updatetask task={tasktoUpdate} updateask={updateask} removePopup={()=>setShowPopup(!showPopup)}/>}
    
    </div>
  );
}

export default App;
