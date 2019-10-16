import React , { useState, useEffect, useContext} from 'react'
import { ThemeContext } from '../App'

export default function Hook1(){

    const [ count ,setCount ] = useState(0);
    // useState Hook 给组件添加一些内部state，唯一参数为state的初始值
    // useState 会返回一对值：当前状态和一个让你更新它的函数
    // state可以为数组，对象，字符串等

    const [ fruit] = useState('apple')
    const [ todo ] = useState([{text:'学习React Hooks'}])

    // useEffect <=>componentDidMount componentDidUpdate componentWillUnmount
    // useEffect 在组件内声明的，所以它们可以访问到组件的 props 和 state
    // React 会在每次渲染后调用 useEffect —— 包括第一次渲染的时候
    // 清除机制， useEffect 返回一个函数，会在页面卸载的时候执行

    // 不需要额外的更新逻辑 useEffect 自动清除上一个effect

    // Effect 进行性能优化
    // componentDidUpdate 对比前后props 进行比较优化
    // useEffect 只要传递数组作为 useEffect 的第二个可选参数即可：
    // [count] 仅在 count 更改时更新
    // [] 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），
    // 可以传递一个空数组（[]）作为第二个参数。
    // 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

    // 如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部：
    // useEffect(function persistForm() {
    //     // 👍 将条件判断放置在 effect 中
    //     if (name !== '') {
    //       localStorage.setItem('formData', name);
    //     }
    //   });

    // setState 结合展开运算符来达到合并更新对象
    // setState(prevState => {
    //     // 也可以使用 Object.assign
    //     return {...prevState, ...updatedValues};
    //   });
    // state经过计算
    // const [state, setState] = useState(() => {
    //     const initialState = someExpensiveComputation(props);
    //     return initialState;
    // });
    const ctx = useContext(ThemeContext);
      

    useEffect(()=>{
        if(count===0){
            document.title = 'react Hook';
        }else{
            document.title = `You clicked ${count} times`;
        }
        // 组件卸载时进行执行
        return ()=>{
            document.title ='unMount';
        }
    },[count]) 

    return(
        <div>
            {
                todo.map(item =>(
                    <p>{item.text}</p>
                ))
            }
            <p  style={ctx}>{fruit}</p>
            <p>you click {count} 次</p>
            <button onClick={() =>setCount(count+1)}>
                Click Me!
            </button>
            <button onClick={() =>setCount(preCount => preCount+10)}>
                Click Me!
            </button>
            
        </div>
    )

}