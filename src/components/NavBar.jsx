import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import {useSelector} from "react-redux"

function NavBar() {
  const quantity = useSelector((store)=> {return store.cartReducer.cartQuantity});
  return (
    <div className='navbar'>
      <Link to="/">
        <div className='home_container'>
          <IoHomeOutline />
        </div>
      </Link>
      <Link to="/user">
        <div className='user_container'>
          <FaRegUser fontSize="large"/>
        </div>
      </Link>
      <Link to="/cart">
      <div className='cart_container'>
        <BsCart3 fontSize="large"/>
        <div className='cart_quantity'>{quantity}</div>
      </div>
      </Link>
    </div>
  )
}

export default NavBar