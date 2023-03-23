import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Form method="post" action="/contact">
        <label>
          <span>Email</span>
          <input type="email" name="email"></input>
        </label>
        <label>
          <span>Message</span>
          <input type="text" name="message"></input>
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Contact;
