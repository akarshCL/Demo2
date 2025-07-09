import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChildC = () => {
    const navigate = useNavigate();
    return (
        <div>
            About us

            <button onClick={()=>{navigate("/")}}>Go Back</button>
        </div>
    )
}

export default ChildC
