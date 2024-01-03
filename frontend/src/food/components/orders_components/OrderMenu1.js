import React from "react";
import logo from '../../../Images/Logo.png'

export default function OrderMenu1({orderItem}) {
  return (
    <tr>
      <td width="20%">
        <img
          src={logo}
          alt="order"
          width="40"
        />
      </td>

      <td width="60%">
        <span className="font-weight-bold">{orderItem.name}</span>
        <div className="product-qty">
          <span className="d-block">QUANTITY:{orderItem.amount}</span>
        </div>
      </td>
      <td width="20%">
        <div className="text-right">
          <span className="font-weight-bold">{orderItem.amount*orderItem.price}</span>
          <hr/>
        </div>
      </td>
    </tr>
  );
}
