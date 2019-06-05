import React, { Component } from "react";
import { connect } from "react-redux";
import {
  firestoreConnect,
  withFirebase,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductsSummary from "../products/productsSummary";
import { link } from "fs";
import "../../config/fbConfig";

class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="ProjectList">
        {products &&
          products.map(product => {
            return (
              <Link to={"/products/" + product.id} key={product.id}>
                <div className="products">
                  <ProductsSummary product={product} />
                </div>
              </Link>
            );
          })}
      </div>
    );
  }
}
const mapStateToPros = state => {
  return {
    products: state.firestore.ordered.products,
    productsImageName: state.firestore.ordered.products
  };
};


export default compose(
  connect(
    mapStateToPros,
    
  ),
  firestoreConnect([{ collection: "products" }])
)(Products);
