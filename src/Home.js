import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            
            <div className='home_promotion'>
              <div className='home_promotion_info'>
                <h4>Now only <span><small>£</small>498.99</span>!</h4>
                <img className="promotion_image" src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' alt='apple-ipad-pro'/>
                <p>Apple iPad Pro 128GB</p>
              </div>

            </div>
            <div className='home_row'>
                <Product className='product'
                 id="12321341"
                 title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                 price={11.96}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product className='product'
                  id="49538094"
                  title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater"
                  price={239.0}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
               />
            </div>
            <div className='home_row'>
                <Product className='product'
                  id="4903850"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={199.99}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product className='product'
                  id="23445930"
                  title="Amazon Echo (3rd generation)"
                  price={98.99}
                  rating={5}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product className='product'
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, 128GB)"
                  price={498.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
                  
            <div className='home_row'>
                <Product className='product'
                  id="90829332"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={1094.98}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home