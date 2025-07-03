import react from 'react'
import './App.css'
import PokemonFetcher from './PokemonFetcher';

function App() {
  return (
    <>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Pokémon</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button class="btn btn-outline-dark" type="submit">Buscar</button>
          </form>
        </div>
      </nav>

      <h1>Conoce tus Pokémon</h1>
      <PokemonFetcher />
    </>
  );
}

export default App
