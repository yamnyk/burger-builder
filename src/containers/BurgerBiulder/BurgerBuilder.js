import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 4,
    toggleModal: false
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
  };
  
  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) return;
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
  
  toggleModalHandler = (e) => {
    this.setState({
      toggleModal: !this.state.toggleModal
    })
  };
  
  orderHandler = () => {
    console.log('You continued');
  };
  
  render() {
    const ingredients = {...this.state.ingredients},
      totalPrice = this.state.totalPrice.toFixed(2);
    
    Object.keys(ingredients).forEach(k => {
      ingredients[k] = ingredients[k] <= 0
    });
    
    return (
      <>
        {
          this.state.toggleModal ?
          <Modal removeHandler={this.toggleModalHandler}>
            <OrderSummary
              ingredients={this.state.ingredients}
              cancel={this.toggleModalHandler}
              continue={this.orderHandler}
              totalPrice={totalPrice}
            />
          </Modal>
          : null
        }
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          disabled={ingredients}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          totalPrice={totalPrice}
          modalHandler={this.toggleModalHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;