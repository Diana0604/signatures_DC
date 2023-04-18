import React from 'react';
//react components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Index from './pages/index'
import Index2 from './pages/index2'
import Index1 from './pages/index1'
import EBGmail from './pages/eb/gmail'
import EBHtml from './pages/eb/html'
import EBOutlook from './pages/eb/outlook'
import DCGmail from './pages/dc/gmail'
import DCHtml from './pages/dc/html'
import DCOutlook from './pages/dc/outlook'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eb/gmail" element={<EBGmail />} />
          <Route path="/eb/outlook" element={<EBOutlook />} />
          <Route path="/eb/html" element={<EBHtml />} />
          <Route path="/dc/gmail" element={<DCGmail />} />
          <Route path="/dc/outlook" element={<DCOutlook />} />
          <Route path="/dc/html" element={<DCHtml />} />
          <Route path="/2" element={<Index2 />} />
          <Route path="/1" element={<Index1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
