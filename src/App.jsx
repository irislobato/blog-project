import React from "react";
import { Routes, Route } from "react-router-dom";
import DetalhesNoticia from "./pages/DetalhesNoticia";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="noticias/:id" element={<DetalhesNoticia />}></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}