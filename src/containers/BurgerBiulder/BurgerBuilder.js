import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const _INGRENTS_COSTS = Object.freeze({
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
});

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: 4
  };
  
  addIngredientHandler = (type) => {
    const oldAmount = this.state.ingredients[type],
      newAmount = oldAmount + 1,
      newIngredients = {
        ...this.state.ingredients,
        [type]: newAmount
      },
      newPrice = this.state.totalPrice + _INGRENTS_COSTS[type];
    
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    })
  }
  
  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] <= 0) return;
    const oldAmount = this.state.ingredients[type],
      newAmount = oldAmount - 1,
      newIngredients = {
        ...this.state.ingredients,
        [type]: newAmount
      },
      newPrice = this.state.totalPrice - _INGRENTS_COSTS[type];
    
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    })
  };
  
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}/>
      </>
    );
  }
}

export default BurgerBuilder;