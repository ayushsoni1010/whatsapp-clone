import React from "react";
import "./styles/index.css";
import Header from "./components/section-componets/Header";
import SearchInput from "./components/section-componets/SearchInput";
import LandingPage from "./views/LandingPage";
// import Chat from "./components/section-componets/Chat";

function App() {
  return (
    <div className="center_view portrait_view">
      <Header/>
      <SearchInput />
      <LandingPage/>
    </div>
  );
}

export default App;
