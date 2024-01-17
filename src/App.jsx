import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Guide from 'components/guide/guide'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Guide />}/>
    </Routes>
  );
}

export default App;
