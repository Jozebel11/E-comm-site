
import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [{ basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        
        
        <div className='checkout_container'>
            <div className='checkout_left'>
            
                <div>
                    <h2 className='checkout_title'>
                        Your Basket has {basket.length} items
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout