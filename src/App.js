import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetail';
import ProductDetails from "./components/products/ProductDetails";
import SignIn from './components/auth/SignIn';
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import MakeReview from './components/projects/MakeReview';
import Products from './components/dashboard/Products';
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/MakeReview" component={MakeReview} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}




export default App;