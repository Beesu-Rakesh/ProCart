import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        //array of objects -> {details of the product, individual product quantity}
        cartProducts:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartQuantity+=1;
            const productToBeAdded = action.payload;
            const requiredProduct = state.cartProducts.find((product)=>{return product.id === productToBeAdded.id});
            if(requiredProduct == undefined){
                productToBeAdded.indQuantity = 1;
                state.cartProducts.push(productToBeAdded);
            }else{
                requiredProduct.indQuantity+=1;
            }
        },
        deleteFromCart:(state,action)=>{
            const productToBeDeleted = action.payload;
            const productIndex = state.cartProducts.findIndex((product)=>{return product.id === productToBeDeleted.id});
            if(productIndex == -1){

            }else{
                let product = state.cartProducts[productIndex];
                if(product.indQuantity == 0){
                    state.cartProducts.splice(productIndex,1);
                }else{
                    state.cartProducts[productIndex].indQuantity-=1;
                    state.cartQuantity-=1;
                }
            }
        },
    }
});

export const action = cartSlice.actions;
export default cartSlice;