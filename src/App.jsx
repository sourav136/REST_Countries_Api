import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/country/:name' element={<CountryDetail/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;