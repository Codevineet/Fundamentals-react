import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Interests from "./Components/Interests";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Extracurricular from "./Components/Extracurricular";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Interests />
    <Skills />
    <Education />
    <Experience />
    <Extracurricular />
  </React.StrictMode>
);
