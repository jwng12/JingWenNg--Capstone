import React, { useState } from "react";
import axios from "axios";

const StockForm = ({ onAddStock }) => {
    const [symbol, setSymbol] = useState("");
    const [quantity, setQuantity] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [error, setError] = useState("");

    const fetchStockPrice = async (stockSymbol) => {
        try {
            const response = await axios.get(
                `https://www.alphavantage.co/query`,
                {
                    params: {
                        function: "GLOBAL_QUOTE",
                        symbol: stockSymbol,
                        apikey: "XN7DSX3LN31057VO",
                    },
                }
            );
            const price = response.data["Global Quote"]["05. price"];
            return parseFloat(price);
        } catch (error) {
            console.error("Error fetching stock price:", error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (symbol && quantity && purchasePrice) {
            const livePrice = await fetchStockPrice(symbol);

            if (!livePrice) {
                setError("Invalid stock symbol or API error.");
                return;
            }

            onAddStock({
                symbol,
                quantity: parseInt(quantity),
                purchasePrice: parseFloat(purchasePrice),
                currentPrice: livePrice,
            });

            setSymbol("");
            setQuantity("");
            setPurchasePrice("");
        } else {
            setError("All fields are required.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="stock-form">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="text"
                placeholder="Stock Symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                step="0.01"
                placeholder="Purchase Price"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
            />

            <button className="add-stock-button">Add Stock</button>

        </form>
    );
};

export default StockForm;
