import React, {useState} from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import { removeFromCart } from '../../Hooks/useLocal';
import OrderReview from './../OrderReview/OrderReview';

const OrdersReview = () => {
    const [products]=useProducts()
    const [isChanged,setIsChanged]=useState(false)
    const [cart]=useCart(products,isChanged,setIsChanged)

    let removeFromLSHandler=productID=>{
        removeFromCart(productID)
        setIsChanged(true)
    }

    return (
        <div className='container-fluid bg-light'>
            <h1 className='text-center'>Reviwed Orders</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-8">
                        <div className="row row-cols-1 g-4">
                            {
                                cart.map(product=><OrderReview product={product} key={product._id}
                                removeFromLSHandler={removeFromLSHandler}
                                ></OrderReview>)
                            }
                        </div>
                    </div>
                    <div className="col-6 col-md-4 bg-dark text-light h-75 position-sticky top-0">
                        <Cart cart={cart} removeFromLSHandler={removeFromLSHandler}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersReview;