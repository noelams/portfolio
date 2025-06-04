import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./Landing.jsx";
import "./styles/App.css";
import "./styles/utils.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
