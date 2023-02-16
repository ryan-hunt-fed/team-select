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
                    <h2 >Pokemon Search</h2>
                    <p>Search for any Pokemon from Gen 1 to 8. Use all lower case and for specfic forms add - after, e.g. -mega.</p>
                    <form onSubmit={searchHandle}>
                        <label htmlFor='search'></label>
                        <input type='text' id='search' value={inputData} onChange={typeHandle} ></input>
                        <button>Search</button>
                    </form>
                </div>

                <div className='results-container'>
                    <div className='results-img'>
                        <img src={recievedSearch?.sprites?.front_default} alt={recievedSearch?.name} />
                        <img src={recievedSearch?.sprites?.front_shiny} alt={recievedSearch?.name} />
                    </div>
                    <div className='results-data'>
                        <h3>{recievedSearch?.name?.toUpperCase()}</h3>
                        <p>Type: {recievedSearch?.types?.[0]?.type?.name?.toUpperCase()} {recievedSearch?.types?.[1]?.type?.name?.toUpperCase()}</p>
                        <p>Abilities: {recievedSearch?.abilities?.[0]?.ability?.name.toUpperCase()}   {recievedSearch?.abilities?.[1]?.ability?.name.toUpperCase()}</p>
                        <p>Gen: {specialData?.generation?.name.toUpperCase()}</p>
                        <p>Evolves from: {specialData?.evolves_from_species?.name.toUpperCase()}</p>
                        {/* <p>Dex Entry: "{specialData?.flavor_text_entries?.[2]?.flavor_text}"</p> */}
                        <h4>Stats</h4>
                        <p>HP: {recievedSearch?.stats?.[0].base_stat}</p>
                        <p>Attack: {recievedSearch?.stats?.[1].base_stat} </p>
                        <p>Defense: {recievedSearch?.stats?.[2].base_stat}</p>
                        <p>Special Attack: {recievedSearch?.stats?.[3].base_stat}</p>
                        <p>Special Defense: {recievedSearch?.stats?.[4].base_stat} </p>
                        <p>Speed: {recievedSearch?.stats?.[5].base_stat}</p>
                    </div>
                    <div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default TeamSearch