import React from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const productList = useSelector((store) => store.cartReducer.cartProducts);
    const navigate = useNavigate();

    return (
        <>
            <h1>Cart</h1>
            {productList.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <img 
                        src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small_2x/empty-cart-flat-illustration-concept-vector.jpg" 
                        alt="Empty Cart" 
                        style={{ width: "350px", opacity: 0.6 }}
                    />
                    <p>Your cart is empty</p>
                    <button 
                        onClick={() => navigate('/')}
                        style={{
                            marginTop: "1rem",
                            padding: "0.6rem 1.2rem",
                            backgroundColor: "orange",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <ProductList productList={productList} isCart={true} />
            )}
        </>
    );
}

export default Cart;
