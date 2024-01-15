import { useState } from "react";
const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setmobile] = useState("");
  const [loction, setlocation] = useState("");

  const onformsubmithaldaler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name: name,
      num: mobile,
      country: loction,
    };
    if (name.length < 1 || mobile.length < 1 || loction.length < 1) {
      alert("Please provide all information");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setmobile("");
      setlocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h3> Contact Adder:</h3>
        <br />
        <form onSubmit={onformsubmithaldaler}>
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="text"
              value={mobile}
              placeholder="Phonenumber"
              onChange={(e) => setmobile(e.target.value)}
            ></input>
            <input
              type="location"
              value={loction}
              placeholder="Location"
              onChange={(e) => setlocation(e.target.value)}
            ></input>
          </div>
          <br />
          <br />
          <div className="btn">
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactAdder;
