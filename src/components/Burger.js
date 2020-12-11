import React, { useState } from 'react';

function Burger (props) {
    const {burger} = props
    const burgerOnPage = burger.map((ingredient, index) => {
        return <li key={index} style={{color: ingredient.color}}>{ingredient.name}</li>
    }) 
    return(
        <ul>{burgerOnPage}</ul>
    )
}

export default Burger