import React from "react";
import "../..";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "../../config/fbConfig";
import firebase from "firebase";
import { Card } from "react-bootstrap";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL:
        "https://media.tenor.com/images/31b41d2ad4afd0bb55c508f13afcbcf4/tenor.gif"
    };
  }
  componentDidMount() { }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    // console.log("snapshot", snapshot);
    // console.log("this.props.product", this.props.product);
  }

  createImageUrlFromFirebase = imageName => {
    console.log("imageName", imageName);
    setTimeout(() => {
      console.log("imageName", imageName);
      var storage = firebase.storage();
      var storageRef = storage.ref();
      storageRef
        .child(`${imageName}.jpg`)
        .getDownloadURL()
        .then(url => {
          console.log("url", url);
          // this.setState({
          //   imageURL: url
          // });
          return `"${url}"`;
        })
        .catch(
          error => {
            console.log(error);
          },
          3000,
          imageName
        );
    });
  };

  render() {
    const { product } = this.props;
    if (product) {
      return (
        <div className="fixed_size">
          <Card>
            <Card.Img
              variant="top"
              src={
                this.props.product.imageName &&
                this.createImageUrlFromFirebase(this.props.product.imageName)
              }
            />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>{product.productContent}</Card.Text>
              <Card.Text>{product.productPrice}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading....</p>
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
