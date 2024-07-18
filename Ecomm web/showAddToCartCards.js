import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { removeProductFromCart } from "./removeProductFromCart";


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter( (curProd)=>{
    return cartProducts.some( (curElem)=> curElem.id ===curProd.id )
});
//some fetch the same data available in other place.

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = ()=>{
    filterProducts.forEach((curProd)=>{
    const {id,category,image,name,stock,price} = curProd;

    let productClone = document.importNode(templateContainer.content,true);
    
    const lSActualData = fetchQuantityFromCartLS(id,price)
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").innerHTML = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = image;
    productClone.querySelector(".productName").innerHTML = name;
    productClone.querySelector(".productPrice").innerHTML = lSActualData.quantity;
    productClone.querySelector(".productQuantity").innerHTML =lSActualData.price ;

    productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>{
        removeProductFromCart(id);
    } )


    cartElement.append(productClone);
    });
};

showCartProduct();