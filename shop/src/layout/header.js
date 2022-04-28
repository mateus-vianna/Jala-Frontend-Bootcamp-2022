import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const counter = useSelector((state) => state.allReducers.backpack.data);
  console.log("%c%s", "color: #731d6d", JSON.stringify(counter));

  return (
    <div style={{ marginLeft: 150 }}>
      <div>
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
          <Link to="counter">Counter</Link>
        </nav>
      </div>
      <div>
        <h1>Here's the counter: {JSON.stringify(counter)}</h1>
      </div>
    </div>
  );
};

export default Header;
