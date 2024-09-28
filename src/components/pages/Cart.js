import React from 'react'
import Layout from '../partials/Layout'

function Cart() {
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
            <h1>Shopping Cart</h1>
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop-left-full-wide.html">Shop</a></li>
              <li><a href="cart.html" className="active">Cart</a></li>
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
      {/* Cart Page Content Start */}
      <div className="row">
        <div className="col-lg-12">
          {/* Cart Table Area */}
          <div className="cart-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="pro-thumbnail">Thumbnail</th>
                  <th className="pro-title">Product</th>
                  <th className="pro-price">Price</th>
                  <th className="pro-quantity">Quantity</th>
                  <th className="pro-subtotal">Total</th>
                  <th className="pro-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product-1.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Zeon Zen 4 Pro</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$295.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product-2.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Aquet Drone D 420</a></td>
                  <td className="pro-price"><span>$275.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={2} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$550.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product-3.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Game Station X 22</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$295.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product-4.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Roxxe Headphone Z 75 </a></td>
                  <td className="pro-price"><span>$110.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$110.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Cart Update Option */}
          <div className="cart-update-option d-block d-lg-flex">
            <div className="apply-coupon-wrapper">
              <form action="#" method="post" className=" d-block d-md-flex">
                <input type="text" placeholder="Enter Your Coupon Code" />
                <button className="btn-add-to-cart">Apply Coupon</button>
              </form>
            </div>
            <div className="cart-update">
              <a href="#" className="btn-add-to-cart">Update Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 ml-auto">
          {/* Cart Calculation Area */}
          <div className="cart-calculator-wrapper">
            <h3>Cart Totals</h3>
            <div className="cart-calculate-items">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody><tr>
                      <td>Sub Total</td>
                      <td>$230</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$70</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td className="total-amount">$300</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <a href="checkout.html" className="btn-add-to-cart">Proceed To Checkout</a>
          </div>
        </div>
      </div>
      {/* Cart Page Content End */}
    </div>
  </div>
  {/*== Page Content Wrapper End ==*/}
</div>

    </Layout>
    </>
  )
}

export default Cart