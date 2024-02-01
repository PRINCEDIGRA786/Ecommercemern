import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
    // const[second,setsecond]=useState()
    const[log,setlog]=useState({"email":"","password":""})
    const navigate=useNavigate();
    const handleClick=async(e)=>{
        e.preventDefault()
        // console.log("values dekhi",log.email,log.password)
        const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email":log.email,"password":log.password})
            });
            const json=await response.json();
            // console.log(json)
            if(json.success){
                //Redirect
                localStorage.setItem('token',json.authtoken)
                navigate('/login/home')
                alert("Login Successfully","success")
            }
            else{
               alert("Invalid Cerendentials.....","danger")
            }
        }
    
  return (
        <>
    <div className='absolute'>
        <img className='sm:w-[100vw] sm:h-[130vh] lg:[100%] md:h-[150vh] h-screen w-screen blur-none  lg:w-screen lg:h-screen' 
        // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5UDI9LRSMZv_M1LejQHoW8-UJB5nPINfAA&usqp=CAU'
        src='https://miro.medium.com/v2/resize:fit:1200/1*G_2f5pzs3Vsvx6vE4GPHRA.jpeg'       
       />
    </div>
    <div className=' relative bg-gradient-to-tl w-[100vw] h-[100vh] 
     '>
    {/* from-[#000428] to-[#004e92] */}
    <h1 className=' text-yellow-600 hover:text-yellow-500 text-center pt-4 font-Mono text-md sm:text-xl
    lg:text-[42px]'>BaZaarHub</h1>
        <div className='sigbox lg:mt-8 mt-2  border-2 border-white h-[85%] w-[75%] rounded-md mx-auto
        md:h-[400px] md:w-[400px] bg-gradient-to-b from-[#110e16ba] to-black'>
            <h1 className='text-center text-white lg:my-3 my-1 font-Mono text-2xl lg:text-3xl'>LOGIN</h1>
            <div className='p-4 md:space-y-6'>
              <div className='inp1'>

             <label htmlFor='usern' className='text-white block text-sm my-2 mt-2 ml-[2vw] md:ml-2 md:text-lg'><b>
              Email:</b></label>
         <input  className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white h-6 lg:h-8 hover:border-white  md:w-[90%] mt-3 md:ml-2' 
                type='text' placeholder='Email' 
                onChange={(e)=>{

                  setlog({...log,email: e.target.value})
                }} 
                ></input>
                </div>
          <div className='inp2 lg:my-5 my-2'>
         <label htmlFor='Pass' className='text-white text-sm ml-[2vw] my-2
         md:ml-2 md:text-lg'><b>Password:</b></label>
         <input type='password' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-6 lg:h-8 md:w-[90%] mt-3 
                md:ml-2' placeholder='Password' 
                onChange={(e)=>{

                  setlog({...log,password: e.target.value})
                }} 
        ></input>
          </div>
          {/* <NavLink to='home'> */}
         <div className='md:my-6 mt-1 text-center sm:pt-6' id='createbtn'>
          <button type="submit" className='bg-green-600 hover:bg-green-800  p-2 rounded-md text-white' 
          onClick={handleClick}
            
            ><b>LOGIN</b></button>
            </div>
          </div>
        </div>
            </div>
            </>
  )
}
