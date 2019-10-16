import React,{ useReducer } from 'react'

const initState ={count:0}

function reducer(state, action){
    switch(action.type){
        case "add":
            return {count: state.count + 1};
        case "dele":
            return {count: state.count - 1};
        default:
           throw new Error();
    }

}

export default function UseReducer(){

    const [state, dispatch] =  useReducer(reducer, initState)

    return(
        <div>
           <button onClick={() => dispatch({ type :'dele'})}>-</button>
           {state.count}
           <button onClick={ ()=>dispatch({ type:'add'})}>+</button>
        </div>
    )
}