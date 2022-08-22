import React from "react";

const ExpenseSection = (props) => {
  return (
    <div className="bigCard1">
      <h2>{"Please list your expense(s) here:"}</h2>
      <div className="item">
        <div>
          <div>
            <div className="addedPrice">
              <ul>
                {props.list.map((value, index) => ([
                  <li key={index} className="listItem">
                    $ {value}
                  </li>,
                  <button type="submit" onClick={() => {
                    props.onDelete(index);
                  }} >-</button>
                ]))}
              </ul>
            </div>
            <input
              type="number"
              value={props.expenseValue}
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
              Total: ${props.expenseTotal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSection;
