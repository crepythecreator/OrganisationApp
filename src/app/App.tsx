import './variables.css';
import './normalize.css';

import { Route, Routes } from 'react-router-dom';

import style from './App.module.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div />} />
    </Routes>
  );
}

export default App;
