import React from 'react';
import './App.css';
import { Store } from './Store';

interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, original: string }
  name: string
  number: number
  rating: { average: null }
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  })
  //ACTION
  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL) //Fetch Url
    const dataJSON = await data.json(); //convert data to a readable json 
    return dispatch({
      type: 'FETCH_DATA', //checked
      payload: dataJSON._embedded.episodes
    })
  }
  console.log(state);

  return (
    <React.Fragment>
      <header className='header'>
        <h1>Ricky</h1>
        <p>Pick your favourite episode!!!</p>
      </header>
      <section className='episode-layout'>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img src={episode.image.medium} alt={`Ricky${episode.name}`} />
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
