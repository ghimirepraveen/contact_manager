import React from "react";
import Contact from "./Contact";
import "./app.css";
import Wrapper from "./Wrapper";
const App = () => {
  const contact = [
    { name: "Jone ", num: "9845672344", country: "USA" },
    { name: "Sita", num: "984544", country: "nepal" },
    { name: "Ram", num: "9867244", country: "India" },
  ];

  return (
    <>
      <div className="container">
        <h3>Contact List: </h3>
        <Wrapper>
          <Contact data={contact[0]} />
          <Contact data={contact[1]} />
          <Contact data={contact[2]} />
        </Wrapper>
      </div>
    </>
  );
};

export default App;
