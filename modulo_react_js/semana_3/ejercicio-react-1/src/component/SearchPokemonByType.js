import { useState } from 'react';

const SearchPokemonByType = ({func}) =>{

    const [value, setValue] = useState('')
    
    const onChangeTypePokemon = e =>{
        setValue(e.target.value)
    }

    const search = () =>{
        func(value)
    }

    return (
        <div>
            <label>Pokemon</label>
            <input type="text" value={value} onChange={onChangeTypePokemon}></input>
            <input type="button" placeholder="tipo de pokemon" onClick={search}></input>
        </div>
    )
}

export default SearchPokemonByType