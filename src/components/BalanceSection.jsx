import React from "react";

function BalanceSection(props) {
  return (
    <div className="balanceSection">
     <h2>Balance Section</h2>
     <button type="submit" id="totalButton" onClick={(e) => {
      props.onCalculate(e);
     }}>Do Math</button>
     <p className="listItem">Your net income is: {props.value}</p>
     <h3 className="balance-savings-item">Your suggested savings per month is: $ {(props.value) * .25}</h3>
     <h3 className="balance-savings-item">Aggressive savings per month is: $ {(props.value) * .6}</h3>
     <h3 className="balance-savings-item">Passive savings per month is: $ {(props.value) * .1}</h3>
    </div>
  )
}

export default BalanceSection;
