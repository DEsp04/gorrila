import React, { useState } from "react";





const Receipt = ({ receiptList }) => { 

  const [payment, setPayment] = useState(null);
  

  const onReceiptClick = (paid) => { 
    setPayment(!paid);
  }



//Render the list of receipts
  const renderedList = receiptList.map((receipt, index) => { 
    
    const deleteItem = payment ? 'deleteItem' : '';


    return (
      <div onClick={() => onReceiptClick(receipt.paid)}>
        <div className={`${deleteItem}`}>
          <h2>{receipt.person}</h2>
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
    {renderedList}
  </div>
)


}


export default Receipt;