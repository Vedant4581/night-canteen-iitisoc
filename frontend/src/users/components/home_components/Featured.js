import React from 'react'

export default function Featured() {
  return (
    <div className="container mt-2">
        <div className='row'>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                <div className="card card-dimension" style={{width: "18rem"}}>
                    <img src="https://5.imimg.com/data5/ANDROID/Default/2021/6/TW/ML/BC/120587729/product-jpeg.jpg" className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        Featured
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">Item</h5>
                        {/* <p className="card-text"></p> */}
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 my-2">
                <div className="card card-dimension" style={{width: "18rem"}}>
                    <img src="https://theyummydelights.com/wp-content/uploads/2022/04/shredded-chicken-sandwich.jpg" className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        Featured
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">Item</h5>
                        {/* <p className="card-text"></p> */}
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 my-2">
                <div className="card card-dimension" style={{width: "18rem"}}>
                    <img src="https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg" className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        Featured
                        <span className="visually-hidden">Featured</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">Item</h5>
                        {/* <p className="card-text"></p> */}
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
