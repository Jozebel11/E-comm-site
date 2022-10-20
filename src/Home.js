import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
  return (
    <div className='home'>
        <div className='home_container'>
            
            <div className='home_promotion'>
              <div className='home_promotion_info'>
              <div class="carousel slide" id="myCarousel">
        <div class="carousel-inner">
 
            <div class="item active">
            
                <div class="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt=""/></a>
                </div>
                            
                <div class="caption row-fluid">
                    <div class="span4"><h3>Nullam Condimentum Nibh Etiam Sem</h3>
                    <a class="btn btn-mini" href="#">&raquo; Read More</a>
                    </div>                	
                	<div class="span8"><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                	</div>
                </div>
                                                         
            </div>

            <div class="item">
            
                <div class="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt=""/></a>
                </div>
                            
                <div class="caption row-fluid">
                    <div class="span4"><h3>Nullam Condimentum Nibh Etiam Sem</h3>
                    <a class="btn btn-mini" href="#">&raquo; Read More</a>
                    </div>                	
                	<div class="span8"><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                	</div>
                </div>
                                                         
            </div>           

            <div class="item">
            
                <div class="bannerImage">
                    <a href="#"><img src="http://placehold.it/960x405" alt=""/></a>
                </div>
                            
                <div class="caption row-fluid">
                    <div class="span4"><h3>Nullam Condimentum Nibh Etiam Sem</h3>
                    <a class="btn btn-mini" href="#">&raquo; Read More</a>
                    </div>                	
                	<div class="span8"><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                	</div>
                </div>
                                                         
            </div>                    
 
        </div>
        
        <div class="control-box">                            
            <a data-slide="prev" href="#myCarousel" class="carousel-control left">‹</a>
            <a data-slide="next" href="#myCarousel" class="carousel-control right">›</a>
        </div>
                              
    </div>
              
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
                  title="Fitbit Charge 4 Fitness Activity Tracker"
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