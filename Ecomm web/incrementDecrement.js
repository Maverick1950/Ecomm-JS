import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement = (event,id,stock,price)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const productPrice = currentCardElement.querySelector(".productPrice");
    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find( (curProd)=> curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    } else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === "cartIncrement"){
        if(quantity<stock){
            quantity += 1;
        }
        else if (quantity === stock){
            quantity = stock;
            localStoragePrice = price*stock;
        }
    }
    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
        quantity -= 1;
        }
    }

    localStoragePrice = price*quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = { id, quantity, price: localStoragePrice };


    updatedCart = localCartProducts.map( (curProd)=>{
        return (curProd.id === id) ? updatedCart : curProd
    });
    // console.log(`card${id}`)
    // console.log(localStoragePrice);

    localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));

    productQuantity.innerHTML = quantity;
    productPrice.innerText = localStoragePrice;
}