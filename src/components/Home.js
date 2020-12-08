import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Link to="/sass_clone/Besthorrorscenes">Besthorrorscenes</Link>
      <Link to="/sass_clone/Painbox">Painbox</Link>
      <Link to="/sass_clone/Balenciaga">Balenciaga</Link>
    </div>
  );
}
export default Home;
