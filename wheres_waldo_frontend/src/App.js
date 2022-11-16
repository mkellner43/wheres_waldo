import './App.css';
import React from 'react';
import Home from './components/Home';
import Game from './components/Game';

import { 
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/easy' element={<Game mode='easy' image={require('./images/skiSlopes.jpeg')}/>} />
          <Route path='/medium' element={<Game mode='medium' image={require('./images/spaceStation.jpeg')}/>} />
          <Route path='/hard' element={<Game mode='hard' image={require('./images/fruitLand.jpeg')}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
