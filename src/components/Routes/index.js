import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home.js";
import Profil from "../../pages/Profil.js";
import Trending from "../../pages/Trending.js";
import Navbar from "../Navbar.js";

export default function index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
