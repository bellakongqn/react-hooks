import React ,{useState, useEffect,useReducer}from 'react'

export default function Demo() {

    // const [count ,setCount] = useState(0)
    // const [step, setStep] = useState(1)

    const initialState = {
        count: 0,
        step: 1,
      };
      
    function reducer(state, action) {
        const { count, step } = state;
        if (action.type === 'trick') {
            return { count: count + step, step };
        } else if (action.type === 'step') {
            return { count, step: action.step };
        } else {
            throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const {step ,count}= state

    useEffect(()=>{
        console.log('jiazai')
        const id = setInterval(()=>{
            // setCount(c=>c+step)
            dispatch({type:'trick'})
        },1000)
        return ()=>{
            console.log('qingchu')
            clearInterval(id)
        }
    },[])

    return(
        <div>
             <h1>{count}</h1>
             <input value={step} onChange={e =>{
                 dispatch({
                    type: 'step',
                    step: Number(e.target.value)
                  });
             }} />
        </div>
    )
}