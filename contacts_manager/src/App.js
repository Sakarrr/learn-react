import React, { useState } from "react";
import Contact from "./components/Contact";

import "./styles/app.css"
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

const App = () => {

  const getContacts  = JSON.parse(localStorage.getItem("contacts") );

  const [contacts, setContacts] = useState( getContacts ? getContacts : [] );

const addContactData = ( props ) => {
  const allContacts = [ props, ...contacts ] ;

  setContacts( allContacts );

  localStorage.setItem("contacts",JSON.stringify( allContacts ));

};

const clearAllContacts = () => {
  localStorage.clear();
  setContacts([]);
}


  return (
    <>
    <NavBar />

  <div className="contact_adder">
    <ContactAdder  onContactAdded={addContactData} />

  </div>
    <div className="contact_list">
      <h3>Contact List:</h3>
      <button onClick={clearAllContacts} style={{backgroundColor: "red",}}>Clear All Contacts</button>
      {
        contacts.map( (data ) => <Contact key={data.id} data = {data} ></Contact>) 
      }
      </div>
    </>
  );
}

export default App;
