import React, { useState } from 'react';
import Link from './Link';
import { Menu,MessageCircleX } from 'lucide-react';
const links = [
  {
    id: 1,
    name: "Google",
    path: "https://www.google.com"
  },
  {
    id: 2,
    name: "YouTube",
    path: "https://www.youtube.com"
  },
  {
    id: 3,
    name: "Facebook",
    path: "https://www.facebook.com"
  },
  {
    id: 4,
    name: "GitHub",
    path: "https://github.com"
  },
  {
    id: 5,
    name: "React",
    path: "https://react.dev"
  }
];

const Navbar = () => {

  const [open,setOpen]=useState(false);

  const navlinks=links.map(route=>
<Link key={route.
id} route={route}
></Link>)

    return (
      <nav className='flex justify-between mx-10 mt-5'>
         <span className='flex' onClick={()=>setOpen(!open)}>

          {
            open?
            <MessageCircleX className='md:hidden'></MessageCircleX>:
            
            <Menu className=
             'md:hidden'></Menu>
          }
          <ul className={`md:hidden absolute duration-1000
          ${open?'top-15':' -top-40'}
             bg-amber-200 text-black`}>
            {navlinks}
          </ul>
          
          
            <h3 className='ml-4'> My navbar</h3>
         </span>
  
        <ul className='md:flex gap-5 hidden'>
            {
              navlinks
            }
            
        </ul>

{/* <ul className="flex"> */}
    {/*<li className='mr-10'><a href="">Home</a></li>
    <li className="mr-10">
    <a href="">Blog</a>
   </li>

   <li className="mr-10">
    <a href="">About</a>
   </li>

   <li className="mr-10">
    <a href="">Contact</a>
   </li>*/}
{/* </ul> */}
{/*  */}
     <button>Sign it</button>
     </nav>
    );
};

export default Navbar;