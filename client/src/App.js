import React from "react";
import './App.css';
import Header from "./components/Header/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={Header} />
          <Route path="/create-nft" component={Header} />
          <Route path="/nft/:nftId" component={Header} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
