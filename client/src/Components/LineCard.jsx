import React, { useState } from 'react'
// import Cart from './Cart'
// import './card.css'
import {PiDotsThreeOutlineBold} from 'react-icons/pi';

import {AiTwotoneHeart} from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import {actionCreators} from '../State/index';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { page } from '../State/action-creators/index';
export default function Card(props) {
    var {title,id,price,thumbnail,rate,discountPercentage,brand,description,images}=props
    const dispatch=useDispatch()
    var cart=useSelector(state=>state.Cartt)
    const[coloset,setcolor]=useState({
      'color':'black',
    })
    const togglecolor=()=>{
      if(coloset.color=='red'){
        setcolor({'color':'black'})
      }
      else{
        setcolor({'color':'red'})
      }
    }
  return (
    <>
      <div className='card h-40 w-40 fold:h-28 fold:w-20 sm:h-60 sm:w-40 p-5 fold:p-2 m-2 folld:h-32 folld:w-24
      shadow-sm sm:shadow-md hover:shadow-xl shadow-gray-500 overflow-hidden
       hover:bg-slate-50  rounded-md ml-[26%] fold:ml-[13%]  sm:ml-[42px] lg:h-60 lg:w-60 dark:hover:bg-[#383838] dark:bg-[#181818]'>
     {/* <span className=" text-red-800 text-xs font-extrabold ml-40 px-2 py-0 rounded-full bg-pink-300 dis">{discountPercentage}%OFF</span> */}
     <NavLink to='/page' className='' onClick={()=>{dispatch(page(id, title, description, rate, thumbnail, images, brand, price, discountPercentage))}}>
    <img className="card-img  duration-700 w-14 h-14 mx-auto  md:w-32 md:h-28 sm:w-28 sm:h-24
    " src={thumbnail} alt="Card image cap"/>
    <div className="card-body mt-2 h-12 sm:h-16">
    <h6 className="card-title my-1 text-center font-sans font-semibold p-4 pt-0 pb-0 text-[8px] sm:text-[12px] sm:pb-6
      leading-3 fold:text-[6px] fold:leading-0 sm:leading-3
      ">{title}</h6>
    
 
  </div>
</NavLink>
{/*  */}
<div className='sm:flex justify-around hidden'>
  {/* <NavLink to='/watchlist' onClick={()=>{dispatch(addToWatchList({id,title,thumbnail,price,rate}));
}}> */}
  {/* <AiFillEye className='w-6 h-6 hover:h-7 hover:w-7 hover:text-gray-400'/> */}
  <AiTwotoneHeart className='w-4 h-4 md:w-6 md:h-6 sm:hover:h-7  sm:hover:w-7 hover:text-red-700' onClick={()=>{togglecolor()}} style={coloset}/>
  {/* </NavLink> */}
  <h1 className='uppercase text-[8px] md:text-[10px] sm:text-[10px]  font-extrabold overflow-hidden'>{brand}</h1>
  <NavLink to='/page' className='' onClick={()=>{dispatch(page(id, title, description, rate, thumbnail, images, brand, price, discountPercentage))}}>
  {/* <FaInfoCircle className='w-6 h-5 hover:h-6 hover:text-blue-700'/> */}
  <PiDotsThreeOutlineBold className=' h-4 w-4 md:w-5 md:h-5 hover:text-yellow-600'/>
  </NavLink>
</div>
</div>    
 </>
  );
}