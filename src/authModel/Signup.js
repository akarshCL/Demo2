import React from 'react'
import CommonBtn from './CommonBtn'

const Signup = () => {
    const handleSugnupForm = () => {
        console.log("Signup Form")
    }
    return (
        <div>
            Sighup
            <CommonBtn
                text={"Register"}
                handleFunction={handleSugnupForm} />
        </div>
    )
}

export default Signup
