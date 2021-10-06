import React, { useState } from "react";
import "./style.chat.css";
import chatDetails from "./__chatDetails.json";

export default function Chat() {
  const [chatProperties] = useState(chatDetails);
  return (
    <div className="chat-container">
      {chatProperties.map((data, index) => (
        <div className="chat-properties-wrapper" key={index}>
          <img src={data.profilePic} alt="Profile Pic" />
          <div className="chat-body">
            <div className="chat-profile-details">
              <p className="chat-name">{data.name}</p>
              <p className="chat-time">{data.time}</p>
            </div>
            <div className="chat-last-message">
              <p>{data.message}</p>
              <button className="btn-options">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow.png" alt="arrow-icon"/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
