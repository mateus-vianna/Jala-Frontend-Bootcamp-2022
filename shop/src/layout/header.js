import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>My Applciation</h1>
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
};

export default Header;
