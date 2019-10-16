import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add, del ,addTodo,} from '../store/action'

export default function Index() {

    const count = useSelector(state => state.count);
    const todoList = useSelector(state => state.todoList);
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    return(
        <div>
            <button onClick={()=>dispatch(add())}>+</button>
            {count}
            <button onClick={()=>dispatch(del())}>-</button>
            <br />
            <input value={value} onChange={e=>setValue(e.target.value)}/><button onClick={()=>dispatch(addTodo(value))}>新增</button>
            {todoList.map((item,index)=>(
                <li key={index}>{item.text}-{item.completed}</li>
            ))}
        </div> 
    )
    
}