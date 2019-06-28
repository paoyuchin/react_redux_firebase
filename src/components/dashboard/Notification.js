import React, { Component } from "react";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="notification">
    {/* <div className="title_img">
        <img src="http://michikiri.com/img/top/hd_information.png" alt="" />
    </div> */}
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
};

export default Notification;
