import React from "react";

function BalanceSection(props) {
  return (
    <div className="balanceSection">
     <h2>Balance Section</h2>
     <button type="submit" id="totalButton" onClick={(e) => {
      props.onCalculate(e);
     }}>Do Math</button>
     <p className="listItem">Your net income is: {props.value}</p>
    </div>
  )
}

export default BalanceSection;