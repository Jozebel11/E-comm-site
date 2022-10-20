import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is in the basket >>>", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
    
  };
  return (
    <div className='product'>
        <img src={image} alt='product-image'/>
        <div className='product_info'>
            <p className='product_title'>{title}</p>
            <p className='product_price'>
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                  <span>⭐</span>
                ))}
            </div>
        </div>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product