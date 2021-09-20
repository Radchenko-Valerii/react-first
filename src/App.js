import React  from "react";
import Image from "./components/image/index";
import Aloha from "./components/aloha";
import './App.css';

function App() {
  return <React.Fragment>
    <Aloha name="Monday" isGreeting/>
    <Image alt="img" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
  </React.Fragment>}

export default App;
