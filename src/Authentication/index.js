import {useState} from 'react'

export default function index() {
    const [userInfo, setUserinfo] = useState({
        userName:"",
        password:""  
    })

    const HandleSubmit=()=>{

    }
  return (
    <div>
      <form onSubmit={HandleSubmit} >
      <input type='text' placeholder='enter ur name '/>


      </form>
    </div>
  )
}
