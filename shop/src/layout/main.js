import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import ExMain from "../pages/exMain";
import Store from "../pages/store";
import About from "../pages/about";
import Banana from "../pages/fruits";
import Potato from "../pages/potato";
import Counter from "../pages/counter";
import { NotFound } from "../pages/notFound";

function Main() {
  return (
    <div style={{ marginLeft: 100 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex" element={<ExMain />} />
        <Route path="/store" element={<Store />}>
          <Route path="fruits" element={<Banana />} />
          <Route path="potato" element={<Potato />} />
        </Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
