import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event,id,stock)=>{

let arrLocalStorageProduct = getCartProductFromLS();

const currProdElem = document.querySelector(`#card${id}`);
// console.log(currProdElem);

let quantity = currProdElem.querySelector(".productQuantity").innerHTML;

let price  = currProdElem.querySelector(".productPrice").innerHTML;
price = price.replace("₹","");
price = Number(price * quantity);
quantity = Number(quantity);

let updatedCart = {id,price,quantity};

// console.log(quantity,price);

arrLocalStorageProduct.push(updatedCart);

//set item is used to set data in cartproducts from 
//function in which we pushed in string then when we call function we can use getitem from that.
localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));

updateCartValue(arrLocalStorageProduct);
}