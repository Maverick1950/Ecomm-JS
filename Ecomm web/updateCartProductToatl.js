import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductToatl =()=>{
    const productSubTotal = document.querySelector('.productSubTotal');
    const productFinalTotal = document.querySelector('.productFinalTotal');

    let localCartProducts = getCartProductFromLS();
    let initialvalue = 0;
    let totalProductPrice = localCartProducts.reduce( (accum,curElem)=>{
        let productPrice = curElem.price || 0;
        return accum + productPrice;
    },initialvalue);
    totalProductPrice = Number(totalProductPrice.toFixed(2));
    
    productSubTotal.textContent = `₹${totalProductPrice.toFixed(2)}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
}
