import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="">Home</Link>
        <br />
        <Link to="store">Store</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="ex">Ex</Link>
        <br />
      </nav>
    </>
  );
}

export default Home;
