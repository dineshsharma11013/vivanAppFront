import React from 'react'
import Layout from '../partials/Layout'

function PageNotFound() {
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
            <h1>404</h1>
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="login-register.html" className="active">404</a></li>
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
        <div className="col-lg-6  m-auto text-center">
          <div className="error-page-content-wrap">
            <h2>404</h2>
            <h3>PAGE NOT BE FOUND</h3>
            <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is
              temporarily unavailable.</p>
            <div className="sidebar-search">
              <form action="#">
                <input type="search" placeholder="type Keyword" />
                <button type="submit"><i className="fa fa-search" /></button>
              </form>
            </div>
            <a href="index.html" className="btn-add-to-cart">Back to Home Page</a>
          </div>
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

export default PageNotFound