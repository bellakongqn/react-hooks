import React, { useState, useEffect } from 'react'

export default function  Text() {

    const [count,setCount] = useState(0)

    function  handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    // useEffect(()=>{
    //     console.log(`${count}被加载了`)
    //     document.title=`you click ${count} times`;
    //     return ()=>{
    //         console.log(`${count}被清除了`)
    //     }
    // },[count])

    useEffect(()=>{
        console.log('gengxin')
        // 使得effect的依赖更少，c=>c+1有限    setCount(c=>c+1)====》useReducer
        const id = setInterval(()=>{
            setCount(c=>c+1)
        },1000)
        return ()=>{
            console.log('xiezai')
            clearInterval(id)
        }
    },[])

    return(
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={handleAlertClick}>Alert</button>
        </div>
    )
}