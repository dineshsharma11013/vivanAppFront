import React from 'react'

function Search() {
  return (
    <>
    <div className="body-popup-modal-area">
    <span className="modal-close"><img src="/assets/img/cancel.png" alt="Close" className="img-fluid" /></span>
    <div className="modal-container d-flex">
      <div className="search-box-area">
        <div className="search-box-form">
          <form action="#" method="post">
            <input type="search" placeholder="type keyword and hit enter" />
            <button className="btn" type="button"><i className="fa fa-search" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Search