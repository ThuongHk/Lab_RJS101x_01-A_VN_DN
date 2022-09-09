import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact';
import DishesDetail from './DishesDetail';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotion';
import { LEADERS } from '../shared/leaders';


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
        <Home 
              dish={this.state.dishes?.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions?.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders?.filter((leader) => leader.featured)[0]}
          />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishesDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />

        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

export default main;
