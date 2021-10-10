import React from "react";
import "./style.conversationMessages.css";

export default function ConversationMessages(
  __chatConversationMessageProperties
) {
  if (!__chatConversationMessageProperties.sender) {
    return (
      <div className="chat-conversation-left-message-wrapper">
        <p>{__chatConversationMessageProperties.message1}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message2}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message3}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message4}<span>12:00am</span></p>
      </div>
    );
  } else {
    return (
      <div className="chat-conversation-right-message-wrapper">
        <p>{__chatConversationMessageProperties.sender}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message2}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message3}<span>12:00am</span></p>
        <p>{__chatConversationMessageProperties.message4}<span>12:00am</span></p>
      </div>
    );
  }
}
