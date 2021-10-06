import React from "react";
import ConversationFooter from "../../components/ConversationFooter";
import ConversationHeader from "../../components/section-componets/ConversationHeader";
import "./style.views.chatConversationUI.css";

export default function ChatConversationUI() {
    return (
      <div className="portrait_view" style={{ "margin-left": "28.824em" }}>
        <ConversationHeader
          profile="https://avatars.githubusercontent.com/u/76895975"
          name="Ayush Soni"
        />
        <ConversationFooter/>
      </div>
    );
}