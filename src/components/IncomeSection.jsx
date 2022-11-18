import React from "react";

const IncomeSection = (props) => {
  return (
    <div className="bigCard1">
      <h2>{"Please list your income(s) here:"}</h2>
      <div className="item">
        <div>
          <div>
            <div className="addedPrice">
              <ul>
                {props.list.map((value, index) => ([
                  <li key={index} id={index} className="listItem">
                    $ {value} 
                    <p> </p>
                    <button id="deleteButton" name={index} type="submit" onClick={() => {
                    props.onDelete(index);
                  }}>-</button>
                  </li>
                  
                  

                ]))}
              </ul>
            </div>
            <input
              type="number"
              value={props.incomeValue}
              placeholder="$"
              onChange={(e) => {
                props.onEntered(e);
              }}
            ></input>
            <button
              type="submit"
              className="add-button"
              onClick={(e) => {
                props.clickedAddButton(e);
              }}
            >+
            </button>
            <button
              type="submit"
              id="totalButton"
              onClick={(e) => {
                props.clickedTotalButton(e);
              }}
            >
              Total: ${props.incomeTotal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
