// import { Rating } from 'react-simple-star-rating'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import addToCart from '../State/action-creators/index';
import Navbar from './Navbar';
import {BsBagHeart} from 'react-icons/bs';
import orderCon from '../Contextapi/Ordercontext';
export default function Page(props) {
  const[main,setmain]=useState(0)
  const context=useContext(orderCon);
  const{addOrder}=context;
  // const toggle=(a)=>{
  //     setmain(a)
  // }
  const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    const handleReset = () => {
      // Set the initial value
      setRating(0)
    }
  const dispatch=useDispatch()
  var{id,title,thumbnail,price,rate}=props.page
  var cart=useSelector(state=>state.Cartt)
  return (
    <>
    {/* <div> <h1 className='text-center font-Mono text-2xl md:text-3xl mb-5 py-5 bg-[hsla(231,70%,4%,1)] text-white'>BaZaarHub</h1></div> */}
       {/* <div> <h1>The id of the card is :{props.page.id} chobbrraa</h1></div> */}
       <Navbar/>
    <div className="page flex flex-col md:flex-row dark:bg-black dark:text-white">
      <div className='images flex flex-col-reverse lg:flex-row ml-4'>
        <div className='flex lg:flex-col flex-row lg:space-y-16 lg:space-x-0 md:mb-24 md:mt-9 
        lg:mt-16 mx-auto space-x-10'>
         <img src={props.page.images[0]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 focus:ring-8 ring-purple-600 cursor-pointer rounded-md shadow-black shadow-md hover:shadow-orange-300 " onClick={()=>{setmain(0)}} />
        <img src={props.page.images[1]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 cursor-pointer shadow-md hover:shadow-orange-300 rounded-md  shadow-black" onClick={()=>{setmain(1)}} />
        <img src={props.page.images[2]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 cursor-pointer shadow-md hover:shadow-orange-300 rounded-md shadow-black" onClick={()=>{setmain(2)}}/>
        </div>
      <div className='lg:ml-20 mt-2 mx-auto mb-6 md:mx-11 lg:mt-5 xl:mt-7 '>
      <img src={props.page.images[main]} alt="Loading" className="main
      lg:w-[30vw] lg:h-[60vh] md:h-[80vh] md:w-[70vw] h-[70vh] w-[90%]  shadow-xl rounded-md shadow-gray-500" />
      </div>
      </div>
      <div className='detail flex-col mx-auto md:mx-0 border-1 rounded-md m-2 border-slate-300 shadow-lg
       shadow-gray-800 md:mr-3 w-[95%] lg:h-[90%] lg:w-[50%] mt-6 dark:bg-[#383838] dark:shadow-white '>
        <div className="title font-extrabold text-center text-md md:text-lg pt-1 pb-1 rounded-sm text-white bg-[hsla(231,70%,4%,1)]">{props.page.title}</div>
        <div className='flex '>
        <div className='brand font-Mono ml-2 text-md md:text-md mt-2'> {props.page.brand}</div>
        <div className='mt-1 ml-[60%] fold:ml-[50%] lg:ml-[70%] xl:ml-[75%] md:ml-[65%] sm:ml-[75%] folld:ml-[70%]'><BsBagHeart className='h-6  w-6 cursor-pointer opacity-90
         hover:opacity-100 hover:text-red-800'/></div>
        </div>
        <hr className='mx-2 mt-3 font-extrabold'/>
        <div className='descrip md:p-11 p-5 text-md md:text-md font-medium'>{props.page.description}</div>
        <div className='ml-[15%] text-lg md:text-2xl font-sans text-green-800'>₹{props.page.price} at {props.page.discountPercentage}% off</div>
        <div className="text-center my-3">
        {/* <Rating className='flex-row' onClick={handleRating} initialValue={props.page.rate}  /> */}
        </div>
      <div className="btn text-center md:mt-11 my-8 xl:mb-11">
    
      <button type="submit" className='text-center p-1 bg-pink-200 text-md hover:bg-pink-300 dark:text-black'
      onClick={()=>{
        // dispatch(addToCart({id,title,thumbnail,price,rate}));
        addOrder(title,thumbnail,rate,price);
    }}>
      Add to Cart</button>
    
    </div>
      </div>
    </div>
    </>
  )
}


// export function MyComponent() {
// 

//   return (
//     <div className='App'>
//       {/* set initial value */}

//       <button onClick={handleReset}>reset</button>
//     </div>
//   )
// }