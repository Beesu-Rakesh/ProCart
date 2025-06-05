import React, {useState} from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import {action} from "../redux/slices/cartSlice"
import { useDispatch,useSelector } from 'react-redux';

function ProductList(props) {
    const { productList, isCart } = props;
    const cartProducts = useSelector((store) => store.cartReducer.cartProducts);
    const dispatch = useDispatch();

    const handleAddProduct = (product) => {
        dispatch(action.addToCart(product));
    };

    const handleRemoveProduct = (product) => {
        dispatch(action.deleteFromCart(product));
    };

    const getCartQuantity = (id) => {
        const item = cartProducts.find(product => product.id === id);
        return item ? item.indQuantity : 0;
    };

    return (
        <>
            {productList.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                productList.map((product) => {
                    const quantity = getCartQuantity(product.id);
                    const isInCart = quantity > 0;

                    return (
                        <div className="product shadow-md" key={product.id}>
                            <img src={product.image} alt="product_img" className="product-image" />
                            <div className="product-meta">
                                <p className="product-title">{product.title}</p>
                                <p className="price">
                                    ₹{Math.round(product.price * 83).toLocaleString('en-IN')}
                                </p>
                            </div>

                            {isCart || isInCart ? (
                                <div className="add_to_cart_container">
                                    <FaSquareMinus fontSize="large" onClick={() => handleRemoveProduct(product)} />
                                    <div className="current_cart_count">{quantity}</div>
                                    <FaSquarePlus fontSize="large" onClick={() => handleAddProduct(product)} />
                                </div>
                            ) : (
                                <button className="add-btn" onClick={() => handleAddProduct(product)}>Add</button>
                            )}
                        </div>
                    );
                })
            )}
        </>
    );
}

function PrintCount(props) {
  const {cartProducts,id} = props;
  const product = cartProducts.find((product) => product.id === id);
  const quantity = product ? product.indQuantity : 0;
  return <>{quantity}</>;
}

export default ProductList