import React from "react";
import ConversationMessages from "../../components/section-componets/ConversationMessages";
import "./style.chatMessageUI.css";

export default function ChatMessageUI() {
  return (
    <div className="chat-message-ui-wrapper">
      <ConversationMessages
        message1="Hey Ayush"
        message2="Hello Ayush"
        message3="Hyyy Ayush"
        message4="Hiii Ayush"
      />
      <ConversationMessages
        sender="right"
        message1="Hey Ayush"
        message2="Hello Ayush"
        message3="Hyyy Ayush"
        message4="Hiii Ayush"
      />
    </div>
  );
}
