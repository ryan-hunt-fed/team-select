import React, { useState } from 'react'

import { pokemonSearchApi, pokemonSpecialApi } from '../apis/pokemonApi'

function TeamSearch() {

    const [recievedSearch, setRecievedSearch] = useState([])
    const [specialData, setSpecialData] = useState([])
    const [inputData, setInputData] = useState('')

    const searchHandle = async (evt) => {
        evt.preventDefault()
        const pokemonSearch = await pokemonSearchApi(inputData)
        setRecievedSearch(pokemonSearch)
        const specialData = await pokemonSpecialApi(inputData)
        setSpecialData(specialData)
        // console.log('gathered data', search)
        setInputData('')
        console.log(specialData)

    }

    const typeHandle = (evt) => {
        setInputData(evt.target.value)
        // console.log('handle', search)
    }



    return (
        <>
            <section className='search-section' id='poke-search'>
                <div className='search-container'>
                    <h2 >POKEMON SEARCH</h2>
                    <p>Search for any Pokemon from Gen 1 to 8. Use all lower case and for specfic forms add - after, e.g. -mega.</p>
                    <form onSubmit={searchHandle} className='form'>
                        <label htmlFor='search'></label>
                        <input type='text' id='search' value={inputData} onChange={typeHandle} ></input>
                        <button>SEARCH</button>
                    </form>
                </div>

                <div className='results-container'>
                    <div className='results-img'>
                        <p>NORMAL SPRITE</p>
                        <img src={recievedSearch?.sprites?.front_default} alt={recievedSearch?.name} />
                        <img src={recievedSearch?.sprites?.back_default} alt={recievedSearch?.name} />
                        <p>SHINY SPRITE</p>
                        <img src={recievedSearch?.sprites?.front_shiny} alt={recievedSearch?.name} />
                        <img src={recievedSearch?.sprites?.back_shiny} alt={recievedSearch?.name} />
                    </div>
                    <div className='results-data'>
                        <h3>{recievedSearch?.name?.toUpperCase()}</h3>
                        <p>POKEDEX #: {specialData?.id}</p>
                        <p>TYPE: {recievedSearch?.types?.[0]?.type?.name?.toUpperCase()} {recievedSearch?.types?.[1]?.type?.name?.toUpperCase()}</p>
                        <p>ABILITIES: {recievedSearch?.abilities?.[0]?.ability?.name.toUpperCase()}   {recievedSearch?.abilities?.[1]?.ability?.name.toUpperCase()}</p>
                        <p>GENERATION: {specialData?.generation?.name.toUpperCase()}</p>
                        <p>EVOLVES FROM: {specialData?.evolves_from_species?.name.toUpperCase()}</p>
                        {/* <p>Dex Entry: "{specialData?.flavor_text_entries?.[2]?.flavor_text}"</p> */}
                        <h4>STATS</h4>
                        <p>HP: {recievedSearch?.stats?.[0].base_stat}</p>
                        <p>ATTACK: {recievedSearch?.stats?.[1].base_stat} </p>
                        <p>DEFENSE: {recievedSearch?.stats?.[2].base_stat}</p>
                        <p>SPECIAL ATTACK: {recievedSearch?.stats?.[3].base_stat}</p>
                        <p>SPECIAL DEFENSE: {recievedSearch?.stats?.[4].base_stat} </p>
                        <p>SPEED: {recievedSearch?.stats?.[5].base_stat}</p>
                    </div>
                    <div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default TeamSearch