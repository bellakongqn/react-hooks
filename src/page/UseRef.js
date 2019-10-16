// useRef 返回一个可变的 ref 对象
// 其 .current 属性被初始化为传递的参数（initialValue）
// 返回的对象将存留在整个组件的生命周期中
import React, { useState, useRef, useEffect } from 'react'

export default function UseRef(){

    const [text, updateText] = useState('')
    const inputEl = useRef(null)
    const textRef = useRef();
    
    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current：', textRef.current);
    })

    const onButtonClick =()=>{
        inputEl.current.value = "Hello, useRef";
    }

    return(
        <div>
            {/* 保存 input 的 ref 到 inputEl */}
            <input ref={ inputEl } type="text" />
            <button onClick={ onButtonClick }>在 input 上展示文字</button>
            <br />
            <br />
            <input value={text} onChange={e => updateText(e.target.value)} />
        </div>
    )
}