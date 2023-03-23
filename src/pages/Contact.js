import React from "react";
import { Form, NavLink, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div>
      <NavLink to="contact">Help</NavLink>
      <NavLink to="faq">Faq</NavLink>
      <Form method="post" action="/help/contact">
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
      {data && data.error && <p>{data.error}</p>}
    </div>
  );
}
export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  //post errors
  if (submission.message.length < 10) {
    return { error: "Message should contain atleast 10 chars" };
  }
  //redirecting the user necessary otherwise throw error
  return redirect("/");
};
