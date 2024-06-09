import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCumb = () => {
    let {pathname} = useLocation();
    console.log(pathname)
    pathname = pathname.split('/').filter(Boolean)
   let bread= ''
   let lastIndex = pathname.length-1;
   
  return (
   
    <div>
      { pathname.length > 0 && <Link to={'/'} >Home</Link>}
      {
        pathname.map((el,i)=>{
           bread+=`/${el}`;
         return  i === lastIndex ? <span key={i}> /{el} </span> : <span key={i}><Link  to={`/${el}`}>/{el}</Link></span>
        })
      }
    </div>
  )
}

export default BreadCumb
