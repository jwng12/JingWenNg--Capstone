import React, { useState } from "react";
import StockForm from "./StockForm";
import StockList from "./StockList";
import "./App.css";

const App = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
    <div className="app">
      <header>
        <img src="https://img.icons8.com/color/48/000000/accounting.png" alt="Finance Icon" />
        <h1>Finance Dashboard</h1>
      </header>
      <StockForm onAddStock={addStock} />
      <StockList stocks={stocks} />
    </div>
  );
};

export default App;

