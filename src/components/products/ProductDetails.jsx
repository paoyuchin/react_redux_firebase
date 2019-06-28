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
        "http://www.cadex.com.tw/inc/themes/transcargo/ft-icon/ft-loading.gif"
    };
  }

  // componentDidMount() {
  //   console.log('//', this.props.product);
  //   this.props.product &&
  //     this.createImageUrlFromFirebase(this.props.product.imageName);
  // }

  render() {
    const { product } = this.props;
    const createImageUrlFromFirebase = imageName => {
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
        .catch(error => {
          console.log(error);
        });
    };
    if (product) {
      return (
        <div className="fixed_size">
          <Card>
            <Card.Img
              variant="top"
              src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto"
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
