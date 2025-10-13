import React from "react";
import { HashRouter } from "react-router-dom";
import Home from "./components/Home";
// import Animations from "./components/Animations";
// import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./components/Service";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio"; 
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

