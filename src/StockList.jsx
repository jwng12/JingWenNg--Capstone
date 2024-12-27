import React from "react";
import "./StockList.css";

const StockList = ({ stocks }) => {
    return (
        <div className="stock-list">
            <h3>Stock List</h3>
            {stocks.length === 0 ? (
                <p>No stocks added yet.</p>
            ) : (
                <div className="stock-items">
                    {stocks.map((stock, index) => {
                        const profitLoss =
                            (stock.currentPrice - stock.purchasePrice) * stock.quantity;
                        const profitLossColor = profitLoss >= 0 ? "green" : "red";

                        return (
                            <div className="stock-item" key={index}>
                                <p className="stock-symbol">
                                    <strong>Symbol:</strong> {stock.symbol}
                                </p>
                                <p>
                                    <strong>Quantity:</strong> {stock.quantity}
                                </p>
                                <p>
                                    <strong>Purchase Price:</strong> ${stock.purchasePrice.toFixed(2)}
                                </p>
                                <p>
                                    <strong>Current Price:</strong> ${stock.currentPrice.toFixed(2)}
                                </p>
                                <p>
                                    <strong>Profit/Loss: </strong>
                                    <span style={{ color: profitLossColor }}>
                                        ${profitLoss.toFixed(2)}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default StockList;
