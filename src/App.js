import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import { Question } from "./Question";
import Result from "./Result";

function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
