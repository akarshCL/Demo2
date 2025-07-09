import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ChildB = () => {

    const [data, setData] = useState([])
     const [Name, setName] = useState({
        NAME:"AKARSH",
        BATCH:"BCA BTECH"
     })
    const fetchAPI = async () => {
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(result.data, "resulkt")
        setData(result.data)
    }

    useEffect(() => {
        fetchAPI();
    }, [])
    
    
    
    return (
        <>
            <h1>
       { console.log(data)}
                home Page
 {Name.NAME}
 {Name.BATCH}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>


<br/>

{data.map((item)=>{
return(
    <>
    {item.id}
    <h1>{item.title}</h1>
    <p>{item.body}</p>
    </>
)
})}



            </h1>


        </>
    )
}

export default ChildB