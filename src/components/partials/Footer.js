import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer-area">
    {/* Footer Call to Action Start */}
    <div className="footer-callto-action">
      <div className="ruby-container">
        <div className="callto-action-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Single Call-to Action Start */}
              <div className="single-callto-action d-flex">
                <figure className="callto-thumb">
                  <img src="/assets/img/air-plane.png" alt="WorldWide Shipping" />
                </figure>
                <div className="callto-info">
                  <h2>Free Shipping Worldwide</h2>
                  <p>On order over $150 - 7 days a week</p>
                </div>
              </div>
              {/* Single Call-to Action End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Single Call-to Action Start */}
              <div className="single-callto-action d-flex">
                <figure className="callto-thumb">
                  <img src="/assets/img/support.png" alt="Support" />
                </figure>
                <div className="callto-info">
                  <h2>24/7 CUSTOMER SERVICE</h2>
                  <p>Call us 24/7 at 000 - 123 - 456k</p>
                </div>
              </div>
              {/* Single Call-to Action End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Single Call-to Action Start */}
              <div className="single-callto-action d-flex">
                <figure className="callto-thumb">
                  <img src="/assets/img/money-back.png" alt="Money Back" />
                </figure>
                <div className="callto-info">
                  <h2>MONEY BACK Guarantee!</h2>
                  <p>Send within 30 days</p>
                </div>
              </div>
              {/* Single Call-to Action End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Single Call-to Action Start */}
              <div className="single-callto-action d-flex">
                <figure className="callto-thumb">
                  <img src="/assets/img/cog.png" alt="Guide" />
                </figure>
                <div className="callto-info">
                  <h2>SHOPPING GUIDE</h2>
                  <p>Quis Eum Iure Reprehenderit</p>
                </div>
              </div>
              {/* Single Call-to Action End */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Call to Action End */}
    {/* Footer Follow Up Area Start */}
    <div className="footer-followup-area">
      <div className="ruby-container">
        <div className="followup-wrapper">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="follow-content-wrap">
                <a href="index.html" className="logo"><img src="/assets/img/logo.png" alt="logo" /></a>
                <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum</p>
                <div className="footer-social-icons">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-flickr" /></a>
                </div>
                <a href="#"><img src="/assets/img/payment.png" alt="Payment Method" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Follow Up Area End */}
    {/* Footer Image Gallery Area Start */}
    {/* <div className="footer-image-gallery">
      <div className="ruby-container">
        <div className="image-gallery-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="imgage-gallery-carousel owl-carousel">
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-1.jpg" alt="Gallery" /></a>
                </div>
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-2.jpg" alt="Gallery" /></a>
                </div>
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-3.jpg" alt="Gallery" /></a>
                </div>
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-4.jpg" alt="Gallery" /></a>
                </div>
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-3.jpg" alt="Gallery" /></a>
                </div>
                <div className="gallery-item">
                  <a href="#"><img src="/assets/img/gallery-img-2.jpg" alt="Gallery" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Footer Image Gallery Area End */}
    {/* Copyright Area Start */}
    {/* <div className="copyright-area">
      <div className="ruby-container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright-text">
              <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Copyright Area End */}
  </footer>
    </>
  )
}

export default Footer