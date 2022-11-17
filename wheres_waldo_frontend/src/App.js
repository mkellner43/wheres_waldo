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
          <Route path='/easy' element={<Game mode='1' image={require('./images/skiSlopes.jpeg')}/>} />
          <Route path='/medium' element={<Game mode='2' image={require('./images/spaceStation.jpeg')}/>} />
          <Route path='/hard' element={<Game mode='3' image={require('./images/fruitLand.jpeg')}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
