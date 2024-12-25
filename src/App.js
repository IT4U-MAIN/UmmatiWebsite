import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, createContext, useState,useEffect } from "react";

import { AuthProvider } from "./authProviders/AuthContext";
import SpotifyTokenHandler from "./authProviders/SpotifyTokenHandler";
import ProtectedRoute from "./authProviders/ProtectedRoute";
import LoginRoute from "./authProviders/LoginContext";

import HomePage from './pages/HomePage';
import Podcast from './pages/Podcast';
import Chapters from './pages/Chapters';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Dallas from './pages/Chapters/Dallas';
import FortWorth from './pages/Chapters/FortWorth';
import LittleRock from './pages/Chapters/LittleRock';
import Houston from './pages/Chapters/Houston';
import Events from './pages/Events/EventsParent';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile/Profile';
import ScrollToTop from './pages/ScrollToTop';
import Error404Page from "./404/Error404Page";

function App() {

  return (
    <AuthProvider>
    <SpotifyTokenHandler />
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chapters/dallas" element={<Dallas />} />
        <Route path="/chapters/little-rock" element={<LittleRock />} />
        <Route path="/chapters/houston" element={<Houston />} />
        <Route path="/chapters/fort-worth" element={<FortWorth />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
