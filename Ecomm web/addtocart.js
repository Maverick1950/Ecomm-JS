import { getCartProductFromLS } from "../getCartProducts";
import { updateCartValue } from "../updateCartValue";

getCartProductFromLS();

export const addToCart = (event,id,stock)=>{

let arrLocalStorageProduct = getCartProductFromLS();

const currProdElem = document.querySelector(`#card${id}`);
// console.log(currProdElem);

let quantity = currProdElem.querySelector(".productQuantity").innerHTML;

let price  = currProdElem.querySelector(".productPrice").innerHTML;
price = price.replace("₹","");

let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
    
);

if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = {id,quantity,price};

    updatedCart = arrLocalStorageProduct.map( (curProd)=>{
        return (curProd.id === id) ? updatedCart : curProd
    });

    localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));

}

if(existingProd){
    return false;
}

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