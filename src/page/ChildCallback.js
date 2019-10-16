import React , {useEffect, useState} from 'react'

export default function ChildCallback(props){

    const [ name ] = useState(()=>props.callbackName())
    
    
    useEffect(()=>{
        console.log(name)
        console.log('我被更新了')
    },[name])

    return(
        <div>jhgfvk</div>
    )
}