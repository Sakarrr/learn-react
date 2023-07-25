import React, { useState } from "react";
import Contact from "./components/Contact";

import "./styles/app.css"
import ContactAdder from "./components/ContactAdder";

const App = () => {

  const initialContacts = [ {
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
  {
    name:"Krish",
    number:123123123123,
    location: "Chn",
  }, 
]

  const [contacts, setContacts] = useState( initialContacts );

const addContactData = ( props ) => {
  setContacts( [ props, ...contacts ] );

};

  return (
    <>

  <div className="contact_adder">
    <ContactAdder  onContactAdded={addContactData} />

  </div>
    <div className="contact_list">
      <h3>Contact List:</h3>
      {
        contacts.map(data => <Contact data = {data} ></Contact>) 
      }
      </div>
    </>
  );
}

export default App;
