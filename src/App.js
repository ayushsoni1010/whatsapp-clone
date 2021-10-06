import React from "react";
// import ConversationHeader from "./components/section-componets/ConversationHeader";
import "./styles/index.css";
import ChatConversationUI from "./views/ChatConversationUI";
import SideBar from "./views/SideBar";
// import Chat from "./components/section-componets/Chat";

function App() {
  return (
    <div className="center_view landscape_view">
      <SideBar/>
      {/* <ConversationHeader profile="https://avatars.githubusercontent.com/u/76895975" name="Ayush Soni"/> */}
      <ChatConversationUI/>
    </div>
  );
}

export default App;
