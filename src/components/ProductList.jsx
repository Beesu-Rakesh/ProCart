import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import {action} from "../redux/slices/cartSlice"
import { useDispatch,useSelector } from 'react-redux';

function ProductList(props) {
    const { productList } = props;
    const cartProducts = useSelector((store)=> {return store.cartReducer.cartProducts});
    const dispatch = useDispatch();
    const handleAddProduct = (product)=> {
      dispatch(action.addToCart(product));
    };
    const handleRemoveProduct = (product)=> { 
      dispatch(action.deleteFromCart(product));
    };
  return (
    <>
    {productList.length == 0 ? <h2>Loading...</h2>:productList.map((product)=>{
        return(<div className="product shadow-md" key={product.id}>
          <img src={product.image} alt="product_img"
          className="product-image" />
          <div className="product-meta">
            <p className="product-title">{product.title}</p>
            <p className="price">{product.price }</p>
          </div>
          <div className="add_to_cart_container">
          <FaSquareMinus fontSize="large" onClick = {() => handleRemoveProduct(product)}/>
          <div className="current_cart_count">
            {<PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>}
          </div>
          <FaSquarePlus fontSize="large"  onClick = {() => handleAddProduct(product)}/>
          </div>
        </div>
        )
      })
      }
    </>
  )
}

function PrintCount(props) {
  const {cartProducts,id} = props;
  const product = cartProducts.find((product) => product.id === id);
  const quantity = product ? product.indQuantity : 0;
  return <>{quantity}</>;
}

export default ProductList