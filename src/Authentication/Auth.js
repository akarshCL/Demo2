import { useState } from 'react'
import './styles.css'

export default function Auth() {

  const [userInfo, setUserinfo] = useState({
       Email: "",
       Password: ""
  });

  const HandleChange = (e) => {
   
    const { name, value } = e.target;
    setUserinfo(prev => ({
      ...prev,
      [name]: value
    }));
  }
  const HandleSubmit = (e) => {
    e.preventDefault();

    //  if(userInfo.Email == '' || userInfo.password == ''){
    //    alert("Both fields must be filled")
    //    return;
    // }
    // else{
       alert("You have successfully logged in", userInfo)
       console.log(userInfo);
    // }


   
  }
  return (
    <div className='inputs-container'>
      <form onSubmit={HandleSubmit} id='form-content' >
        <h2>Login</h2>


        <label htmlFor='Email'>Email: </label>

           <input type='email' name='Email'
           id='Email'
             placeholder='Enter  Email' value={userInfo.Email}
             onChange={HandleChange}
              required/>

       

        <label htmlFor='Password'>Password:</label>
          
          <input type='password' 
            id='Password'name='Password'
                placeholder='Enter password' value={userInfo.Password}
            onChange={HandleChange}   minLength={6}
            required/>

        

        <button type='submit'>Login</button>

      </form>
    </div>
  )
}
