import React from 'react'
import Layout from '../partials/Layout'

function Account() {
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
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="login-register.html" className="active">Dashboard</a></li>
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
        <div className="col-lg-12">
          {/* My Account Page Start */}
          <div className="myaccount-page-wrapper">
            {/* My Account Tab Menu Start */}
            <div className="row">
              <div className="col-lg-3">
                <div className="myaccount-tab-menu nav" role="tablist">
                  <a href="#dashboad" className="active" data-toggle="tab"><i className="fa fa-dashboard" />
                    Dashboard</a>
                  <a href="#orders" data-toggle="tab"><i className="fa fa-cart-arrow-down" /> Orders</a>
                  <a href="#download" data-toggle="tab"><i className="fa fa-cloud-download" /> Download</a>
                  <a href="#payment-method" data-toggle="tab"><i className="fa fa-credit-card" /> Payment
                    Method</a>
                  <a href="#address" data-toggle="tab"><i className="fa fa-map-marker" /> address</a>
                  <a href="#account-info" data-toggle="tab"><i className="fa fa-user" /> Account Details</a>
                  <a href="login-register.html"><i className="fa fa-sign-out" /> Logout</a>
                </div>
              </div>
              {/* My Account Tab Menu End */}
              {/* My Account Tab Content Start */}
              <div className="col-lg-9 mt-5 mt-lg-0">
                <div className="tab-content" id="myaccountContent">
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Dashboard</h3>
                      <div className="welcome">
                        <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
                      </div>
                      <p className="mb-0">From your account dashboard. you can easily check &amp; view your
                        recent orders, manage your shipping and billing addresses and edit your
                        password and account details.</p>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="orders" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Orders</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Order</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Aug 22, 2018</td>
                              <td>Pending</td>
                              <td>$3000</td>
                              <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>July 22, 2018</td>
                              <td>Approved</td>
                              <td>$200</td>
                              <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>June 12, 2017</td>
                              <td>On Hold</td>
                              <td>$990</td>
                              <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="download" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Downloads</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Product</th>
                              <th>Date</th>
                              <th>Expire</th>
                              <th>Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Haven - Free Real Estate PSD Template</td>
                              <td>Aug 22, 2018</td>
                              <td>Yes</td>
                              <td><a href="#" className="btn-add-to-cart">Download File</a></td>
                            </tr>
                            <tr>
                              <td>HasTech - Profolio Business Template</td>
                              <td>Sep 12, 2018</td>
                              <td>Never</td>
                              <td><a href="#" className="btn-add-to-cart">Download File</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="payment-method" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Payment Method</h3>
                      <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="address" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Billing Address</h3>
                      <address>
                        <p><strong>Alex Tuntuni</strong></p>
                        <p>1355 Market St, Suite 900 <br />
                          San Francisco, CA 94103</p>
                        <p>Mobile: (123) 456-7890</p>
                      </address>
                      <a href="#" className="btn-add-to-cart d-inline-block"><i className="fa fa-edit" />
                        Edit Address</a>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="account-info" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Account Details</h3>
                      <div className="account-details-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="single-input-item">
                                <label htmlFor="first-name" className="required">First Name</label>
                                <input type="text" id="first-name" placeholder="First Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-input-item">
                                <label htmlFor="last-name" className="required">Last Name</label>
                                <input type="text" id="last-name" placeholder="Last Name" />
                              </div>
                            </div>
                          </div>
                          <div className="single-input-item">
                            <label htmlFor="display-name" className="required">Display Name</label>
                            <input type="text" id="display-name" placeholder="Display Name" />
                          </div>
                          <div className="single-input-item">
                            <label htmlFor="email" className="required">Email Addres</label>
                            <input type="email" id="email" placeholder="Email Address" />
                          </div>
                          <fieldset>
                            <legend>Password change</legend>
                            <div className="single-input-item">
                              <label htmlFor="current-pwd" className="required">Current
                                Password</label>
                              <input type="password" id="current-pwd" placeholder="Current Password" />
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="single-input-item">
                                  <label htmlFor="new-pwd" className="required">New
                                    Password</label>
                                  <input type="password" id="new-pwd" placeholder="New Password" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="single-input-item">
                                  <label htmlFor="confirm-pwd" className="required">Confirm
                                    Password</label>
                                  <input type="password" id="confirm-pwd" placeholder="Confirm Password" />
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <div className="single-input-item">
                            <button className="btn-login btn-add-to-cart">Save Changes</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                </div>
              </div>
              {/* My Account Tab Content End */}
            </div>
          </div>
          {/* My Account Page End */}
        </div>
      </div>
    </div>
  </div>
  {/*== Page Content Wrapper End ==*/}
</div>
  
    </Layout>
    </>
  )
}

export default Account