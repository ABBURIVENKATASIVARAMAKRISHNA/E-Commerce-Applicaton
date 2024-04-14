import React, { useState } from 'react'


const Register = () => {
  const [state,setState]=useState({username:'',email:'',password:''})
  
  const [validInputs, setValidInputs] = useState({
    username: false,
    email: false,
    password: false
  });


  let handleChage=({target:{name,value}})=>{
  setState({...state,[name]:value})
  switch (name) {
    case 'username':
      // Validation logic for username
      setValidInputs({
        ...validInputs,
        [name]: /^[a-zA-Z\s]*$/.test(value) // Example validation condition
      });
      break;
    case 'email':
      // Validation logic for email
      // You can use regex or other validation methods here
      setValidInputs({
        ...validInputs,
        [name]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      });
      break;
    case 'password':
      // Validation logic for password
      setValidInputs({
        ...validInputs,
        [name]: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) // Example validation condition
      });
      break;
    default:
      break;
  }
  
  
};
  
  let handleSubmit=(e)=>{
    // e.preventDefault()
     
  }

 
  let {username,email,password}=state
  return (
    <>
      <section className='flex h-screen items-center justify-center'>
        <div className='flex items-center justify-center mb-10 h-96 w-80 bg-blue-600   border-2 border-solid border-black'><img src="/src/Images/flipCart.jpg" height="75px" width="75px" alt="" /></div>
       <form action="" onSubmit={handleSubmit} className='mb-10 flex flex-col  border-2 border-solid justify-around items-center border-black h-96 p-5 w-80 bg-gray-50' >
       <div className='h-fit w-fit p-2 text-2xl' > Registration form </div>
     <div>   <input  type="text" name='username' value={username} onChange={handleChage} className={`h-fit w-fit p-1 border-2 border-black border-solid border-black ${(validInputs.username)? ' border-solid border-2 border-green-500' : 'border-2 border-solid border-red-500'}  `} placeholder='Enter Your Name ' autoComplete='off' required />
        {
          (!validInputs.username) && (
            <p className='text-red-500 text-xs'>Enter Valid Name</p>
          )
        } 
        </div>
       <div> <input type="email"    name='email'    value={email}    onChange={handleChage} className={`h-fit w-fit p-1 border-2 border-solid border-black ${(validInputs.email)?   'border-solid border-2 border-green-500':'border-2 border-solid border-red-500'}`}  placeholder='Enter Your Email' autoComplete='off' required />
       {
          (!validInputs.email) && (
            <p className='text-red-500 text-xs'>Enter Valid Email</p>
          )
        } 
       </div>
      <div>  <input type="password" name='password' value={password} onChange={handleChage} className={`h-fit w-fit p-1 border-2 border-solid border-black ${(validInputs.password)?'border-solid border-2 border-green-500':'border-solid border-2 border-red-500'}`} placeholder='Enter Password  ' autoComplete='off' required />
      {
          (!validInputs.password) && (
            <p className='text-red-500 text-xs'>Enter Valid Password</p>
          )
        } 
      </div>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${Object.values(validInputs).every(val => val) ? '' : 'opacity-50 cursor-not-allowed'}`}
          type="submit"
          disabled={!Object.values(validInputs).every(val => val)}
        > 
          Submit
        </button>
       </form>
      </section>

    </>
  )
}

export default Register
