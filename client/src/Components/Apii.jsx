import React, { useEffect, useState } from 'react'

import Card from './Card'
import Navbar from './Navbar'
import Slider from './Slider'
import articles from '../articles.json'
export default function Apii(props) {
  const[spin,setspin]=useState(true)
 
  
  let { category}=props
  var arr
  switch (category) {
    case 'trending':
              arr=articles.filter((element)=>{
            return element.trending==1;
        })
      break;
      case 'fragrances':
        arr=articles.filter((element)=>{
            return element.category=='fragrances';
        })
      break;
    case 'electronics':
      arr=articles.filter((element)=>{
        return element.category=='electronics';
    })
    break;
    case 'furniture':
      arr=articles.filter((element)=>{
        return element.category=='furniture';
    })
    break;
    case 'mobiles':
      arr=articles.filter((element)=>{
        return element.category=='smartphones';
    })
    break;
    case 'groceries':
      arr=articles.filter((element)=>{
        return element.category=='groceries';
    })
    break;
    case 'appliances':
      arr=articles.filter((element)=>{
        return element.category=='appliances';
    })
    break;
    case 'fashion':
      arr=articles.filter((element)=>{
        return element.category=='fashion';
    })
    break;
    default:
      break;
  }
    return(
      <>
        <Navbar />
        <div className='dark:bg-black dark:text-white'> 
        <div className='text-center py-3 pb-1'>
      <h1 className='p-2 uppercase font-Mono fold:text-sm folld:text-xl sm:text-2xl'>{category} PRODUCTS</h1>
      </div>
      <div className='allitems my-1 p-4 w-[100%] fold:pl-0 pr-5 sm:pl-14 fold:pr-4 folld:pr-6  '>
      <div className=' grid-cols-2 fold:grid-cols-1  inline-grid  space-x-7 folld:space-x-11  sm:grid-cols-3 md:grid-cols-4 '> 
      {arr.map((element)=>(
     <Card brand={element.brand} images={element.images} title={element.title.slice(0,25)} discountPercentage={element.discountPercentage} id={element.id} rate={element.rating} thumbnail={element.thumbnail} price={element.price} description={element.description} ></Card>
     )
     )
}
     </div>
</div>
</div>  
</>
)}