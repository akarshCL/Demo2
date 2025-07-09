import { Link } from "react-router-dom";
const ChildB = () => {
    return (
        <>
            <h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link></h1>
        </>
    )
}

export default ChildB