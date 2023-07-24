import React from "react";
import Contact from "./components/Contact";
import Wrapper from "./Wrapper";

import "./styles/app.css"

const App = () => {

  const contacts = [ {
    name:"John",
    number:123123123123,
    location: "Ktm",
  }, 
  {
    name:"Krish",
    number:123123123123,
    location: "Btl",
  }, 
  {
    name:"Dave",
    number:123123123123,
    location: "Jpn",
  }, 
]
  return (
    <>
    <Wrapper>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
   
    </Wrapper>
    </>
  );
}

export default App;
