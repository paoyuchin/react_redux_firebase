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
        "https://mshopstatic-in.vivo.com/dist/images/common/loading_e5479cc.gif"
    };
  }

  render() {
    const { product } = this.props;
    if (product) {
      return (
        <div className="fixed_size ProductDetails">
          <Card className="card_wrap">
            <Card.Img
              variant="img"
              src={product.imageUrl}
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
