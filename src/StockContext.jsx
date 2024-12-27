import React, { createContext, useState, useContext } from 'react';

const StockContext = createContext();

export const useStocks = () => {
    return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);

    const addStock = (stock) => {
        setStocks((prevStocks) => [...prevStocks, stock]);
    };

    return (
        <StockContext.Provider value={{ stocks, addStock }}>
            {children}
        </StockContext.Provider>
    );
};
