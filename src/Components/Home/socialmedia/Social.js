import React from 'react'

function Social() {
  return (
    <div className="border-bottom">
        <div className="container p-5  p-3 mb-2 bg-body rounded" >
            <div className="row" style={{
              "display":"flex",
              "justifyContent":"center",
          }}>
              <div className="col-7"><h1><span  className="text-warning pb-3">M</span>édias sociaux : </h1></div>
              <div className="col-1 me-4">
              <h1><a href="..." target="blank"><i className="bi bi-facebook"></i></a></h1>
              </div>
              <div className="col-1 me-4">
                <a href="..." target="blank"><h1><i className="bi bi-instagram"></i></h1></a>
              </div>
              <div className="col-1">
                <a href="..." target="blank"><h1><i className="bi bi-twitter"></i></h1></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Social