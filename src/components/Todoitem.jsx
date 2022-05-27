import React,{useState} from 'react'
import styles from "./todo.module.css"

const Todoitem = ({todo ,ondelete}) => {


    const[iscomp,setiscomp]=useState(todo.iscompleted)
      

  return (
    <div className={styles.flix} key={todo.id}>
{/* <input type="checkbox"
 checked={iscomp}
 onChange={(e)=>{setiscomp(!iscomp)}}

/> */}
<div className={iscomp ? styles.s:""} style={{fontSize:20,marginLeft:5}}>{todo.value}</div>
   <button className={styles.delete}  onClick={()=>ondelete(todo.id)}><input style={{font:20}} type="radio"/></button>  
    </div>
  )
}

export default Todoitem