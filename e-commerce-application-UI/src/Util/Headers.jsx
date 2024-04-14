import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiUserCircle } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { PiGift } from "react-icons/pi";
import { SiAmazonecs } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { PiDotsThreeVertical } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Headers = (props) => {
  
  let [isHover,setIsHover]=useState(false)

  let user=props.user

  

      

  return (
    <>
    
    <div className='h-20 w-full flex items-center justify-center '>
      
        <div className='  h-16 w-4/5  border-solid bg-white flex items-center justify-evenly'>
          <div className='  w-fit'>
            <Link to={"/"}>
            <img  className=' ml-20 h-10' src="/src/Images/Flip_Logo.png " alt="" title='FlipKart'/>
            </Link>
          </div>
          <div className='w-4/5'>
             <input  title='Search for Products, Brands and more' className='font-medium h-10 w-full p-1 bg-sky-50 rounded-xl outline-none border-white' type="search" 
              placeholder={`Search for Products, Brands and More` }/>
          </div>
        </div>
     
        <div className=' h-16 w-2/5  bg-white flex items-center justify-around'>
         
       <div>
        {
        (user.authenticated && user.role==="CUSTOMER")?<LinkUser user={user}/>:<LinkRegister/> 
         }
       
       </div>

       <div>
        {
          ( user.authenticated && user.role==="CUSTOMER")?<Link className=' flex items-center gap-2.5 text-lg'> <IoCartOutline /> Cart</Link>:<div></div>
        }
       </div>

 
            <div className='text-lg' title='Become a Seller'>
              <Link to={"/register"}>Become a Seller</Link>
            </div> 
        <div title='Options' onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} > 

        <span className=' cursor-pointer p-4  flex items-center justify-center text-lg' >
        <Link> <PiDotsThreeVertical /> </Link>
        </span>
         {
          isHover&& (
            <div className='absolute right-1  w-fit h-fit mr-10 bg-white shadow-md p-2 ' >
                <ul>
                  <li title='Contact us' className='mr-16  hover:bg-gray-100 p-1 flex items-center gap-2.5'>
                          <Link>Contact Us</Link>
                  </li>
                  <li title='Terms & Conditions' className='mr-16  hover:bg-gray-100 p-1 flex items-center gap-2.5'>
                          <Link>Terms & Conditions</Link>
                  </li>
                </ul>
            </div>
          ) }
        </div>
        </div>
    </div>
    </>
  )
}

export default Headers





const LinkRegister = () => {
  let[isOpen,setIsOpen]=useState(false)
  return (
    <div className="relative"  onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}>
  <span
    className="cursor-pointer   flex items-center justify-center text-lg hover:text-white hover:bg-blue-500 p-3 hover:rounded-xl"
  >
   <Link to={"/login"} className='flex items-center gap-2.5'><PiUserCircle/> Login</Link>
  </span>
  {isOpen && (
    <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-md p-4 ">
      <ul>
        <li className="mb-2">
          <Link className='flex items-center justify-between border-solid border-b-2 p-2' title='Sign Up'>
          <div> New Customer?</div>
          <div>
            <Link to={"/register"} className='text-blue-500 font-bold' title='Sign Up'>Sign Up</Link>
          </div>
           </Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='My Profile'>
        <Link to={"/login"} className='flex items-center gap-2.5 '> <PiUserCircle/> My Profile</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Flipkart Plus Zone'>
        <Link className='flex items-center gap-2.5'>  <SiAmazonecs /> Flipkart Plus Zone</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Orders'>
         <Link className='flex items-center gap-2.5'><BsBoxSeam /> Orders</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='WishList'>
        <Link className='flex items-center gap-2.5'>  <GoHeart />  WishList</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Rewards'>
         <Link className='flex items-center gap-2.5'> <PiGift /> Rewards</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p1 flex items-center gap-2.5" title='GiftCards'>
        <Link className='flex items-center gap-2.5'>  <HiOutlineCreditCard /> GiftCards</Link>
        </li>
      </ul>
    </div>
  )}

</div>

  )
}



 const LinkUser = (prop) => {
  let user=prop.user
  let [state,setState]=useState(false)
  return (
    <div className="relative"  onMouseEnter={() => setState(true)}
    onMouseLeave={() => setState(false)}>
  <span
    className="cursor-pointer   flex items-center justify-center text-lg"
  >
   <Link to={"/login"} className='flex items-center gap-2.5 p-1'><PiUserCircle/> {user.username}</Link>
  </span>
  {state && (
    <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-md p-4 ">
      <ul>
        
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='My Profile'>
        <Link to={"/login"} className='flex items-center gap-2.5 '> <PiUserCircle/> My Profile</Link>
        </li>
        <li className='mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5' title='Super Coin Zone'>
        <Link  className='flex items-center gap-2.5'> <BsLightningCharge /> Super Coin Zone</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Flipkart Plus Zone'>
        <Link className='flex items-center gap-2.5'>  <SiAmazonecs /> Flipkart Plus Zone</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Orders'>
         <Link className='flex items-center gap-2.5'><BsBoxSeam /> Orders</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='WishList'>
        <Link className='flex items-center gap-2.5'>  <GoHeart />  WishList</Link>
        </li>
        <li className='mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5' title='Super Coin Zone'>
        <Link  className='flex items-center gap-2.5'> <BsLightningCharge /> Coupons </Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Rewards'>
         <Link className='flex items-center gap-2.5'> <PiGift /> Rewards</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p1 flex items-center gap-2.5" title='GiftCards'>
        <Link className='flex items-center gap-2.5'>  <HiOutlineCreditCard /> GiftCards</Link>
        </li>
        <li className="mb-2 hover:bg-gray-100 p1 flex items-center gap-2.5" title='GiftCards'>
        <Link className='flex items-center gap-2.5'> <FiLogOut /> LogOut</Link>
        </li>
      </ul>
    </div>
  )}

</div>

  )
}













{/* <div>

</div>
<div className='flex item-center justify-around'>
<Link to={"/"}>Logo</Link>
 <Link to={"/login"}>Login</Link>
<Link to={"/register"}>Register</Link>
</div> */}