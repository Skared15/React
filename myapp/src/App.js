import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <h1> Hello React! </h1>
      <Hello name="sql" />
      <Hello name="python"/> 
    
      <Welcome name="abc"/>
      <Welcome name="def"/>
    </div>
  );
}

export default App;
