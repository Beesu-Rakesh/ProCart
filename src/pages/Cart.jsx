import React from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const productList = useSelector((store) => store.cartReducer.cartProducts);
    const navigate = useNavigate();

    // Calculate total amount in INR
    const totalAmount = productList.reduce((sum, product) => {
        // Convert price to INR and multiply by quantity, round to integer
        return sum + Math.round(product.price * 83) * product.indQuantity;
    }, 0);

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
                <>
                <ProductList productList={productList} isCart={true} />
                <div style={{ textAlign: "right", marginTop: "2rem",  marginBottom: "2rem",fontWeight: "bold", fontSize: "1.2rem" }}>
                        Total Amount: ₹{totalAmount.toLocaleString('en-IN')}
                </div>
                </>
            )}
        </>
    );
}

export default Cart;
