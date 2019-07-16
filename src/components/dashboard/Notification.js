import React, { Component } from "react";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  if (!notifications) {
    return(
       <div>
          <img src="https://mshopstatic-in.vivo.com/dist/images/common/loading_e5479cc.gif" alt=""/>
        </div>
    )
  }else{
    return (
      <div className="notification">
        <span className="notification_box">
          {notifications &&
            notifications.map(item => {
              return (
                <div className="action">
                  <span className="username">{item.user} </span>
                  <span className="action_behavior">{item.content} </span>
                  <div className="action_time">
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                </div>
              );
            })}
        </span>
      </div>
    );
  }

};

export default Notification;
