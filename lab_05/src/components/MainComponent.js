import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="container-fluid">        
        <Header />
        <Home/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Footer />

        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          {/* <Redirect to="/home" /> */}
        </Switch>
      </div>
    )
  }
}

export default main;
