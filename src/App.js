import React from 'react';
import './App.css';
import Container from './Container/Container';

function App() {
  var temp= 56;
  return (
    <div className="App">
        <Container abc={temp}/>
    </div>
  );
}

export default App;
