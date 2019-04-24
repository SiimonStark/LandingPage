import React from 'react';
import Nav from './Component_Nav/Nav';
import Home from './Component_Home/Home';


function App() {
  let tab = <Home />;

  return (
    <div className="App">
      <Nav />
      {tab}
    </div>
  );
}

export default App;

// ? Inspiration:
// ? https://dribbble.com/shots/5338988-Personal-Portfolio-Web-UI