import { useState } from "react";

const ContactAdder = ( props ) => {

    const [name, SetName] = useState("");
    const [number, SetNumber] = useState("");
    const [location, SetLocation] = useState("");

    const onFormSubmitHandler = (e) => {

        e.preventDefault();

        const contactData = { id: Math.random(), name:name, number, location};
        if(name.length < 1 || number.length <1 || location.length<1){
            alert("Please fill all the fields");
        }else {
            props.onContactAdded( contactData );
            SetName("");
            SetNumber("");
            SetLocation("");    
        }
       
    }


    return( <>
    <div className="simpleAdder" >
    <h3 > Contact adder:  </h3>
    <form onSubmit={onFormSubmitHandler}>

    <input type="text" value={name} placeholder="Contact name" onChange={(e) => SetName(e.target.value)}></input>

    <input type="number" value={number} placeholder="Contact number" onChange={(e) => SetNumber(e.target.value)}></input>

    <input type="location" value={location} placeholder="Contact location" onChange={(e) => SetLocation(e.target.value)}></input>

    <br />
    <br />
    
    <button>Add Contact</button>
    </form>
    </div>
    </>

    )

}

export default ContactAdder;