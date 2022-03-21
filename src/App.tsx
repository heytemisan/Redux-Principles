import React from 'react';
import './App.css';
import { Store } from './Store';

function App() {
  const store = React.useContext(Store)
  return (
    <React.Fragment>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
    </React.Fragment>
  );
}

export default App;
