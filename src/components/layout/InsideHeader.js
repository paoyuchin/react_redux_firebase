import React from "react";
import "../common.scss";
class InsideHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  pageName = currentUrl => {
      console.log(6666, "currentUrl", currentUrl);
    switch (currentUrl) {
      case "/products":
        return "產品介紹";
        break;
      case "/Dashboard":
        return '產品留言板'
      case "/signin":
        return '登入頁面'
        break;
      case '/signup':
        return '註冊'
      default:
        console.log("sorry something wrong");
    }
  };
  render() {
    return (
      <div className="InsideHeader">
        <h1 className="inside_title">{this.pageName(this.props.currentUrl)}</h1>
      </div>
    );
  }
}

export default InsideHeader;

// conditional change inside header's background and change text
