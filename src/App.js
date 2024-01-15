import React, { useState } from "react";
import Contact from "./components/Contact";
import "./app.css";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/navbar";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearallcontact = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="container">
        <h3>Contact List: </h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
        <button onClick={clearallcontact} style={{ background: "#F6685E" }}>
          Clear all contacts
        </button>
      </div>
    </>
  );
};

export default App;
