import React from 'react'
import OrderMenu from './OrderMenu'

export default function Orders(props) {

  return (
    
        <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="container mt-3">
          <div className="card mb-3" style={{maxWidth: "18rem"}}>
              <div className="card-header bg-transparent"><h3>Order </h3><br/><h5>Date: {props.date}<br/>Time: {props.time}</h5></div>
              <div className="card-body">
                <h5 className="card-title">Order menu</h5>
                <div className="product border-bottom table-responsive" style={{height: "150px"}}>

                  <table className="table table-borderless overflow-auto">

                  <tbody>
                      {props.orderMenu.map((orderItem)=>{return <OrderMenu orderItem={orderItem}/>})}
                  </tbody> 
                      
                  </table>
                  


              </div>
              </div>
              <div className="card-footer bg-transparent">
                <table>
                  <tbody>
                    <tr>
                      <td width="80%">
                        <h5>Total</h5>
                      </td>
                      <td width="20%">
                        <h5>Rs. {props.total}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td width="80%">
                        <h6>Payment Screenshot</h6>
                      </td>
                      <td width="20%">
                        <p>link</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
  )
}
