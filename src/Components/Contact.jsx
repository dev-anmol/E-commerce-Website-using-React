import React, { useState } from "react";

const Contact = () => {
  const [details, setDetails] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toHandleSubmit = (e) => {
    e.preventDefault();
    setDetails({name,email,message});
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={toHandleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              required
              placeholder="Abc"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Abc@xyz.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
