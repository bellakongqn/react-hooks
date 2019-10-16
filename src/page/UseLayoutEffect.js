// 与 useEffect Hooks 类似，都是执行副作用操作
// 但是它是在所有 DOM 更新完成后触发
// 可以用来执行一些与布局相关的副作用，比如获取 DOM 元素宽高，窗口滚动距离等等
// 进行副作用操作时尽量优先选择 useEffect，以免阻止视觉更新。与 DOM 无关的副作用操作请使用 useEffect

import React ,{ useState, useRef, useLayoutEffect }from 'react'

export default function UseLayoutEffect() {

    
    const [ height , setHeight ] = useState(100)
    const divRef = useRef(null)

    useLayoutEffect(() => {
        // DOM 更新完成后打印出 div 的高度
        console.log('useLayoutEffect: ', divRef.current.clientHeight);
    })

    return(
        <div>
            <div ref={ divRef } style={{ background: 'red', height: height }}>Hello</div>
           <button onClick={ () => setHeight(height + 50) }>改变 div 高度</button>
        </div>
    )
    
}