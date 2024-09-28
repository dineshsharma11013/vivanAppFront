import React from 'react'

function QuickView() {
  return (
    <>
{/*== Product Quick View Modal Area Wrap ==*/}
<div className="modal fade" id="quickView" tabIndex={-1} role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true"><img src="assets/img/cancel.png" alt="Close" className="img-fluid" /></span>
      </button>
      <div className="modal-body">
        <div className="quick-view-content single-product-page-content">
          <div className="row">
            {/* Product Thumbnail Start */}
            <div className="col-lg-5 col-md-6">
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
                </div>
              </div>
            </div>
            {/* Product Thumbnail End */}
            {/* Product Details Start */}
            <div className="col-lg-7 col-md-6 mt-5 mt-md-0">
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
                    <li className="color-item orange">
                      <div className="color-hvr">
                        <span className="color-fill" />
                        <span className="color-name">Orange</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="product-quantity d-flex align-items-center">
                  <div className="quantity-field">
                    <label htmlFor="qty">Qty</label>
                    <input type="number" id="qty" min={1} max={100} defaultValue={1} />
                  </div>
                  <a href="cart.html" className="btn btn-add-to-cart">Add to Cart</a>
                </div>
              </div>
            </div>
            {/* Product Details End */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*== Product Quick View Modal Area End ==*/}

    </>
  )
}

export default QuickView