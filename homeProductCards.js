import { addToCart } from "./Ecomm web/addtocart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = 
document.querySelector("#productContainer");

const productTemplate = 
document.querySelector("#productTemplate");

export const showProductContainer = (products)=>{
    if(!products){
        return false;
    }

    products.forEach((curProd) => {
        //destructor
        const {brand,category,description,id,image,name,price,stock} = curProd;

        //copying data of api using importNode method
        const productClone = document.importNode(productTemplate.content, true);
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        //filling value using data from api
        productClone.querySelector(".productName").innerHTML = name;
        productClone.querySelector(".category").innerHTML = category;
        productClone.querySelector(".productDescription").innerHTML = description;
        productClone.querySelector(".productStock").innerHTML = stock;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").innerHTML = `₹${price}`;
        productClone.querySelector(".productActualPrice").innerHTML = `₹${price * 4}`;
  
        productClone.querySelector(".stockElement").addEventListener('click',(event) => {
            homeQuantityToggle(event,id,stock);
        })

        productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
            addToCart(event,id,stock);
        })

        productContainer.append(productClone);
    });

};


