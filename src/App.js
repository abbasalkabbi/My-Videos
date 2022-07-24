import  React from "react";
import { Routes, Route,Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <nav>
            <Link to="/">Home</Link>
            <Link to="about">about</Link>
      </nav>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
