import { useState } from "react";

const ContactAdder = ( props ) => {

    const [name, SetName] = useState("");
    const [number, SetNumber] = useState("");
    const [location, SetLocation] = useState("");

    const onClickHandler = () => {

        const contactData = { id: Math.random(), name:name, number, location};
        props.onContactAdded( contactData )    
    }


    return( <>
    <div className="simpleAdder" >
    Contact adder: <br />

    <input type="text" value={name} placeholder="Contact name" onChange={(e) => SetName(e.target.value)}></input>

    <input type="number" value={number} placeholder="Contact number" onChange={(e) => SetNumber(e.target.value)}></input>

    <input type="location" value={location} placeholder="Contact location" onChange={(e) => SetLocation(e.target.value)}></input>

    <br />
    <br />
    
    <button onClick={onClickHandler}>Add Contact</button>
    </div>
    </>

    )

}

export default ContactAdder;