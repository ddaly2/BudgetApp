import React from "react";

function BalanceSection(props) {
  return (
    <div className="balanceSection">
     <div className="balanceSectionTop">
        <h3>Balance Section</h3>
        <button type="submit" id="balance-button" onClick={(e) => {
        props.onCalculate(e);
        }}>Find your net income</button>
     </div>
     <div className="balanceSectionBottom">
        <h2 className="net-income">Your net income is: <span>$ {(props.value) * 1}</span></h2>
        <h3 className="balance-savings-item">Suggested savings per month: <span>$ {Math.floor((props.value) * .25)}</span></h3>
        <h3 className="balance-savings-item">Aggressive savings per month: <span>$ {Math.floor((props.value) * .6)}</span></h3>
        <h3 className="balance-savings-item">Passive savings per month: <span>$ {Math.floor((props.value) * .1)}</span></h3>
     </div>
    </div>
  )
}

export default BalanceSection;
