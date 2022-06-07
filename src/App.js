import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Guide from 'components/guide/guide'
import 'assets/scss/common.scss'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1><Link to="/">APP</Link></h1>
        <nav>
          <Link to="/guide">guide</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/guide" element={<Guide />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
