import React, { useState } from "react";
import "./Receipt.css"




const Receipt = ({ receiptList }) => { 

  const [receipts, updateReceipts] = useState(receiptList);
  console.log(receipts)

  const removeReceipt = (e) => { 
    // console.log(e.target.getAttribute("name"));
    const nameOfReceipt = e.target.getAttribute("name");
    
    updateReceipts(receipts.filter(item => item.person !== nameOfReceipt));

  }



//Render the list of receipts
  const renderedList = receipts.map((receipt, index) => { 
    return (
      <div className="flexItems">
        <div>
          <h2>{receipt.person} <span name={receipt.person} onClick={removeReceipt}>❌</span></h2>
          <p>Main: {receipt.order.main}</p>
          <p>Protein: {receipt.order.protein}</p>
          <p>Rice: {receipt.order.rice}</p>
          <p>Sauce: {receipt.order.sauce}</p>
          <p>Drink: {receipt.order.drink}</p>
          <p>Cost: {receipt.order.cost}</p>
        </div>
      </div>
    )
  });





return (
  <div>
    <h1>Korilla</h1>
    <div className="flex">
      {renderedList}
    </div>
  </div>
)


}


export default Receipt;