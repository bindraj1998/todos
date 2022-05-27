import React,{useState} from 'react'
import Todoitem from './Todoitem'
import styles from "./todo.module.css"
const Todo = () => {

  const [newtodo,settodo]=useState("")
     const[todos,settodos]=useState([])
     const handlechange=(e)=>{
         settodo(e.target.value)
     }
     const ondelete=(id)=>{
         let newtodos=todos.filter((todo)=>todo.id!==id)
        // console.log()
        settodos(newtodos)
     }

  return (
    <div className={styles.main}>
        <div className={styles.top}>
       <input className={styles.input} value={newtodo} placeholder="Write Something" onChange={handlechange}/>
       <button className={styles.button} onClick={()=>{
     settodos([...todos,
        {id:Date.now() ,value:newtodo ,iscompleted:false }
    
    ])
    settodo("")
       }}>+</button>
    </div>
       <br />
       <br />  
     {todos.map((todo)=>(

        <Todoitem todo={todo} key={todo.id} ondelete={ondelete}/> 
    // <div>{todo.value}</div> 
     ))}
    </div>
  )
}

export default Todo