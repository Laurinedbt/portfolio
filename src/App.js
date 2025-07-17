import './App.css';
import './index.css';
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />

      <Routes>
        <Route path= "/" element={<Home />}></Route>
        <Route path= "/about" element={<About />}></Route>
        <Route path= "/contact" element={<Contact />}></Route>
        <Route path= "/portfolio" element={<Portfolio />}></Route>
        <Route path= "/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
