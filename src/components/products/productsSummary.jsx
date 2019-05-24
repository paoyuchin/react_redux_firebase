import React from "react";
import "../../index";
import "../../config/fbConfig";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { imageUrlAction } from "../../store/actions/imageUrlAction";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <div className="project_summary">
        <p>productID: {product.id}</p>
        <p>產品名字: {product.prodcutName}</p>
        <p>產品內容: {product.prodcutContent}</p>
        <p>產品價格: {product.prodcutPrice}</p>
        <img className="pic" src={this.props.imageURL} alt="圖片出現錯誤"/>
      </div>
    );
  }
}


export default ProjectDetails;
