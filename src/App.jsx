import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/country/:name' element={<CountryDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;