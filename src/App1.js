import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareerError from "./pages/CareerError";

import CareerInner, { carrerloader } from "./pages/CareerInner";
import Contact, { contactAction } from "./pages/Contact";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Home from "./pages/Home";
import LayOut from "./pages/LayOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="careers" element={<Career />} errorElement={<CareerError />}>
        <Route index element={<CareerInner />} loader={carrerloader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);
const App1 = () => {
  return (
    <>
      <h1>Trying the Modern Routing</h1>
      <RouterProvider router={router} />
    </>
  );
};

export default App1;
