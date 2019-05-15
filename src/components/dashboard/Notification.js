import React, { Component } from "react";
import moment from 'moment';

const Notification = props => {
  const { notifications } = props;
  console.log("notifications", notifications);
  return (
    <div className="Notification">
      <h2>NOTIFICATION BOARD</h2>
      {notifications && notifications.map((item)=>{
        return (
            <div>
            <li>{item.user}</li>
            <li>{moment(item.time.toDate().fromNow)}</li>
            </div>
        );
      })}
    </div>
  );
};

export default Notification;
