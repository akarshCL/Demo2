const ChildA = (props) => {
    const handleClick = () => {
        props.setShowLogin(false)
    }
    return (
        <>
            Login Fomr component
            <button onClick={handleClick}>Cancel</button>
        </>
    )
}

export default ChildA