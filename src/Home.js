import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='' alt='back-groundImg'/>
            <div className='home_row'>
                <Product
                title = 'The lean startup'
                price = '29.99'
                rating = {5} />
                <Product />
            </div>
            <div className='home_row'>
            <Product />
            <Product />
            <Product /> 
            </div>
            <div className='home_row'>
            <Product />
            </div>
        </div>
    </div>
  )
}

export default Home