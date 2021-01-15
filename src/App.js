import React from "react";
import { receipts } from "./components/Receipts";
import Receipt from "./components/Receipt"

const receiptList = receipts;




export default () => { 
  return (
    <div>
      <Receipt receiptList={receiptList} />
    </div>
  )
}



