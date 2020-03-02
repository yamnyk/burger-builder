import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngridient.module.css'

const BurgerIngredient = props => {
  let ingredient = null;
  
  // eslint-disable-next-line default-case
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles.BreadBottom}/>;
      break;
    case 'bread-top':
      ingredient = (<div className={styles.BreadTop}>
        <div className={styles.Seeds1}/>
        <div className={styles.Seeds2}/>
      </div>);
      break;
    case 'meat':
      ingredient = <div className={styles.Meat}/>;
      break;
    case 'cheese':
      ingredient = <div className={styles.Cheese}/>;
      break;
    case 'salad':
      ingredient = <div className={styles.Salad}/>;
      break;
    case 'bacon':
      ingredient = <div className={styles.Bacon}/>;
      break;
    default:
      throw new TypeError(`Wrong Ingredient type - ${ingredient}`)
  }
  
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;