import React from 'react';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/grid.css';
import './css/custom.css';
import Header_home from './components/Header_home';
import Maininfo from './components/Maininfo';
import Footer from './components/footer'
import LoginNav from './components/LoginNav';


function App() {
  return (
    <div>
      <Header_home/>
       <Maininfo/>
       <Footer/>
      
    </div>
  );
}

export default App;
