import "./App.css";
import Card from "./Components/Card";
import ChartApp from "./Components/PieChart";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="top_section">
        <div className="card_group">
          <Card title="Wallet Balance" button="Add Income" />
          <Card title="Expenses" button="Add Expense" />
        </div>
        <ChartApp />
      </div>
      <div className="bottom_section">
        <div className="txns">
          <h2>Recent Transaction</h2>
          <div className="display_txns"></div>
        </div>
        <div className="expenses">
          <h2>Top Expenses</h2>
          <div className="display_exp"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
