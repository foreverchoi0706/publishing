import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Link to="/publishing/Besthorrorscenes">Besthorrorscenes</Link>
      <Link to="/publishing/Painbox">Painbox</Link>
      <Link to="/publishing/Balenciaga">Balenciaga</Link>
    </div>
  );
}
export default Home;
