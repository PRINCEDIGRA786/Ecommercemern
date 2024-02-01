import React from 'react'
import Navbar from './Navbar'
// import { NavLink } from 'react-router-dom'
// import Apii from './Apii'
import Lineproduct from './Lineproduct'
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import Card from './Card'
import {AiFillHome} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
// import Slider from 'react-slick'
import Slider from './Slider'
import articles from '../articles.json'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'


export default function Home() {

  var arr;
  const navigate=useNavigate();
arr=articles.filter((element)=>{
  return element.trending==1;})
  return (
    <>  

{localStorage.getItem('token')?
<div>
  
   <Navbar/>
    <Slider/>
       
        <div className='dark:bg-black dark:text-white pt-6'>

        <div id='firstrowcards' className=' lg:flex md:justify-around 
        fold:hidden dark:text-black border-2 dark:border-[#585858] py-2 hidden'>
          <div className='flightphot hidden lg:block'>
           <a href='/'>
          <img src='https://rukminim1.flixcart.com/fk-p-flap/530/810/image/1f03e99f6dc9f7a6.jpg?q=20'
          className='sm:h-80 sm:w-32 h-40 w-[80vw] lg:w-[170px] mx-auto shadow-xl shadow-gray-400 dark:shadow-none'/>
          </a>  
          </div>
          <div className='sm:h-80 sm:w-[54%] h-[80vh] w-[90vw] mx-auto sm:mx-[none] bg-slate-200
          dark:bg-[#585858] flex justify-around   '>
            <div className='bg-white h-[95%] w-24 sm:w-44  mt-2 hidden lg:block'>
              <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/J23_KSD_PC_CC_V3_2x._SY608_CB577012317_.jpg'
              className='sm:h-60 sm:w-40 h-32 w-20 mx-auto pt-2'/>
              <a href='/offers'>
               <p className='font-serif mx-2 mt-1 text-[10px] sm:text-sm  text-blue-500 hover:underline hover:text-red-500'>
                View deals
                </p> 
              </a>
            </div>
            <div className='4kagroup '>

            <div className='twophotosupper space-x-3 mt-2 flex sm:space-x-8'>
                <div className='sm:h-36 sm:w-32 h-20 w-20 bg-white'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_TV_2XV2._SY232_CB577200738_.jpg'
                  className='sm:h-24 sm:w-28 h-16 w-16 mx-auto pt-2'/>
                <a className='hover:underline hover:text-red-400'>
                <p className='font-serif text-[6px] sm:text-sm mx-2 mt-2 text-blue-400 hover:text-red-400'>60% off on Tv's</p>
                  </a>  
                </div>
                <div className='sm:h-36 sm:w-32 h-20 w-20 bg-white'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Mob_2X._SY232_CB578640810_.jpg'
                  className='sm:h-24 sm:w-28 h-16 w-16 mx-auto pt-2'/>
                 <a href='/electronics' className='hover:underline hover:text-red-400'>
                  <p className='font-serif text-[6px] sm:text-sm mx-2 mt-1 text-blue-400 hover:text-red-400'>30% off on mobile </p>
                  </a> 
                </div>
            </div>
            <div className='twophotolower mt-4 flex space-x-8 '>
                <div className='sm:h-36 sm:w-32 h-20 w-20 bg-white'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg'
                  className='sm:h-24 sm:w-28 h-16 w-16 mx-auto pt-2'/>
                <a className='hover:underline hover:text-red-400'>
                <p className='font-serif text-[6px] sm:text-sm mx-2 mt-2 text-blue-400 hover:text-red-400'>40% off on Clothing</p>
                  </a>  
                </div>
                <div className='sm:h-36 sm:w-32 h-20 w-20 bg-white'>
                  <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_2x._SY232_CB577919562_.jpg'
                  className='sm:h-24 sm:w-28 h-16 w-16 mx-auto pt-2'/>
                 <a href='/electronics' className='hover:underline hover:text-red-400'>
                  <p className='font-serif text-[6px] sm:text-sm mx-2 mt-1 text-blue-400 hover:text-red-400'>50% off on boAt</p>
                  </a> 
                </div>
            </div>
                  </div>
            <div className='for the signups h-[90%] w-[29%] sm:h-[303px] sm:w-60 bg-white mt-2 dark:bg-[#383838] dark:text-white'>
                <h1 className='sm:text-3xl text-md font-bold p-1  sm:p-3'>Register As Reseller</h1>
                <div className='mx-3 mt-2 flex'>
                  <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHz2xznOIrwZlGBKMVZKsClu3pQiFWbeE8U8QCty825X1ClP--'
                  className='sm:h-5 sm:w-5 h-3 w-3'/>
                  <p className='mb-1 mx-2 text-[8px] sm:text-[12px] font-semibold font-serif hover:font-extrabold'>Grow your business</p>
                </div>
                <div className='mx-3 mt-2 flex'>
                  <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHz2xznOIrwZlGBKMVZKsClu3pQiFWbeE8U8QCty825X1ClP--'
                  className='sm:h-5 sm:w-5 h-3 w-3'/>
                  <p className='mb-1 mx-2 text-[8px] sm:text-[12px] font-semibold font-serif hover:font-extrabold'>Enjoy 100% profit</p>
                </div>
                <div className='mx-3 mt-2 flex'>
                  <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHz2xznOIrwZlGBKMVZKsClu3pQiFWbeE8U8QCty825X1ClP--'
                  className='sm:h-5 sm:w-5 h-3 w-3'/>
                  <p className='mb-1 mx-2 text-[8px] sm:text-[12px] font-semibold font-serif hover:font-extrabold'>Sell all over India</p>
                </div>
                <div>
                  <button className=' h-8 w-24 mt-1 text-[12px] mx-3 bg-green-500 sm:h-16 sm:w-44 sm:mx-8 sm:mt-3  rounded-md sm:rounded-xl sm:text-xl font-bold
                  hover:text-semibold hover:bg-green-400 border-2 border-black'>SIGN-UP NOW</button>
                </div>
            </div>
          </div>
          <div className=' h-[200px] w-[95%] mx-auto sm:mx-0 sm:h-80 sm:w-[26%] bg-slate-200 dark:bg-[#383838] dark:text-white'>
              <h2 className=' md:text-2xl  font-bold p-2'>Saal Ka Sabse Kam Daam</h2>
              <div className=' freedelivery m-3 mt-1 flex'>
                <img src='https://images.meesho.com/images/pow/freeDelivery_jamun.svg' className='md:h-8 lg:h-10'/>
                <h3 className='font-medium mx-2 p-2 md:text-sm text-lg hover:font-bold '>Free Delivery</h3>
                </div>
                <div className='cash m-3 mt-1 flex'>
                <img src='https://images.meesho.com/images/pow/cod_jamun.svg' className='md:h-8 lg:h-10'/>
                <h3 className='font-medium mx-2 p-2 md:text-sm text-lg hover:font-bold '>Cash on Delivery</h3></div>
                <div className='return m-3 mt-1 flex'>
                <img src='https://images.meesho.com/images/pow/easyReturns_jamun.svg' className='md:h-8 lg:h-10'/>
                <h3 className='font-medium mx-2 p-2 md:text-sm text-lg hover:font-bold '>Easy Return</h3>
                </div>
                <div className='flex'>
                <button className='bg-purple-700  h-12 w-52 mx-8 mt-1 rounded-md  text-xl font-bold
                  hover:text-semibold hover:bg-purple-800 border-2 border-black flex space-x-2'>
                    <img src='https://images.meesho.com/images/pow/playstoreSmallIcon.png' className='m-2'/>
                    <p className='font-sans lg:text-md md:text-[1vw] m-2 text-white '>
                      Download App
                      </p>
                      </button>
                </div>
          </div>
        </div>
   <div className='firstpage fold:w-[120%]'>
   <div> 
        <div className='text-center my-3 mb-1'>
      <h1 className='p-2 uppercase font-Mono fold:text-sm folld:text-xl sm:text-2xl'>TRENDING PRODUCTS</h1>
      </div>
      <div className='allitems my-1 p-2 w-[100%]  pr-5 md:pl-16 fold:mr-10  '>
      <div className='  grid-cols-3 fold:grid-cols-2 folld:grid-cols-2 inline-grid space-x-9  sm:grid-cols-3 sm:space-x-10 lg:grid-cols-4'> 
      {arr.map((element)=>(
     <Card brand={element.brand} images={element.images} title={element.title.slice(0,25)} discountPercentage={element.discountPercentage} id={element.id} rate={element.rating} thumbnail={element.thumbnail} price={element.price} description={element.description} ></Card>
     )
     )
}
     </div>
</div>
</div>  
     <div className='my-4'>
      <h2 className='text-center font-Mono uppercase my-6 p-2 fold:text-sm folld:text-xl sm:text-2xl'>Best of Appliances</h2>
      <div className='flex'>
      <img className='mt-6  float-left ml-6 sm:ml-8 fold:w-20  w-28 folld:w-28 h-[400px] fold:h-[320px]
       folld:h-[400px] sm:h-[670px] lg:h-[490px] lg:w-80 sm:mr-0 sm:w-40 '
      src="https://media3.giphy.com/media/EhRKcK8YAhgXnOimHf/giphy.webp?cid=ecf05e47xbsxpxixwifwqxdkwd9mo5w8qfp6dkrt9hye38f1&ep=v1_gifs_search&rid=giphy.webp&ct=g"
      alt='Loading'></img>
      <Lineproduct category={'appliances'} className='ml-10'/>
      </div></div>
        <div className='my-4 '>
       <h2 className='text-center font-Mono uppercase mb-2 mt-7 p-2 fold:text-sm folld:text-xl sm:text-2xl'>Best of Electronics</h2>
       <div className='flex justify-between'>
     <Lineproduct category={'electronics'} />
     <img className='mt-6   float-right ml-12 sm:ml-10 sm:mr-10 fold:w-20   w-28 folld:w-28 h-[380px] fold:h-[320px]
       folld:h-[400px] sm:h-[670px] sm:w-40 lg:h-[490px] lg:w-80'  
     src="https://media3.giphy.com/media/gZmqcDbFbbTd3smF26/giphy.webp?cid=ecf05e47xbsxpxixwifwqxdkwd9mo5w8qfp6dkrt9hye38f1&ep=v1_gifs_search&rid=giphy.webp&ct=g"
     alt='Loading'></img>
       </div>
     </div>
     <div className='mt-2'>
     <h2 className='text-center font-Mono uppercase fold:mt-11 mt-8 sm:mt-16 mb-4 p-2 fold:text-sm folld:text-xl sm:text-2xl'>Frequnetly asked questions</h2>
     < div className='faq px-3 space-y-2 sm:space-y-3 cursor-pointer'>
      <details className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
         <summary>Is Cash on delievery available?</summary>
         <div>
       Yes the cash on delievery is available with various offers on products as well
         </div>
       </details>
   <details className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
         <summary>Is Cashback prices are available?</summary>
         <div>
       Yes the cash on delievery is available with various offers on products as well
         </div>
       </details>
   <details className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
         <summary>How many days return policy is there?</summary>
         <div>
       Yes the cash on delievery is available with various offers on products as well
         </div>
       </details>
   <details className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
      <summary>How do I believe your site?</summary>
      <div>
    Yes the cash on delievery is available with various offers on products as well
      </div>
    </details>
    <details className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
      <summary>Can I Resell My Products?</summary>
     <div>
   Yes the cash on delievery is available with various offers on products as well
     </div>
   </details>
 
   
   </div>
   </div>
    <div id='footer' className='bottom-0 bg-black text-white mt-16'>
      <div className="flex space-x-1 sm:justify-between">
      <div className='sm:w-[48%] w-[40%] fold:w-[50%]'>
       <h2 id='footheading' className='text-center my-4 pt-4 font-Mono text-md sm:text-xl'> ABOUT BaZaarHub</h2>
       <p className='text-center px-14 py-4 text-[8px] sm:text-sm font-serif'>BaZaarHub is a social shopping website here you can buy any product with various offers as well,get the free delievery also and various offers also.You can order any product and offers to various products .You can also resell product can earn margin also.<br/>SALE!SALE!SALE! </p>
      </div>
      <div className='sm:w-[30%] hidden lg:block mx-10'>
          <h2 className='font-Mono my-4 pt-4 text-sm sm:text-xl text-center'>SIGN-UP HERE</h2>
          <div className='my-5 text-center'>
            <input for='search' className='bg-slate-300 hover:bg-slate-200 text-white h-4 rounded-sm 
           w-32 sm:w-56 p-4 sm:p-5' placeholder='Email-Address'></input>
          </div>
          <div className='my-4 text-center'>
            <button className=' h-4 rounded-sm w-32 sm:w-56 p-3 pb-9 border border-slate-300 hover:bg-slate-400 font-semibold'>SUBSCRIBE</button>
          </div>
      </div>
      <div className='w-[50%] lg:w-[30%] my-14 pt-6'>
        <div className='flex my-4'>
          <AiFillHome className='h-6 w-6' />
          <p className='font-mono fold:pl-1 pl-2 text-xs sm:pl-4 sm:text-sm'>Arya Nagar,0097-1,Gurdaspur</p>
        </div>
        <div className='flex my-4'>
          <AiFillPhone className='h-6 w-6'/>
          <p className='font-mono fold:pl-1 pl-4 text-sm'>+42835648569</p>
        </div>
        <div className='flex my-4'>
          <AiTwotoneMail className='h-6 w-6'/>
          <p className='font-mono fold:pl-1  pl-4 text-sm fold:text-xs'>digraprince7@gmail.com</p>
        </div>
      </div>
      </div>
       <div className='flex sm:ml-[42%] xl:ml-[44%] folld:ml-[20%] ml-[35%] fold:ml-5 space-x-6 fold:space-x-3 my-3'>
       <a href="#" ><BsInstagram className=' h-12 w-12 p-3 hover:bg-orange-400 shadow-md shadow-gray-500 hover:text-pink-500 bg-orange-500 rounded-2xl'/></a>
       <a href="#" ><AiFillYoutube className='h-12 w-12 p-3 hover:bg-orange-400 shadow-md shadow-gray-500 hover:text-red-500 bg-orange-500 rounded-2xl'/></a>
       <a href="#"><BsTwitter className='h-12 w-12 p-3 hover:bg-orange-400 shadow-md shadow-gray-500 hover:text-blue-400 bg-orange-500 rounded-2xl'/></a>
       <a href="#"><FaFacebookF className='h-12 w-12 p-3 hover:bg-orange-400 shadow-md shadow-gray-500 hover:text-blue-700  bg-orange-500 rounded-2xl'/></a>
       </div>
       <hr className='text-white my-1 mx-4'></hr>
       <div className='mt-3 text-white text-center'>
         <h4 className='px-5 font-semibold text-md font-serif'>@Copyright 2023-All rights reserved</h4>
       </div>
    </div> 
  </div>
     </div>
           
     </div>:<Signup/>}
   </>
  )}