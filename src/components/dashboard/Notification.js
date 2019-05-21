import React, { Component } from "react";
import moment from 'moment';

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="Notification">
      <h2>NOTIFICATION BOARD</h2>
      <ul>
      { notifications && notifications.map((item)=>{
        return (
          <li className="notification_list">
          <span className="username">{item.user} </span>
          <span className="action">{item.content} </span>
          <span className="action_time">{moment(item.time.toDate()).fromNow()}</span>
          </li>
        )
      })}      
      </ul>

    </div>
  );
};

export default Notification;
