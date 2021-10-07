import React from "react";
import "./style.conversationHeader.css";

export default function ConversationHeader(__chatConversationProperties) {
  return (
    <div className="chat-conversation-header-wrapper">
      <div className="header-profile-section">
        <a href="/">
          <img src={__chatConversationProperties.profile} alt="Profile Pic" />
        </a>
        <p>{__chatConversationProperties.name}</p>
      </div>
      <div className="header-section-options-wrapper">
        <a href="/">
          <button>
            <i className="fas fa-video"></i>
          </button>
        </a>
        <a href="/">
          <button>
            <i className="fas fa-phone-alt call-icon"></i>
          </button>
        </a>
        <button>
          <img
            src="https://img.icons8.com/ios/24/000000/vertical-line.png"
            alt="line"
            className="line-icon"
          />
        </button>
        <button>
          <i className="fas fa-search search-icon"></i>
        </button>
        <button>
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  );
}
