import React from "react";
import "../../index";
import moment from "moment";
import "../../config/fbConfig";
import firebase from "firebase/app";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
    };
    console.log('this.props',this.props.product);
  }
  componentDidMount() {
      this.createImageUrlFromFirebase(this.props.product.imageName);
  }
  createImageUrlFromFirebase = imageName => {
      this.setState({
        imageURL: this.props.product.imageName
      });
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef
      .child(`${imageName}.jpg`)
      .getDownloadURL()
      .then(url => {
          console.log('url',url);
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
        <p>產品名字: {product.prodcutName}</p>
        <p>產品內容: {product.prodcutContent}</p>
        <p>產品價格: {product.prodcutPrice}</p>
        <img className="pic" src={this.state.imageURL} alt="圖片出現錯誤"/>
      </div>
    );
  }
}
export default ProjectDetails;
