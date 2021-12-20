import React from "react";

import "./styles/index.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/AboutMe/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
