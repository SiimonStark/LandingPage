import React, { Component } from 'react';
import Nav from './Component_Nav/Nav';
import Home from './Component_Home/Home';


function App() {
  let tab = Home;

  return (
    <div className="App">
      <Nav />
      {tab}
    </div>
  );
}

export default App;
https://github.com/SiimonStark/LandingPage.git