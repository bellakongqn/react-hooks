import React, {useState,useCallback} from 'react'
import ChildCallback from './ChildCallback'

const set = new Set();

export default function UseCallback(){

    const [count ,setCount] = useState(1)
    const [name] = useState('bella')
    // 匿名回调“存”起来
    const clickCallback = useCallback(() =>{
        console.log('Clicked')
    },[])

    // callback缓存函数 const fnA = useCallback(fnB, [a])
    // count 改变时 set改变
    const callback = useCallback(() => {
        return count;
    }, [count]);
    set.add(callback);

    

    // useCallback 避免不必要的更新 父子组件
    // 传入子组件 函数，name不改变时 子组件不会被重新加载
    const callbackName = useCallback(
        ()=>{
           console.log(name)
        },
    [name])
    

    return(
        <div>
            <ChildCallback callbackName={callbackName} />
            <p>{set.size}</p>
            <p>{count}</p>
            <button onClick={clickCallback}>Click Me</button>
            <button onClick={() =>setCount(count+1)}>add</button>
        </div>
    )

}