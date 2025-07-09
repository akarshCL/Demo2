import { useParams } from "react-router-dom"

const ChildA = (props) => {

    const {id}=useParams();
console.log(id,"id")
    const handleClick = () => {
        // props.setShowLogin(false)
    }
    return (
        <>
            Login Fomr component
            <button onClick={handleClick}>Cancel</button>
        </>
    )
}

export default ChildA