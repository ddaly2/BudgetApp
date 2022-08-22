import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import IncomeSection from "./IncomeSection";
import ExpenseSection from "./ExpenseSection";
import BalanceSection from "./BalanceSection";

function App() {
  const [incomePrice, setIncomePrice] = useState("");
  const [expensePrice, setExpensePrice] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [totalIncomePrice, setTotalIncomePrice] = useState([]);
  const [totalExpensePrice, setTotalExpensePrice] = useState([]);
  const [totalBalance, setTotalBalance] = useState("");

  const handleIncomeChange = (event) => {
    const { value } = event.target;
    setIncomePrice(parseInt(value, 10));
  };
  const handleExpenseChange = (event) => {
    const { value } = event.target;
    setExpensePrice(parseInt(value, 10));
  };

  const handleIncomeClick = () => {
    const newPrice = incomePrice;
    setIncomeList((prevValues) => {
      return [...prevValues, newPrice];
    });
    setIncomePrice("");
  };
  const handleExpenseClick = () => {
    const newPrice = expensePrice;
    setExpenseList((prevValues) => {
      return [...prevValues, newPrice];
    });
    setExpensePrice("");
  };

  const addAllIncomeItems = () => {
    const initialPrice = 0;
    setTotalIncomePrice(() =>
      incomeList.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }, initialPrice)
    );
  };
  const addAllExpenseItems = () => {
    const initialPrice = 0;
    setTotalExpensePrice(() =>
      expenseList.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }, initialPrice)
    );
  };

  const deleteIncomeItem = (index) => {
    setIncomeList((prevItems) => {
      return prevItems.filter((income, newIndex) => {
        return newIndex !== index;
      });
    });
  };
  const deleteExpenseItem = (index) => {
    setExpenseList((prevItems) => {
      return prevItems.filter((expense, newIndex) => {
        return newIndex !== index;
      });
    });
  };

  const calculateTotalBalance = () => {
    const newBalance = totalIncomePrice - totalExpensePrice;
    setTotalBalance(newBalance);
  }
  
  
  return (
    <div>
      <Header />
        <div className="cardContainer">
        <IncomeSection
          onEntered={handleIncomeChange}
          clickedAddButton={handleIncomeClick}
          incomeValue={incomePrice}
          list={incomeList}
          clickedTotalButton={addAllIncomeItems}
          incomeTotal={totalIncomePrice}
          onDelete={deleteIncomeItem}
        />
        <ExpenseSection
          onEntered={handleExpenseChange}
          clickedAddButton={handleExpenseClick}
          expenseValue={expensePrice}
          list={expenseList}
          clickedTotalButton={addAllExpenseItems}
          expenseTotal={totalExpensePrice}
          onDelete={deleteExpenseItem}
        />
        </div>
      <BalanceSection 
        value={totalBalance}
        onCalculate={calculateTotalBalance}
      />
      <Footer />
    </div>
  );
}

export default App;
