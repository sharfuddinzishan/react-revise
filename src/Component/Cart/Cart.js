import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total,nbOfProduct=0
    total=cart.reduce((sum,item)=>sum+=(parseInt(item?.price)*item?.quantity),0)
    return (
        <>
                <table>
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                cart.map(pd=>
                                <>
                                    <tr className='lh-sm cart-body'>
                                        <td className='text-center'>{++nbOfProduct}</td>
                                        <td className='text-center'>{pd?.model}</td>
                                        <td className='text-center'>{pd?.price}</td>
                                        <td className='text-center'>{pd?.quantity}</td>
                                        <td className='text-end'>{pd?.quantity*pd?.price}</td>
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
                    </tfoot>
                </table>
                
           
        </>
    );
};

export default Cart;