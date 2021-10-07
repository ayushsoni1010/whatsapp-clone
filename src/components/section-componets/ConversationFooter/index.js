import React from "react";
import "./style.conversationFooter.css";

export default function ConversationFooter() {
  return (
    <footer className="footer">
      <a href="/">
        <button>
          <i className="far fa-laugh"></i>
        </button>
      </a>
      <button>
        <i className="fas fa-paperclip"></i>
      </button>
      <input type="text" name="name" placeholder="Type a message" />
      <button>
        <i className="fas fa-microphone"></i>
      </button>
    </footer>
  );
}
