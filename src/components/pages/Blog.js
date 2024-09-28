import React from 'react'
import Layout from '../partials/Layout'

function Blog() {
  return (
    <>
    <Layout>
 <div>
  <div id="page-title-area">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-title-content">
            <h1>Blog</h1>
            <ul className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="blog.html" className="active">Blog</a></li>
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
        {/* Blog Page Content Start */}
        <div className="col-lg-12">
          <div className="blog-content-wrap">
            <div className="row">
              <div className="col-md-6">
                {/* Single Blog Item Start */}
                <div className="single-blog-wrap">
                  <figure className="blog-thumb">
                    <a href="single-blog.html"><img src="assets/img/blog-thumb.jpg" alt="blog" className="img-fluid" /></a>
                    <figcaption className="blog-icon">
                      <a href="single-blog.html"><i className="fa fa-file-image-o" /></a>
                    </figcaption>
                  </figure>
                  <div className="blog-details">
                    <h3><a href="single-blog.html">Mirum est notare quam</a></h3>
                    <span className="post-date">20/June/2018</span>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                      anteposuerit
                      litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                      consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores
                      necessitatibus quisquam quos repudiandae suscipit tempore totam
                      voluptatibus.</p>
                    <a href="single-blog.html" className="btn-long-arrow">Read More</a>
                  </div>
                </div>
                {/* Single Blog Item End */}
              </div>
              <div className="col-md-6">
                {/* Single Blog Item Start */}
                <div className="single-blog-wrap">
                  <figure className="blog-thumb">
                    <a href="single-blog.html"><img src="assets/img/blog-thumb-2.jpg" alt="blog" className="img-fluid" /></a>
                    <figcaption className="blog-icon">
                      <a href="single-blog.html"><i className="fa fa-file-image-o" /></a>
                    </figcaption>
                  </figure>
                  <div className="blog-details">
                    <h3><a href="single-blog.html">Mirum est notare quam</a></h3>
                    <span className="post-date">20/June/2018</span>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                      anteposuerit
                      litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                      consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores
                      necessitatibus quisquam quos repudiandae suscipit tempore totam
                      voluptatibus.</p>
                    <a href="single-blog.html" className="btn-long-arrow">Read More</a>
                  </div>
                </div>
                {/* Single Blog Item End */}
              </div>
              <div className="col-md-6">
                {/* Single Blog Item Start */}
                <div className="single-blog-wrap">
                  <figure className="blog-thumb">
                    <a href="single-blog.html"><img src="assets/img/blog-thumb-3.jpg" alt="blog" className="img-fluid" /></a>
                    <figcaption className="blog-icon">
                      <a href="single-blog.html"><i className="fa fa-file-image-o" /></a>
                    </figcaption>
                  </figure>
                  <div className="blog-details">
                    <h3><a href="single-blog.html">Mirum est notare quam</a></h3>
                    <span className="post-date">20/June/2018</span>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                      anteposuerit
                      litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                      consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores
                      necessitatibus quisquam quos repudiandae suscipit tempore totam
                      voluptatibus.</p>
                    <a href="single-blog.html" className="btn-long-arrow">Read More</a>
                  </div>
                </div>
                {/* Single Blog Item End */}
              </div>
              <div className="col-md-6">
                {/* Single Blog Item Start */}
                <div className="single-blog-wrap">
                  <figure className="blog-thumb">
                    <a href="single-blog.html"><img src="assets/img/blog-thumb-2.jpg" alt="blog" className="img-fluid" /></a>
                    <figcaption className="blog-icon">
                      <a href="single-blog.html"><i className="fa fa-file-image-o" /></a>
                    </figcaption>
                  </figure>
                  <div className="blog-details">
                    <h3><a href="single-blog.html">Mirum est notare quam</a></h3>
                    <span className="post-date">20/June/2018</span>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                      anteposuerit
                      litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                      consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores
                      necessitatibus quisquam quos repudiandae suscipit tempore totam
                      voluptatibus.</p>
                    <a href="single-blog.html" className="btn-long-arrow">Read More</a>
                  </div>
                </div>
                {/* Single Blog Item End */}
              </div>
            </div>
          </div>
          {/*  Pagination Area Start */}
          <div className="page-pagination mt-5 pt-5">
            <ul className="pagination justify-content-center">
              <li><a href="#" aria-label="Previous">«</a></li>
              <li><a className="current" href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">....</a></li>
              <li><a href="#">88</a></li>
              <li><a href="#" aria-label="Next">»</a></li>
            </ul>
          </div>
          {/*  Pagination Area End */}
        </div>
        {/* Blog Page Content End */}
      </div>
    </div>
  </div>
</div>

    </Layout>
    </>
  )
}

export default Blog