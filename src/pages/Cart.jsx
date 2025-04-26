import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux'

function Cart() {
  const productList = useSelector((store)=> {return store.cartReducer.cartProducts});
  return (
    <>
    <h1>Cart</h1>
    <ProductList productList={productList}></ProductList>
    </>
  )
}

export default Cart