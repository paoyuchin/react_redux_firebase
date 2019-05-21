import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductsSummary from "../products/productsSummary";
import { link } from "fs";
import "../../config/fbConfig";
import firebase from "firebase/app";

class Products extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   imageURL: ""
    // };
  }
//   componentDidMount() {
// this.setState({
//   imageURL: this.props.products.imageName
// });
//     // this.createImageUrlFromFirebase(this.props.products.imageName);
//   }
//   createImageUrlFromFirebase() {
//     const { imageURL } = this.state;
//     let storageRef = firebase.storage().ref();
//     storageRef
//       .child(`${imageURL}.jpg`)
//       .getDownloadURL()
//       .then(url => {
//         console.log(url);
//         this.setState({
//           imageURL: url
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
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
  // console.log("///////", state.firestore.ordered.products);
  return {
    products: state.firestore.ordered.products
  };
};

export default compose(
  connect(mapStateToPros),
  firestoreConnect([{ collection: "products" }])
)(Products);
