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
                  </li>,
                  <button id="deleteButton" name={index} type="submit" onClick={() => {
                    props.onDelete(index);
                  }}>-</button>
                  

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
              onClick={(e) => {
                props.clickedAddButton(e);
              }}
            >
              +
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
