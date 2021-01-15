import React from "react";
import { receipts } from "./components/Receipts";
import Receipt from "./components/Receipt"

const receiptList = receipts;
console.log(receiptList);



export default () => { 
  return (
    <div>
      <Receipt receiptList={receiptList} />
    </div>
  )
}



