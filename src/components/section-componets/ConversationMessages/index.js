import React from "react";
import "./style.conversationMessages.css";

export default function ConversationMessages(
  __chatConversationMessageProperties
) {
  if (!__chatConversationMessageProperties.sender) {
    return (
      <div className="chat-conversation-left-message-wrapper">
        <p>{__chatConversationMessageProperties.message1}</p>
        <p>{__chatConversationMessageProperties.message2}</p>
        <p>{__chatConversationMessageProperties.message3}</p>
        <p>{__chatConversationMessageProperties.message4}</p>
      </div>
    );
  } else {
    return (
      <div className="chat-conversation-right-message-wrapper">
        <p>{__chatConversationMessageProperties.sender}</p>
        <p>{__chatConversationMessageProperties.message2}</p>
        <p>{__chatConversationMessageProperties.message3}</p>
        <p>{__chatConversationMessageProperties.message4}</p>
      </div>
    );
  }
}
