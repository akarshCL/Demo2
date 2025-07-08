import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ChildC = () => {

    const [blog, setBlog] = useState([])
    const [singleBlog,setSingleBlog]=useState("")
    async function fetchAPI() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(result?.data, "result")
        setBlog(result?.data)
    }

    useEffect(() => {
        fetchAPI();
    }, [])
    return (
        <div>
            <h1>Data fetching</h1>
            {
                blog.map((item)=>{
                    return (
                        <>
                        <p>{singleBlog}</p>
                        <h1>{item?.title}</h1>

                        <p>{item?.body}</p>
                        <button onClick={()=>{setSingleBlog(item.id)}}> Read more </button>
                        </>
                    )
                })
            }

        </div>
    )
}


export const Example=()=>{
    return(
        <>
        example
        </>
    )
}