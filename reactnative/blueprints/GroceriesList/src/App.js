import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ShoppingList from './components/ShoppingList';
import AddProduct from './components/AddProduct';

const Navigator = StackNavigator({
  ShoppingList: { screen: ShoppingList },
  AddProduct: { screen: AddProduct }
});

class App extends Component {
  render() {
    return <Navigator />;
  }
}

export default App;
