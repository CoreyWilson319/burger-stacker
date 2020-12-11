import React, { useState } from 'react';
function Ingredients(props) {
    // const [ingredientsToAdd, setIngredientsToAdd] = useState(props);

    const handleIngredientsOnPage = props.ingredient.map((item, index) => {
    return <li key={index}>{item.name} <button onClick={()=>props.handleAddToBurger(item)}>Add to Burger</button> </li>
    })
    return(
        <div>
            <ul>
            {handleIngredientsOnPage} 
            </ul>
            <button onClick={props.clearBurger}>Clear Burger</button>
        </div>
    )
}

export default Ingredients