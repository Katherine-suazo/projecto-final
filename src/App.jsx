import react from 'react'
import './App.css'
import PokemonFetcher from './PokemonFetcher';
import PokemonSearch from './PokemonSearch';

function App() {
  return (
    <>

      <h1>Conoce tus Pokémon</h1>
      <PokemonFetcher />
      <PokemonSearch />

    </>
  );
}

export default App
