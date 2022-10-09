import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function CheckoutProduct({id, image, title, price, rating, quantity}) {
    const [{ basket }, dispatch] = useStateValue();
    const deleteFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="checkoutProduct">
        <img className='checkoutProduct_image' src={image}/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <div className='quantity_controlls'>
                <div className='quantity_container'>
                   <span>Qty:</span> 
                   <input className='checkoutProduct_quantity' type='number' min="1" max="9" value={quantity}></input>
                </div>

                <button onClick={deleteFromBasket}>
                    <span>Delete</span>
                </button>

            </div>
        </div>

    </div>
  )
}

export default CheckoutProduct