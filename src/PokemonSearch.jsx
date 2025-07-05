import React, { useState, useEffect } from 'react';
import './PokemonSearch.css'; // Opcional: para estilos básicos


// Componente para obtener y mostrat Pokemon aleatorios
const PokemonSearch = () => {
    const [pokemones, setPokemones] = useState([]);
    const [tipo, setTipo] = useState(''); // Estado para el tipo de Pokémon


    // Hookk para obtener Pokemon aleatorios  
    useEffect(() => {
        
    }, [setPokemones]);


    const fetchPokemones = async () => {

        if (!tipo) {
            console.log('No hay tipo seleccionado');
            return; // Si no hay tipo seleccionado, no hacer nada
        }
        else {
            console.log(`Buscando Pokémon de tipo: ${tipo}`);

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}/`);

                if (!response.ok) {
                    throw new Error(`Error al cargar el Pokémon con ID ${id}: ${response.statusText}`);
                }

                const data = await response.json();
                setPokemones(data.pokemon); // Actualizar el estado con los Pokémon obtenidos)
                console.log(data.pokemon);// Extraer los Pokémon del tipo seleccionado
            }
            catch (err) {
                console.error('Error al buscar Pokémon:', err);
            }

        }

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemones();
    };


    return (

        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Pokémon</a>
                    <form class="d-flex" role="search" onSubmit={handleSubmit}>
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" onChange={(e) => setTipo(e.target.value)} />
                        <button class="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

            <div className='pokemon-search'>
                <h2>Pokemon buscados </h2>

                {pokemones.map(pokemon => (
                   

                    <h3 key={pokemon.pokemon.name} >{pokemon.pokemon.name}</h3>
                ))}

                {/* {pokemones.map(pokemon => (
                    console.log(pokemon.pokemon.name)
                    <div key={pokemon.pokemon.name}>
                        
                    </div>
                ))} */}
            </div>

        </>

    );
};

export default PokemonSearch;