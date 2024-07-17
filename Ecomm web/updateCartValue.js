export const updateCartValue = (cartProducts)=>{
  const cartValue = document.querySelector('#cartValue').innerHTML 
  = `<i class="fa-solid fa-cart-shopping">${cartProducts.length} </i>` 
}