import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
   return(
    <div className="container-fluid">
    <Header/>
    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
    <Footer />
    </div>
   )
}
}

export default main;
