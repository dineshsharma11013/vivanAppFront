import React from 'react'
import Layout from '../partials/Layout'
import QuickView from '../partials/QuickView'

function Shop() {
  return (
    <>
    <Layout>
<div>
  <div id="page-title-area">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-title-content">
            <h1>Shop</h1>
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html" className="active">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== Page Title Area End ==*/}
  {/*== Page Content Wrapper Start ==*/}
  <div id="page-content-wrapper" className="p-9">
    <div className="container">
      <div className="row">
        {/* Sidebar Area Start */}
        <div className="col-lg-3 mt-5 mt-lg-0 order-last order-lg-first">
          <div id="sidebar-area-wrap">
            {/* Single Sidebar Item Start */}
            <div className="single-sidebar-wrap">
              <h2 className="sidebar-title">Shop By</h2>
              <div className="sidebar-body">
                <div className="shopping-option">
                  <h3>Shopping Options</h3>
                  <div className="shopping-option-item">
                    <h4>Color</h4>
                    <ul className="color-option-select d-flex">
                      <li className="color-item black">
                        <div className="color-hvr">
                          <span className="color-fill" />
                          <span className="color-name">Black</span>
                        </div>
                      </li>
                      <li className="color-item green">
                        <div className="color-hvr">
                          <span className="color-fill" />
                          <span className="color-name">green</span>
                        </div>
                      </li>
                      <li className="color-item red">
                        <div className="color-hvr">
                          <span className="color-fill" />
                          <span className="color-name">red</span>
                        </div>
                      </li>
                      <li className="color-item yellow">
                        <div className="color-hvr">
                          <span className="color-fill" />
                          <span className="color-name">yellow</span>
                        </div>
                      </li>
                      <li className="color-item orange">
                        <div className="color-hvr">
                          <span className="color-fill" />
                          <span className="color-name">Orange</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shopping-option-item">
                    <h4>MANUFACTURER</h4>
                    <ul className="sidebar-list">
                      <li><a href="#">Dolce (19)</a></li>
                      <li><a href="#">Gabbana (4)</a></li>
                      <li><a href="#">Nike (3)</a></li>
                      <li><a href="#">Nokia (5)</a></li>
                      <li><a href="#">Xiaomi (7)</a></li>
                      <li><a href="#">Other (33)</a></li>
                    </ul>
                  </div>
                  <div className="shopping-option-item">
                    <h4>Price</h4>
                    <ul className="sidebar-list">
                      <li><a href="#">$0.00 - $9.99 (2)</a></li>
                      <li><a href="#">$10.00 - $19.99 (3)</a></li>
                      <li><a href="#">$20.00 - $29.99 (5)</a></li>
                      <li><a href="#">$30.00 - $39.99 (2)</a></li>
                      <li><a href="#">$40.00 - $49.99 (10)</a></li>
                      <li><a href="#">$50.00 - $59.99 (12)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Sidebar Item End */}
            {/* Single Sidebar Item Start */}
            <div className="single-sidebar-wrap">
              <h2 className="sidebar-title">My Wish List</h2>
              <div className="sidebar-body">
                <div className="small-product-list">
                  <div className="single-product-item">
                    <figure className="product-thumb">
                      <a href="#"><img className="mr-2 img-fluid" src="assets/img/product-2.jpg" alt="Products" /></a>
                    </figure>
                    <div className="product-details">
                      <h2><a href="single-product.html">Sprite Yoga Companion Kit</a></h2>
                      <span className="price">$6.00</span>
                    </div>
                  </div>
                  <div className="single-product-item">
                    <figure className="product-thumb">
                      <a href="single-product.html"><img className="mr-2 img-fluid" src="assets/img/product-3.jpg" alt="Products" /></a>
                    </figure>
                    <div className="product-details">
                      <h2><a href="single-product.html">Set of Sprite Yoga Straps</a></h2>
                      <span className="price">$88.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Sidebar Item End */}
            {/* Single Sidebar Item Start */}
            <div className="single-sidebar-wrap">
              <h2 className="sidebar-title">MOSTVIEWED PRODUCTS</h2>
              <div className="sidebar-body">
                <div className="small-product-list">
                  <div className="single-product-item">
                    <figure className="product-thumb">
                      <a href="single-product.html"><img className="mr-2 img-fluid" src="assets/img/product-1.jpg" alt="Products" /></a>
                    </figure>
                    <div className="product-details">
                      <h2><a href="single-product.html">Beginner's Yoga</a></h2>
                      <span className="price">$50.00</span>
                    </div>
                  </div>
                  <div className="single-product-item">
                    <figure className="product-thumb">
                      <a href="single-product.html"><img className="mr-2 img-fluid" src="assets/img/product-2.jpg" alt="Products" /></a>
                    </figure>
                    <div className="product-details">
                      <h2><a href="single-product.html">Sprite Yoga Companion Kit</a></h2>
                      <span className="price">$6.00</span>
                    </div>
                  </div>
                  <div className="single-product-item">
                    <figure className="product-thumb">
                      <a href="single-product.html"><img className="mr-2 img-fluid" src="assets/img/product-3.jpg" alt="Products" /></a>
                    </figure>
                    <div className="product-details">
                      <h2><a href="single-product.html">Set of Sprite Yoga Straps</a></h2>
                      <span className="price">$88.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Sidebar Item End */}
          </div>
        </div>
        {/* Sidebar Area End */}
        {/* Shop Page Content Start */}
        <div className="col-lg-9">
          <div className="shop-page-content-wrap">
            <div className="products-settings-option d-block d-md-flex">
              <div className="product-cong-left d-flex align-items-center">
                <ul className="product-view d-flex align-items-center">
                  <li className="current column-gird"><i className="fa fa-bars fa-rotate-90" /></li>
                  <li className="box-gird"><i className="fa fa-th" /></li>
                  <li className="list"><i className="fa fa-list-ul" /></li>
                </ul>
                <span className="show-items">Items 1 - 9 of 17</span>
              </div>
              <div className="product-sort_by d-flex align-items-center mt-3 mt-md-0">
                <label htmlFor="sort">Sort By:</label>
                <select name="sort" id="sort">
                  <option value="Position">Relevance</option>
                  <option value="Name Ascen">Name, A to Z</option>
                  <option value="Name Decen">Name, Z to A</option>
                  <option value="Price Ascen">Price low to heigh</option>
                  <option value="Price Decen">Price heigh to low</option>
                </select>
              </div>
            </div>
            <div className="shop-page-products-wrap">
              <div className="products-wrapper">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-1.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge">New</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-2.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge sale">Sale</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-3.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge">New</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-4.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge">New</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/product-4.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge sale">Sale</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/product-3.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge sale">Sale</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-1.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge">New</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-2.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge sale">Sale</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/* Single Product Item */}
                    <div className="single-product-item text-center">
                      <figure className="product-thumb">
                        <a href="single-product.html"><img src="assets/img/new-product-3.jpg" alt="Products" className="img-fluid" /></a>
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
                        <p className="products-desc">Ideal for cold-weathered training worked lorem
                          outdoors, the Chaz Hoodie promises superior warmth with every wear.
                          Thick material blocks out the wind as ribbed cuffs and bottom band seal
                          in body heat.</p>
                        <a href="single-product.html" className="btn btn-add-to-cart">+ Add to Cart</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+
                          Wishlist</a>
                        <a href="single-product.html" className="btn btn-add-to-cart btn-compare">+
                          Compare</a>
                      </div>
                      <div className="product-meta">
                        <button type="button" data-toggle="modal" data-target="#quickView">
                          <span data-toggle="tooltip" data-placement="left" title="Quick View"><i className="fa fa-compress" /></span>
                        </button>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to Wishlist"><i className="fa fa-heart-o" /></a>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-tags" /></a>
                      </div>
                      <span className="product-bedge">New</span>
                    </div>
                    {/* Single Product Item */}
                  </div>
                </div>
              </div>
            </div>
            <div className="products-settings-option d-block d-md-flex">
              <nav className="page-pagination">
                <ul className="pagination">
                  <li><a href="#" aria-label="Previous">«</a></li>
                  <li><a className="current" href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#" aria-label="Next">»</a></li>
                </ul>
              </nav>
              <div className="product-per-page d-flex align-items-center mt-3 mt-md-0">
                <label htmlFor="show-per-page">Show Per Page</label>
                <select name="sort" id="show-per-page">
                  <option value={9}>9</option>
                  <option value={15}>15</option>
                  <option value={21}>21</option>
                  <option value={6}>27</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Page Content End */}
      </div>
    </div>
  </div>
</div>

<QuickView />
    </Layout>
    </>
  )
}

export default Shop