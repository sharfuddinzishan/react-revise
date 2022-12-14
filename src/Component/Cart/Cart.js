import React from 'react';
import './Cart.css'
const Cart = ({cart,removeFromLSHandler,productPage,children}) => {
    let total,nbOfProduct=0
    total=cart.reduce((sum,item)=>sum+=(parseInt(item?.price)*item?.quantity),0)
    return (
        <>
                <table className='table-sm'>
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                cart.map(pd=>
                                <>
                                    <tr className='lh-sm cart-body'>
                                        <td className='text-center'>{++nbOfProduct}</td>
                                        <td className='text-center'>{pd?.model.slice(0,21)}</td>
                                        <td className='text-center'>{pd?.price}</td>
                                        <td className='text-center'>{pd?.quantity}</td>
                                        <td className='text-end'>{pd?.quantity*pd?.price}</td>
                                        {
                                            productPage && <td className='text-end'>
                                            <button className='btn btn-sm btn-danger'
                                            onClick={()=>removeFromLSHandler(pd?._id)}
                                            >X</button>
                                            </td>
                                        }
                                    </tr>
                                </>
                                        )  
                            }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='3'className='text-center'>Total: </td>
                            <td colSpan='2' className='text-end'>{total}</td>
                        </tr>
                        <tr>
                            <td colSpan='5' className='text-center'>
                                {
                                    children
                                }
                            </td>
                        </tr>
                    </tfoot>
                </table>
                
           
        </>
    );
};

export default Cart;