import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductsSummary from "../products/productsSummary";
import { link } from "fs";
import "../../config/fbConfig";
import { imageUrlAction } from "../../store/actions/imageUrlAction";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.createImageUrlFromFirebase(this.props.productsImageName);  
  }

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

const mapDispatchToProps = disptach => {
  return {
    createImageUrlFromFirebase: imageName => disptach(imageUrlAction(imageName))
  };
};

export default compose(
  connect(
    mapStateToPros,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "products" }])
)(Products);
