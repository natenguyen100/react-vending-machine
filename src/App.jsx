import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';

import Chips from './Chips'
import Candy from './Candy'
import Soda from './Soda'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/candy" element={<Candy />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
