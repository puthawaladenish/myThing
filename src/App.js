import React from 'react';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/grid.css';
import './css/custom.css';
import Header_home from './components/Header_home';
import Maininfo from './components/Maininfo';
//import Navindex from './components/Navforindex';


function App() {
  return (
    <div>
      <Header_home/>
       <Maininfo/>
       
      
    </div>
  );
}

export default App;
