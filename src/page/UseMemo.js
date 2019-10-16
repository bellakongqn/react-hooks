import React , { useState,useMemo} from 'react'

export default function UseMemo(){
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');

    const expensive = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return(
        <div>
            <h4>{count}-{expensive}</h4>
            {val}
            <div>
                <button onClick={() => setCount(count + 1)}>+c1</button>
                <input value={val} onChange={event => setValue(event.target.value)}/>
            </div>
        </div>
    )
}