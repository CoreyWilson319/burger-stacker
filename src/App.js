import './App.css';
import Ingredients from './components/Ingredients'
import Burger from './components/Burger'
import React, { useState } from 'react';

function App() {
  const [ingredientList, setIngredientList] = useState(
    [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]
  );
  const [burger, setBurger] = useState([])

  const clearBurger = () =>{
    setBurger([])
}
const handleAddToBurger = (ingredient) => {

    // setIngredientsToAdd()
    let currentBurger = [...burger]
    currentBurger.push(ingredient)
    setBurger(currentBurger)
    
}

  return (
    <div className="container">
      <div id="left">
        <h1>Ingredients</h1>
        <Ingredients ingredient={ingredientList} 
                    clearBurger={clearBurger} 
                    handleAddToBurger={handleAddToBurger}/>
      </div>
      <div id="right">
        <h1>Burger</h1>
        <Burger burger={burger} />
      </div>

    </div>
  );
}

export default App;
