import React from "react";
import ConversationMessages from "../../components/section-componets/ConversationMessages";
import "./style.chatMessageUI.css";

export default function ChatMessageUI() {
  return (
    <div className="chat-message-ui-wrapper">
      <ConversationMessages
        message1="Hey Ayush, What's up?"
        message2="Hey Ayush, What's up?"
        message3="Hey Ayush, What's up?"
        message4="Hey Ayush, What's up?"
      />
      <ConversationMessages
        sender="Hey Ayush, What's up?"
        message1="Hey Ayush, What's up?"
        message2="Hey Ayush, What's up?"
        message3="Hey Ayush, What's up?"
        message4="Hey Ayush, What's up?"
      />
    </div>
  );
}
