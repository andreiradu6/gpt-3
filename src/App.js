import "./App.css";
import { Article, Brand, Cta, Feature, Navbar } from "../src/components/index";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "../src/containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility/>
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
