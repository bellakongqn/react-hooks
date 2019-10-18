import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FetchData() {
    const [data, setData] = useState({ hits: [] });
    const [query,setQuery] = useState('redux')
    // const [search, setSearch] = useState('redux');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=redux',
    );
    // 加载loading....
    const [isLoading, setIsLoading] = useState(false);
    // 接口error
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        console.log('update')
        async function fetchData() {
            setIsLoading(true);
            setIsError(false)
            try{
                const result = await axios(
                    url,
                 );
                 setData(result.data);
            }catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchData()
    },[url])

    // 添加[]作为依赖，保证接口只有在初始加载的时候才会被调用

    return(
        <div>
            <form
                onSubmit={e => {
                    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
                    e.preventDefault()
                }}
            >
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button type="submit">
                    Search
                </button>
            </form>
           
            {isError && <div>Something went wrong ...</div>}
            {isLoading?
                <div>Loading。。。。</div>
            :
                data.hits.map(item =>(
                    <li key={item.objectID}>{item.title}</li>
                ))
            }
        </div>
    )
}