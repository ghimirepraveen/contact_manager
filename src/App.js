import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import ContactAdder from "./components/ContactAdder";
const App = () => {
  const contact = [
    { name: "Jone ", num: "9845672344", country: "USA" },
    { name: "Sita", num: "984544", country: "nepal" },
    { name: "Ram", num: "9867244", country: "India" },
  ];
  const addContactData = (contactData) => {
    contact.push(contactData);
    console.log(contact);
  };
  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="container">
        <h3>Contact List: </h3>
        {contact.map((data) => (
          <Contact data={data}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;
