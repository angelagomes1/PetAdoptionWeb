 import { createSlice} from "@reduxjs/toolkit";
  const cartSlice= createSlice({
   name:"cart",
        initialState:{
         products:[],
       quantity:0,
       total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    },
    });

//const { createSelectorCreator } = require("reselect")

//  });
// const createSlice=()=>{
//     commerce.cart.retrive().then((cart)=>{
//         setCart(cart);
//     }).catch((error)=>{
//         console.log('There was error fetching cart', error);
//     });
//}
  export const {addProduct} = cartSlice.actions;
  export default cartSlice.reducer;
// export const cartReducer=(state,action)=>{
//     switch(action.type){
//         default:
//             return state;
//     }
// }