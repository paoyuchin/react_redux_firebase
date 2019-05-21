import React from "react";
import "../../index";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "../../config/fbConfig";
import firebase from "firebase/app";

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    if (product) {
      return (
        <div className="ProjectDetails">
          <span className="project_id">
            your prodcut Content : {product.prodcutContent}
          </span>
          <div className="posted_by">{product.prodcutName}</div>
          <div className="postPerson">{product.prodcutPrice}</div>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading...product details</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductDetails);
