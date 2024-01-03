import React, { useEffect,useState } from 'react'
import Orders from '../../components/orders_components/Orders'
import orders from '../../components/orders_components/orderArray'
// import WorkoutDetails from '../../components/orders_component/WorkoutDetails';
import WorkoutDetails from '../../components/orders_components/WorkoutDetails';

export default function AdminOrders(props) {
  const [order,setOrder]=useState(null);
  useEffect(()=>{
    props.setNavbar();
    const fetchOrders=async()=>{
      const response=await fetch('/canteen/orders',{
          method:"GET"
      })
      const json=await response.json();
      if(response.ok){
          setOrder(json);
        }
      }
      // console.log(order)
      fetchOrders();
    })
    // console.log(order)
  return (
    <>
    <div className='admin-order-div'>
      <div className='container' style={{marginTop: "100px"}}>
        <h1>Orders</h1>
        <hr/>
      </div>
      <div className="container">
      {order && order.map((workout)=>(
                  <WorkoutDetails key={workout._id} workout={workout}/>
                  )

                )}
      {/* <div className="row">{
          orders.map(()=>{
            return <Orders key={!(props.order===null) ? props.order.time:"-"} date={!(props.order===null) ? props.order.date : "-"} time={!(props.order===null) ? props.order.time : "-"} orderMenu={!(props.order===null) ? props.order.orderMenu:[]} total={!(props.order===null) ?props.order.total:"-"}/>
          })
        }</div> */}
  </div>
    </div>
    </>
  )
}
