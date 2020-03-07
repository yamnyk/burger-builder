import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from "./BurgerIngridient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = Object
    .keys(props.ingredients)
    .map((ingKey, ind) => [...Array(props.ingredients[ingKey])]
      .map((_, ingInd) => <BurgerIngredient key={ingKey + ingInd} type={ingKey}/>)
    ).flat(1);
  
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients.length ?
        transformedIngredients
        : <p>You should start adding ingredients</p>
      }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;