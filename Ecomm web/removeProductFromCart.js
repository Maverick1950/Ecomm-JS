import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter( (curProd)=> curProd.id !== id) 

    localStorage.setItem('cartProductsLS',JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();}

    updateCartValue(cartProducts);
};