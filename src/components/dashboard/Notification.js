import React, { Component } from "react";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="notification">
      <p>及時推播</p>
      <ul className="notification_box">
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
      </ul>
    </div>
  );
};

export default Notification;
