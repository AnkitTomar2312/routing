import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        <Route path="contact" element={<Contact />} />
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
