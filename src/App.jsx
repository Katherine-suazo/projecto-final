import react from 'react'
import './App.css'
import PokemonFetcher from './PokemonFetcher';
import PokemonSearch from './PokemonSearch';

function App() {
  return (
    <>

      <PokemonSearch />
      <h1>Conoce tus Pokémon</h1>
      <PokemonFetcher />

    </>
  );
}

export default App
