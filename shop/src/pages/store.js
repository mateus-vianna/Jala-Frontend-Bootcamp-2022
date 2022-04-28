import React from "react";
import { Outlet } from "react-router-dom";

function Store() {
  return (
    <>
      <h1>Store</h1>
      <Outlet />
    </>
  );
}

export default Store;
