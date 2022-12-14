const getCartLS=()=>{
    let cartLS={}
    let existLS= localStorage.getItem('cycle-cart')
    if(existLS) cartLS=JSON.parse(existLS)
    return cartLS
}
const addToCart=productID=>{
    let existCart=getCartLS()
    if(existCart[productID]){
        existCart[productID]+=1
    }
    else
        existCart[productID]=1
    localStorage.setItem('cycle-cart',JSON.stringify(existCart))
}
const removeFromCart=productID=>{
    let existCart=getCartLS()
    delete existCart[productID]
    localStorage.setItem('cycle-cart',JSON.stringify(existCart))
}

export {getCartLS,addToCart,removeFromCart}