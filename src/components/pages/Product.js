import React from 'react'
import Layout from '../partials/Layout'

function Product() {
  return (
    <>
    <Layout>
<div>
  {/*== Page Title Area Start ==*/}
  <div id="page-title-area">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-title-content">
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop-full-wide.html">Shop</a></li>
              <li><a href="single-product.html" className="active">Crown Summit Backpack</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== Page Title Area End ==*/}
  {/*== Page Content Wrapper Start ==*/}
  <div id="page-content-wrapper" className="p-9">
    <div className="ruby-container">
      <div className="row">
        {/* Single Product Page Content Start */}
        <div className="col-lg-12">
          <div className="single-product-page-content">
            <div className="row">
              {/* Product Thumbnail Start */}
              <div className="col-lg-5">
                <div className="product-thumbnail-wrap">
                  <div className="product-thumb-carousel owl-carousel">
                    <div className="single-thumb-item">
                      <a href="single-product.html"><img className="img-fluid" src="assets/img/single-pro-thumb.jpg" alt="Product" /></a>
                    </div>
                    <div className="single-thumb-item">
                      <a href="single-product.html"><img className="img-fluid" src="assets/img/single-pro-thumb-2.jpg" alt="Product" /></a>
                    </div>
                    <div className="single-thumb-item">
                      <a href="single-product.html"><img className="img-fluid" src="assets/img/single-pro-thumb-3.jpg" alt="Product" /></a>
                    </div>
                    <div className="single-thumb-item">
                      <a href="single-product.html"><img className="img-fluid" src="assets/img/single-pro-thumb-4.jpg" alt="Product" /></a>
                    </div>
                    <div className="single-thumb-item">
                      <a href="single-product.html"><img className="img-fluid" src="assets/img/single-pro-thumb-5.jpg" alt="Product" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Thumbnail End */}
              {/* Product Details Start */}
              <div className="col-lg-7 mt-5 mt-lg-0">
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
                  <div className="product-info-stock-sku">
                    <span className="product-stock-status">In Stock</span>
                    <span className="product-sku-status ml-5"><strong>SKU</strong> MH03</span>
                  </div>
                  <p className="products-desc">Ideal for cold-weathered training worked lorem ipsum outdoors,
                    the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out
                    the wind as ribbed cuffs and bottom band seal in body heat Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Enim, reprehenderit.</p>
                  <div className="product-quantity mt-5 d-flex align-items-center">
                    <div className="quantity-field">
                      <label htmlFor="qty">Qty</label>
                      <input type="number" id="qty" min={1} max={100} defaultValue={1} />
                    </div>
                    <a href="single-product.html" className="btn btn-add-to-cart">Add to Cart</a>
                  </div>
                  <div className="product-btn-group d-none d-sm-block">
                    <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+ Add to
                      Wishlist</a>
                    <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+ Add to
                      Compare</a>
                    <a href="single-product.html" className="btn btn-add-to-cart btn-compare">Email</a>
                  </div>
                </div>
              </div>
              {/* Product Details End */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Product Full Description Start */}
                <div className="product-full-info-reviews">
                  {/* Single Product tab Menu */}
                  <nav className="nav" id="nav-tab">
                    <a className="active" id="description-tab" data-toggle="tab" href="#description">Description</a>
                    <a id="reviews-tab" data-toggle="tab" href="#reviews">Reviews</a>
                  </nav>
                  {/* Single Product tab Menu */}
                  {/* Single Product tab Content */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="description">
                      <p>Stay comfortable and stay in the race no matter what the weather's up to. The
                        Bruno Compete Hoodie's water-repellent exterior shields you from the
                        elements, while advanced fabric technology inside wicks moisture to keep you
                        dry.Stay comfortable and stay in the race no matter what the weather's up
                        to. The Bruno Compete Hoodie's water-repellent exterior shields you from the
                        elements, while advanced fabric technology inside wicks moisture to keep you
                        dry.Stay comfortable and stay in the race no matter what the weather's up
                        to. The Bruno Compete Hoodie's water-repellent exterior shields you from the
                        elements, while advanced fabric technology inside wicks moisture to keep you
                        dry.</p>
                      <ul>
                        <li>Adipisicing elitEnim, laborum.</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Dolorem molestiae quod voluptatem! Sint.</li>
                        <li>Iure obcaecati odio pariatur quae saepe!</li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="reviews">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="product-ratting-wrap">
                            <div className="pro-avg-ratting">
                              <h4>4.5 <span>(Overall)</span></h4>
                              <span>Based on 9 Comments</span>
                            </div>
                            <div className="ratting-list">
                              <div className="sin-list float-left">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span>(5)</span>
                              </div>
                              <div className="sin-list float-left">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                                <span>(3)</span>
                              </div>
                              <div className="sin-list float-left">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <span>(1)</span>
                              </div>
                              <div className="sin-list float-left">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <span>(0)</span>
                              </div>
                              <div className="sin-list float-left">
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <i className="fa fa-star-o" />
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="rattings-wrapper">
                              <div className="sin-rattings">
                                <div className="ratting-author">
                                  <h3>Cristopher Lee</h3>
                                  <div className="ratting-star">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>(5)</span>
                                  </div>
                                </div>
                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit, sed quia res eos qui ratione voluptatem
                                  sequi Neque porro quisquam est, qui dolorem ipsum quia
                                  dolor sit amet, consectetur, adipisci veli</p>
                              </div>
                              <div className="sin-rattings">
                                <div className="ratting-author">
                                  <h3>Nirob Khan</h3>
                                  <div className="ratting-star">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>(5)</span>
                                  </div>
                                </div>
                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit, sed quia res eos qui ratione voluptatem
                                  sequi Neque porro quisquam est, qui dolorem ipsum quia
                                  dolor sit amet, consectetur, adipisci veli</p>
                              </div>
                              <div className="sin-rattings">
                                <div className="ratting-author">
                                  <h3>MD.ZENAUL ISLAM</h3>
                                  <div className="ratting-star">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>(5)</span>
                                  </div>
                                </div>
                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit, sed quia res eos qui ratione voluptatem
                                  sequi Neque porro quisquam est, qui dolorem ipsum quia
                                  dolor sit amet, consectetur, adipisci veli</p>
                              </div>
                            </div>
                            <div className="ratting-form-wrapper fix">
                              <h3>Add your Comments</h3>
                              <form action="#" method="post">
                                <div className="ratting-form row">
                                  <div className="col-12 mb-4">
                                    <h5>Rating:</h5>
                                    <div className="ratting-star fix">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-12 mb-4">
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" placeholder="Name" type="text" />
                                  </div>
                                  <div className="col-md-6 col-12 mb-4">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" placeholder="Email" type="text" />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label htmlFor="your-review">Your Review:</label>
                                    <textarea name="review" id="your-review" placeholder="Write a review" defaultValue={""} />
                                  </div>
                                  <div className="col-12">
                                    <input defaultValue="add review" type="submit" />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Product tab Content */}
                </div>
                {/* Product Full Description End */}
              </div>
            </div>
          </div>
        </div>
        {/* Single Product Page Content End */}
      </div>
    </div>
  </div>
  {/*== Page Content Wrapper End ==*/}
</div>

    </Layout>
    </>
  )
}

export default Product