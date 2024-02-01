import React from 'react'
// import Card from './Card'
import LineCard from './LineCard'
import articles from '../articles.json'
export default function Lineproduct(props) {
    var{category,limit}=props;
 
  var arr
  switch (category) {
    case 'trend':
        arr=articles.filter((element)=>{
            return element.trend==1;
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
    case 'jewelery':
      arr=articles.filter((element)=>{
        return element.category=='jewelery';
    })
    default:
      break;
  }
  return (
    <>
  <div className=' ml-2 sm:ml-14 fold:ml-0 fold:pr-2 mt-1 fold:w-[120%] sm:w-[100%] sm:px-auto h-48 sm:h-96 sm:pl-2'>
      <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-y-1 pt-2 mt-1 space-x-10 fold:space-x-2 folld:grid-cols-2
      folld:space-x-5 inline-grid sm:space-x-8 md:space-x-7 lg:space-x-12 '>
    {
            arr.map((element)=>(
              <LineCard title={element.title.slice(0,25)} brand={element.brand} discountPercentage={element.discountPercentage} id={element.id} rate={element.rating} thumbnail={element.thumbnail} price={element.price} description={element.description.slice(0,110)} images={element.images} ></LineCard>
            ))
        } 
</div>
</div>  
    </>
  )
}
