import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../Menu';
import './App.scss';

const App = () => {
    return (
      <BrowserRouter>
          <Menu />
      </BrowserRouter>
    );
};

export default App;
