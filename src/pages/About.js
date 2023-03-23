import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [isLogin, setIsLogIn] = useState("mario");
  if (!isLogin) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <p>
        Officia consequat laborum ea incididunt est tempor excepteur ut aliquip
        cillum mollit sit. Fugiat proident excepteur ullamco qui ut sunt
        pariatur eiusmod cupidatat deserunt pariatur duis. Minim pariatur
        commodo qui elit culpa cupidatat tempor est mollit. Cupidatat in
        cupidatat sint occaecat veniam ea consequat sunt. Exercitation magna
        nulla velit sint fugiat non elit.
      </p>
      <button onClick={() => setIsLogIn(null)}>LogOut</button>
    </div>
  );
};

export default About;
