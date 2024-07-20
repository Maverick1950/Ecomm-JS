import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductToatl =()=>{
    let localCartProducts = getCartProductFromLS();
    let initialvalue = 0;
    let totalProductPrice = localCartProducts.reduce( (accum,curElem)=>{
        let productPrice = curElem.price || 0;
        return accum + productPrice;
    },initialvalue);
    totalProductPrice = Number(totalProductPrice.toFixed(2));
    
    
}