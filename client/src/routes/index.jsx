import React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Text from '../components/Text.jsx';

function Rutas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Text />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas;
