import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';

export default function App() {
  return (
    <BrowserRouter basename='/gh-pages-google-auth'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
