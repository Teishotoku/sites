import React, {useState} from 'react';
import { ClassificationType } from 'typescript';

const Burger = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  //togle burger menu change
  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else{
      setBurgerClass("burger unclicked")
      setMenuClass("menu hidden")
    }
  }

  return (
  <header>
      <nav>
        <div className='burger-menu'>
          <button><img className='pickaxe' src="./img/pickaxe.png" onClick={updateMenu}/></button>
          <div className='burger_class' onClick={updateMenu}></div>
          <div className='burger_class' onClick={updateMenu}></div>
          <div className='burger_class' onClick={updateMenu}></div>
        </div>
      </nav>

      <div className='menu_class'></div>
  </header> 
  );  
}

export default Burger;
