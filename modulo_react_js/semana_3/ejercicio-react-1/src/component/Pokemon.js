import { useState, useEffect } from 'react';
import SearchPokemonByType from './SearchPokemonByType';

const Pokemon = () =>{
    const [typePokemon, setTypePokemon] = useState('')
    const [pokeApi, setPokeApi] = useState('')
    const [pokemones, setPokemones] = useState('')

    const getTypePokemones = (type) =>{
        console.log(type)
        setTypePokemon(type)
    }

    useEffect(() => {

        const getPokemones = async () =>{
            const url = `https://pokeapi.co/api/v2/type/${typePokemon}`
            const data = await fetch(url).then(response => response.json()).catch(err => err)
            setPokeApi(data)
        }
        getPokemones()
    },[typePokemon])

    useEffect(() => {
        if(pokeApi){
            setPokemones(pokeApi)
        }
    },[pokeApi])


    return (
        <SearchPokemonByType func={getTypePokemones}></SearchPokemonByType>
    )

}

export default Pokemon