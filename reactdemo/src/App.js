//import logo from './logo.svg';
import './App.css';
import Expenses from './component/Expenses/Expenses';

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Home Loan Bill',
      amount: 5000,
      date: new Date(2022, 4, 14),
    },
    { id: 'e2', title: 'Eletricity Bill', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 2),
    },
    {
      id: 'e4',
      title: 'Education Loan',
      amount: 1000,
      date: new Date(2022, 4, 5),
    },
  ];
 

  return (
    <div className="App">
      <header className="App-header">
        <p> Start With React </p>
        <Expenses items={expenses} />
        
      </header>
    </div>
  );
}

export default App;
