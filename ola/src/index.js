import React from 'react'
import ReactDOM from 'react-dom';
import StockCard from './Stocks/StockCard';
import stockList from './Api/stocks';
import './index.css';

const App = () => (
  <>
    <h1 className="title">Homebroker</h1>
    <main className="main">
      {stockList.map((stock) => <StockCard {...stock} />)}
    </main>
  </>
);
  


ReactDOM.render(<App />, document.querySelector('#root'));
