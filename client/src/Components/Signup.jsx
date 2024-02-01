import React from 'react'
import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
export default function Signup() {
    // const[first,setfirst]=useState()
    // const[stat,setstat]=useState()
    const navigate=useNavigate();
    const[log,setlog]=useState({"name":"","email":"","password":""})
    const handleClick=async(e)=>{
        e.preventDefault()
        // console.log("values dekhi",log.email,log.password)
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "name":log.name,"email":log.email,"password":log.password})
            });
            const json=await response.json();
            // console.log(json)
            if(json.success){
                navigate('/login/home')
                alert("Account created successfully....","success")
            }
            else{
                alert("Email already Registered!Please input another email....","danger")
            }
        }
 
  return (
    <>
    <div className='absolute'>
        <img className='sm:w-[100vw] sm:h-[130vh] md:h-[150vh] h-screen w-screen blur-none lg:w-screen lg:h-screen' 
        // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5UDI9LRSMZv_M1LejQHoW8-UJB5nPINfAA&usqp=CAU'
       src='https://miro.medium.com/v2/resize:fit:1200/1*G_2f5pzs3Vsvx6vE4GPHRA.jpeg'
       />
    </div>
    <div className=' relative bg-gradient-to-tl h-screen w-screen md:w-[100vw] md:h-[100vh]  lg:w-[90vw]
     '>
    {/* from-[#000428] to-[#004e92] */}
    <h1 className=' text-yellow-600 hover:text-yellow-500 text-center pt-1 sm:pt-4 font-Mono sm:text-2xl
    lg:text-[42px]'>BaZaarHub</h1>
        <div className='sigbox lg:mt-8 mt-2 border-2 border-white h-[85%] w-[80%] rounded-md mx-auto
        sm:h-[350px] sm:w-[400px] md:h-[400px] md:w-[400px] bg-gradient-to-b from-[#131119b3] to-black'>
            <form>
             <div className='text-white flex-col'>
            <h3 className='my-1 mt-3 ml-[5vw] text-xs md:text-sm text-yellow-50 md:ml-3'>Start for free</h3>
                <h1 className='my-1 text-center font-Mono text-[5vw] sm:text-xl lg:text-3xl'>Create new account </h1>
                <h3 className='ml-[5vw] my-2 text-xs md:text-sm text-yellow-50 md:ml-3'>Already a member?
                <a className='text-[#34b3b8] hover:text-[#48f3f9]' href='/login'>Log in</a></h3>
                </div>
                <div className='sm:mt-5 mt-2 space-y-2 sm:space-y-4 md:space-y-5 px-[5%] md:ml-5'>
                <div>
                <input type='text' id='inu' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-6 md:h-8 md:w-[90%]
                ' placeholder='Name'>

                </input>
            </div>
            
            <div id='email' className='mailpass'>
                <input type='email' placeholder='Email' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white md:w-[90%] h-6 md:h-8'
                onChange={(e)=>{

                    setlog({...log,email: e.target.value})
                  }}></input>
            </div>
            <div id='userid' className='mailpass'>
            <input id="username" placeholder='User-Id' type="text" className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-6 md:h-8 md:w-[90%]'
                onChange={(e)=>{

                    setlog({...log,name: e.target.value})
                  }}  
            
            ></input>
            </div>
            <div id='pass' className='mailpass'>
            <input id="password" placeholder='Password'type="password" className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-6 md:h-8 md:w-[90%]' 
                onChange={(e)=>{

                    setlog({...log,password: e.target.value})
                  }}
            ></input>
            </div>
            <div id='createbtn ' className='text-center md:pt-4'>
                
          <button type='submit' className='bg-green-700 hover:bg-green-800 mx-auto text-white 
          font-semibold rounded-lg p-1 md:p-2
          '
          onClick={handleClick}
              >Create account</button>
          
            </div>
              </div>
            </form>
        </div>
   </div>
    </>
  )
}
