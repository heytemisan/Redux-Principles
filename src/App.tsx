import React from 'react';
import './App.css';
import { Store } from './Store';

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(); //checker
  })
  //ACTION
  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL) //Fetch Url
    const dataJSON = await data.json(); //convert data to a readable json 
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }
  console.log(state);

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
    </React.Fragment>
  );
}

export default App;
