import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/country/:name' element={<CountryDetail/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;