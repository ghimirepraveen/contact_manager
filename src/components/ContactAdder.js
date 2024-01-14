import { useState } from "react";
const ContactAdder = (props) => {
  const [name, setName] = useState("wcp");
  const [mobile, setmobile] = useState("45405646");
  const [loction, setlocation] = useState("sx sk");

  const onClickHandeler = () => {
    const contactData = { name: name, num: mobile, country: loction };
    props.onContactAdded(contactData);
  };

  return (
    <>
      <div className="simpleAdder">
        Contact Adder:
        <br />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={mobile}
          placeholder="phno"
          onChange={(e) => setmobile(e.target.value)}
        ></input>
        <input
          type="location"
          value={loction}
          placeholder="location"
          onChange={(e) => setlocation(e.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={onClickHandeler}>Click me !!</button>
      </div>
    </>
  );
};
export default ContactAdder;
