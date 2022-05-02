
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Hero from "./pages/hero";

function App() {
  return (
          <>
          <Router>
              <div className="content">
                  <Routes>
                      <Route exact path="/" element={<Hero />}></Route>
                  </Routes>
              </div>
          </Router>
          </>

  );
}

export default App;
