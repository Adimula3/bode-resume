
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Hero from "./pages/hero";
import React from "react";
import MenuHeader from "./component/MenuHeader";

function App() {
  return (
          <>
          <Router>
              <div className="content" id="outer-container">
                  <MenuHeader />
                  <Routes>
                      <Route exact path="/" element={<Hero />}></Route>
                  </Routes>
              </div>
          </Router>
          </>

  );
}

export default App;
