import React from "react";
import "../../index";
import "../../config/fbConfig";
import firebase from "firebase/app";
import { connect } from "react-redux";
import "./product.scss";
import "../common.scss";

class ProductsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL:
        "https://mshopstatic-in.vivo.com/dist/images/common/loading_e5479cc.gif"
    };
  }
  componentDidMount() {
    this.createImageUrlFromFirebase(this.props.product.imageName);
  }
  createImageUrlFromFirebase = imageName => {
    console.log("imageName", imageName);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef
      .child(`${imageName}.jpg`)
      .getDownloadURL()
      .then(url => {
        console.log("url", url);
        this.setState({
          imageURL: url
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { product } = this.props;

    if (!product) {
      return (
        <div>
          <img
            src="https://mshopstatic-in.vivo.com/dist/images/common/loading_e5479cc.gif"
            alt=""
          />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <span className="left">
            <div className="img_wrap">
              <img
                className="img"
                src={this.state.imageURL}
                alt="圖片出現錯誤"
              />
            </div>
          </span>
          <span className="right">
            {/* <p>productID: {product.id}</p> */}
            <p className="product_name">{product.productName}</p>
            <p className="product_content">{product.productContent}</p>
          </span>
        </React.Fragment>
      );
    }
  }
}

export default ProductsSummary;
