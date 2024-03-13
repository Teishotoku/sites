
import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021,2,21),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2023,7,17),
      description: 'MacBook',
      amount: 2499.99
    },
    {
      date: new Date(2017,3,30),
      description: 'Джинсы',
      amount: 59.99
    }
  ];

  return (
    <div className="App">
      <h1>Garbage</h1>
      <p>web storage of device</p>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
