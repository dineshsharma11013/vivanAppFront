import React from 'react'
import Header from '../partials/Header'
import Layout from '../partials/Layout'


function Home() {
  return (
    <>
 
 <Layout>

  {/*== Banner // Slider Area Start ==*/}
  <section id="banner-area" className="banner__2">
    <div className="ruby-container">
      <div className="row">
        <div className="col-lg-12">
          <div id="banner-carousel" className="owl-carousel">
            {/* Banner Single Carousel Start */}
            <div className="single-carousel-wrap slide-item-1">
              <div className="banner-caption text-center text-lg-left">
                <h4>Rubby Store</h4>
                <h2>Ring Solitaire Princess</h2>
                <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <a href="#" className="btn-long-arrow">Shop Now</a>
              </div>
            </div>
            {/* Banner Single Carousel End */}
            {/* Banner Single Carousel Start */}
            <div className="single-carousel-wrap slide-item-2">
              <div className="banner-caption text-center text-lg-left">
                <h4>New Collection 2017</h4>
                <h2>Beautiful Earrings</h2>
                <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                <a href="#" className="btn-long-arrow">Shop Now</a>
              </div>
            </div>
            {/* Banner Single Carousel End */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Banner Slider End ==*/}
  {/*  Products Area Start */}
  <div id="featured-products-wrapper" className="p-9">
    <div className="ruby-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Section Title Start */}
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Trending stunning Unique</p>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="products-wrapper products-gird">
        <div className="row custom-padding">
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge">New</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-2.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge sale">Sale</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-3.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge">New</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge sale">Sale</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-3.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge sale">Sale</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-2.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge sale">Sale</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge">New</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge">New</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-2.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge">New</span>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-3.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
            </div>
          </div>
          {/* Single Product End */}
          {/* Single Product Start */}
          <div className="col-sm-6 col-lg-3">
            <div className="single-product-item">
              <figure className="product-thumb">
                <a href="#"><img src="/assets/img/product-1.jpg" alt="Product" className="img-fluid" /></a>
              </figure>
              <div className="product-details">
                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                  <i className="fa fa-star-o" />
                </div>
                <span className="price">$52.00</span>
                <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
              </div>
              <span className="product-bedge sale">Sale</span>
            </div>
          </div>
          {/* Single Product End */}
        </div>
      </div>
    </div>
  </div>
  {/*  Products Area End */}
  {/*== Testimonial Area Start ==*/}
  <section id="testimonial-area">
    <div className="ruby-container">
      <div className="testimonial-wrapper">
        <div className="row">
          <div className="col-lg-12 text-center">
            {/* Section Title Start */}
            <div className="section-title">
              <h2>What People Say</h2>
              <p>Testimonials</p>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 m-auto text-center">
            <div className="testimonial-content-wrap">
              <div id="testimonialCarousel" className="owl-carousel">
                <div className="single-testimonial-item">
                  <p>These guys have been absolutely outstanding. When I needed them they came through in
                    a big way! I know that if you buy this theme, you'll get the one thing we all look
                    for when we buy on Themeforest, and that's real support for the craziest of
                    requests!</p>
                  <h3 className="client-name">Luis Manrata</h3>
                  <span className="client-email">you@email.here</span>
                </div>
                <div className="single-testimonial-item">
                  <p>These guys have been absolutely outstanding. When I needed them they came through in
                    a big way! I know that if you buy this theme, you'll get the one thing we all look
                    for when we buy on Themeforest, and that's real support for the craziest of
                    requests!</p>
                  <h3 className="client-name">John Dibba</h3>
                  <span className="client-email">you@email.here</span>
                </div>
                <div className="single-testimonial-item">
                  <p>These guys have been absolutely outstanding. When I needed them they came through in
                    a big way! I know that if you buy this theme, you'll get the one thing we all look
                    for when we buy on Themeforest, and that's real support for the craziest of
                    requests!</p>
                  <h3 className="client-name">Alex Tuntuni</h3>
                  <span className="client-email">you@email.here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Testimonial Area End ==*/}
  {/*== Newsletter Area Start ==*/}
  <section id="newsletter-area" className="p-9">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Section Title Start */}
          <div className="section-title">
            <h2>Join The Newsletter</h2>
            <p>Sign Up for Our Newsletter</p>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="newsletter-form-wrap">
            <form id="subscribe-form" action="https://d29u17ylf1ylz9.cloudfront.net/ruby-v2/ruby/assets/php/subscribe.php" method="post">
              <input id="subscribe" type="email" name="email" placeholder="Enter your Email  Here" required />
              <button type="submit" className="btn-long-arrow">Subscribe</button>
              <div id="result" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Newsletter Area End ==*/}
  {/* Footer Area Start */}
  
  </Layout>

  


    </>
  )
}

export default Home