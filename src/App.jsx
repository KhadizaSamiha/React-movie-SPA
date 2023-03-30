import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  const handlewatchTime = (time) =>{
    console.log(time);
  }
  return (
    <div className="main-container row">
      <div className="home-container col-md-8">
        <Home handlewatchTime={handlewatchTime}></Home>
      </div>
      <div className="sideCart-container col-md-4 card">
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default App;
