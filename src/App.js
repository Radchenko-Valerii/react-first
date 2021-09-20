import React  from "react";
import Image from "./components/image/index";
import Aloha from "./components/aloha";
import Clicker from "./components/clicker";
import './App.css';

function App() {
  return <React.Fragment>
    <Aloha name="Monday" isGreeting/>
    <Image alt="img" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
    <Clicker counter/>
  </React.Fragment>}

export default App;
