import React from "react";
import logo from '../../../Images/Logo.png'

export default function OrderMenu({orderItem}) {
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
          <span className="d-block">Quantity:{orderItem.amount}</span>
        </div>
      </td>
      <td width="20%">
        <div className="text-right">
          <span className="font-weight-bold">{orderItem.amount*orderItem.price}</span>
        </div>
      </td>
    </tr>
  );
}
