import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explorer from './pages/Explorer';
import Feed from './pages/Feed';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explorar" element={<Explorer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
