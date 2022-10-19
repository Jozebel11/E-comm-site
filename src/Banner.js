import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='promotion_container'>
            <div className='promotion_left'>
                <p className='promotion_info'>Get <span>15%</span> off your first order with code</p>

            </div>
            <div className='promotion_right'>
                <p className='promotion_code'>FIRST15</p>

            </div>
        </div>
    </div>
  )
}

export default Banner