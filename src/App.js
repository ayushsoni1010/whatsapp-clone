import React from "react";
import "./styles/index.css";
import ChatConversationUI from "./views/ChatConversationUI";
import SideBar from "./views/SideBar";

function App() {
  return (
    <div className="center_view landscape_view">
      <SideBar/>
      <ChatConversationUI/>
    </div>
  );
}

export default App;
