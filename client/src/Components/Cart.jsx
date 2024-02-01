import{RiDeleteBin6Line} from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import {incre} from '../State/action-creators/index';
import { decre } from '../State/action-creators/index';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { remove } from '../State/action-creators/index'
import { useContext, useEffect, useState } from 'react';
import orderCon from '../Contextapi/Ordercontext';
import Spinner from './Spinner';
export default function Cart() {
  // var quantity=useSelector(state=>state.Num)
  const context=useContext(orderCon);
  const{delOrder,updateQuantity,orders,getOrders}=context;
  var cart=useSelector(state=>state.Cartt)
  const navigate = useNavigate();
  const[wait,setwait]=useState(false)
  const dispatch=useDispatch();
  useEffect(()=>{
     getOrders();
     setTimeout(() => {  
       setwait(true)
     }, 1000);
  },[])
  return (
    <>
    <Navbar/>
    <div className='dark:bg-black dark:text-white '>

    <div> 
      <h1 className='text-center font-Mono uppercase py-5 p-2 fold:text-sm folld:text-xl sm:text-2xl'>CART</h1>
    </div>
    <div className=' absolute top-[30%] left-[46%]'>
    {
              !wait &&
              <Spinner/>
            }
    </div>
       {wait && <div className=''>
          <table className='border-separate border-spacing-5  lg:w-[90%] folld:border-spacing-1 fold:border-spacing-1
          mx-auto text-center  shadow-md shadow-gray-400 rounded-xl dark:bg-[#383838] dark:text-white'>
            <thead>
            <tr className=' border-2 border-gray-950 text-center space-x-3 '>
              <th className='lg:pl-6  font-bold text-md fold:text-xs'>Product Added</th>
              <th className='font-bold text-md hidden  lg:block'>Product Name</th>
              <th className='pl-12 font-bold text-md hidden '>Rating</th>
              <th className='lg:pl-12 fold:pl-1 font-bold text-md fold:text-xs'>Price </th>
              <th className='pr-12 font-bold text-md hidden lg:block'>Quantity</th>
              
            </tr>
            </thead>
          
        { orders.map((element)=>(
          
          <tbody className=''>
           <tr  >
            <td >
         <div className='text-center'>
         <img className=" h-24 w-24 lg:ml-16 ml-2 shadow-lg shadow-gray-500 fold:h-10 fold:w-10
         " src={element.image?element.image:"heli"} alt="Card image cap"/>
           </div>
         </td>
         <td className='hidden lg:block'>
           <div>
         <h6 className="font-semibold font-serif">{element.title}</h6>
           </div>
         </td>
         {/* <div className="mt-2 folld:mt-0 sm:pr-32 folld:pr-0 w-44 sm:w-[60%] fold:w-[40%] folld:w-[80%]"> */}
         <td className='pl-12 hidden  ' >
          <div>
            < h2 className='font-semibold font-serif' >{element.rating}</h2>
            </div> 
            </td>
         <td className='lg:pl-14 pl-3 font-semibold font-serif fold:text-xs fold:pl-1'  >₹{element.price}</td>
             <NavLink to='/cart'>
         <td className='lg:pl-10 pl-4 pb-4'>
         <div className=' h-6 w-24   mb-4 '>
           <button className= ' bg-blue-950 hover:bg-blue-900 h-6 w-6 fold:h-4 fold:w-4 pb-6 mx-2 text-white text-center ' 
           onClick={async()=>{
            dispatch(decre(element.id));
            let intNumber = parseInt(element.quantity, 10);
            if(intNumber===1){
              alert("----Can't exceed you can delete clicking the bin----")
            }
            else{
              if(!isNaN(intNumber)) {
              // Add 1 to the integer
              intNumber -= 1;
            }
            let quantity=await intNumber;
            updateQuantity(element.title,quantity,element._id)
            getOrders();
          }
          }}
           >-</button>
           {element.quantity}
           <button className='bg-blue-950 hover:bg-blue-900 h-6 w-6 mx-2 fold:h-4
            fold:w-4 text-white text-center pb-6' 
           onClick={async()=>{
            dispatch(incre(element.id));
            let intNumber = parseInt(element.quantity, 10);
            if (!isNaN(intNumber)) {
              // Add 1 to the integer
              intNumber += 1;
            }
            let quantity=await intNumber;
            updateQuantity(element.title,quantity,element._id)
            getOrders();}}>+</button>
         </div>
           </td>
           </NavLink>
       {/* </div> */}
       <NavLink to='/cart'>
       <td className='pl-6 mt-5'>
       <div >
       <RiDeleteBin6Line className='w-8 h-11 fold:h-5 fold:w-5
        hover:text-red-600 cursor-pointer shadow-sm shadow-neutral-200' 
        onClick={()=>{
          dispatch(remove(element.id));
          delOrder(element._id);
          getOrders();
        }}/>
       </div>
        </td>
        </NavLink>
        </tr>
           </tbody>
          
          ))}
          </table>
          </div>}
          <div className='text-center  py-24  mx-auto'>
      <NavLink to='/login/home'>
   <button className='bg-green-700 h-24 w-64 text-center rounded-xl uppercase text-white border-24
    border-black font-extrabold hover:bg-green-800'>Continue Shopping</button>
    </NavLink>
    </div>
    </div>
    
    </>
  )
}