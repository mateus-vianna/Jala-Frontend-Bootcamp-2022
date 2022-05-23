import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Stock from "../pages/stock";
import About from "../pages/about";
import ExMain from "../pages/exMain";
import Counter from "../pages/counter";
import Store from "../pages/store";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Main() {
  return (
    <div style={{ marginTop: 80 }}>
      <Container fixed>
        <Box
          sx={{
            maxHeight: { xs: 200, sm: 300, md: 300, lg: 700 },
            minHeight: { xs: 200, sm: 300, md: 300, lg: 535 },
            maxWidth: { xs: 150, sm: 300, md: 600, lg: 1250 },
            minWidth: { xs: 150, sm: 300, md: 900, lg: 1250 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/ex" element={<ExMain />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}
