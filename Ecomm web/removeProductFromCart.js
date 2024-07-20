import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductToatl } from "./updateCartProductToatl";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id)=>{
  console.log(id)
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter( (curProd)=> curProd.id !== id);

    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts));
    let rmvDiv = document.querySelector(`#card${id}`);
    if (rmvDiv) {
      console.log(`Trying to remove #cards${id}`);
      rmvDiv.remove();
      console.log("Element removed:", rmvDiv);
    } else {
      console.log("Element not found");
    }

    updateCartValue(cartProducts);
    updateCartProductToatl();
};