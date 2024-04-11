
import React from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App =() => {

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
      <NewCost></NewCost>
      <p>web storage of device</p>
      <p>component</p>
      <Costs costs={costs}/>
    </div>
  );

// АЛЬТЕРНАТИВНЫЙ СПОСОБ ЗАПИСИ
//  return React.createElement(
//    'div',
//    {}, 
//    React.createElement( 'h1', {}, 'Начнем изучение React!'),
//  React.createElement(Costs, {costs: costs})
//  );

}

export default App;
