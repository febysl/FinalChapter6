import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepages } from "../pages/Homepages";
import { AllMovies } from "../pages/AllMovies";
import { DetailsMovies } from "../pages/DetailsMovies";
import { SearchResult } from "../pages/SearchResult";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import ProtectToken from "../components/protected/ProtectToken";

export const RouterDefault = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ProtectToken><Homepages /></ProtectToken>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allmovies" element={<ProtectToken><AllMovies /></ProtectToken>} />
        <Route path="/details/:id" element={<ProtectToken><DetailsMovies /></ProtectToken>} />
        <Route path="/details/search/:query" element={<ProtectToken><SearchResult /></ProtectToken>} />
      </Routes>
    </BrowserRouter>
  );
};
