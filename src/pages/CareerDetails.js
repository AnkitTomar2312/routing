import React from "react";
import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const careers = useLoaderData();
  return (
    <div>
      <h1>This is the required user data: </h1>
      <h2>Career Details: {careers.title}</h2>
      <p>Salary: {careers.salary}</p>
      <p>Location: {careers.location}</p>
      <div>
        Eu aliquip tempor irure esse pariatur non in in nulla irure dolore esse.
        Reprehenderit incididunt do excepteur ipsum anim nisi excepteur ullamco
        nulla. Magna tempor Lorem in et aliqua mollit aliqua tempor irure nulla.
        Veniam elit nisi qui dolore ea proident. Occaecat veniam anim esse
        dolor. Dolor mollit reprehenderit proident eu consectetur excepteur.
        Nisi eu id dolore do. Ipsum elit sit non consequat nisi. Consectetur eu
        commodo adipisicing et ullamco amet commodo. Aliquip enim sit nulla ex
        consequat enim nostrud proident fugiat reprehenderit consequat officia
        laborum. Exercitation commodo anim sit anim excepteur magna laboris.
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(" http://localhost:4000/careers/" + id);
  return res.json();
};
