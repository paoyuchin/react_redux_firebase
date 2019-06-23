import React from "react";
import "../../index";
import "../../config/fbConfig";
import firebase from "firebase/app";
import { connect } from "react-redux";
import './product.scss';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "https://demos.laraget.com/images/loading2.gif"
    };
  }
  componentDidMount() {
      this.createImageUrlFromFirebase(this.props.product.imageName);
  }
  createImageUrlFromFirebase = imageName => {
    console.log('imageName', imageName)
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef
      .child(`${imageName}.jpg`)
      .getDownloadURL()
      .then(url => {
        console.log('url', url)
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
    return (
      <div className="project_summary">
        <p>productID: {product.id}</p>
        <p>產品名字: {product.productName}</p>
        <p>產品內容: {product.productContent}</p>
        <p>產品價格: {product.productPrice}</p>
        <img className="pic" src={this.state.imageURL} alt="圖片出現錯誤"/>
      </div>
    );
  }
}


export default ProjectDetails;
