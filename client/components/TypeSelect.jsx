import React, { useState } from 'react'

import { pokemonTypeApi } from '../apis/pokemonApi'

function TypeSelect() {

    const [pokemon, setPokemon] = useState([])



    async function type1() {

        const data = 1
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-normal', pokemon)
    }

    async function type2() {

        const data = 2
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-fighting', pokemon)
    }

    async function type3() {

        const data = 3
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-flying', pokemon)
    }

    async function type4() {

        const data = 4
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-poison', pokemon)
    }

    async function type5() {

        const data = 5
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-ground', pokemon)
    }

    async function type6() {

        const data = 6
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-rock', pokemon)
    }

    async function type7() {

        const data = 7
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-bug', pokemon)
    }

    async function type8() {

        const data = 8
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-ghost', pokemon)
    }

    async function type9() {

        const data = 9
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-steel', pokemon)
    }

    async function type10() {

        const data = 10
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-fire', pokemon)
    }

    async function type11() {

        const data = 11
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-water', pokemon)
    }

    async function type12() {

        const data = 12
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-grass', pokemon)
    }

    async function type13() {

        const data = 13
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-electric', pokemon)
    }

    async function type14() {

        const data = 14
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-psychic', pokemon)
    }

    async function type15() {

        const data = 15
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-ice', pokemon)
    }

    async function type16() {

        const data = 16
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-dragon', pokemon)
    }

    async function type17() {

        const data = 17
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data-dark', pokemon)
    }

    async function type18() {

        const data = 18
        const dataTypes = await pokemonTypeApi(data)
        console.log('data-received', dataTypes)
        setPokemon(dataTypes)
        console.log('data', pokemon)
    }


    return (
        <>
            <section className='type-section' id='poke-types'>

                <div className='type-header'>
                    <h2 >Pokemon Types</h2>
                    <p>Select a type to see what it is strong against and weak to.</p>
                </div>

                <div className='type-container'>

                    <div className='type-buttons'>
                        <button id='normal-button' onClick={type1}>Normal</button>
                        <button id='fighting-button' onClick={type2}>Fighting</button>
                        <button id='flying-button' onClick={type3}>Flying</button>
                        <button id='poison-button' onClick={type4}>Poison</button>
                        <button id='ground-button' onClick={type5}>Ground</button>
                        <button id='rock-button' onClick={type6}>Rock</button>
                        <button id='bug-button' onClick={type7}>Bug</button>
                        <button id='ghost-button' onClick={type8}>Ghost</button>
                        <button id='steel-button' onClick={type9}>Steel</button>
                        <button id='fire-button' onClick={type10}>Fire</button>
                        <button id='water-button' onClick={type11}>Water</button>
                        <button id='grass-button' onClick={type12}>Grass</button>
                        <button id='electric-button' onClick={type13}>Electric</button>
                        <button id='psychic-button' onClick={type14}>Psychic</button>
                        <button id='ice-button' onClick={type15}>Ice</button>
                        <button id='dragon-button' onClick={type16}>Dragon</button>
                        <button id='dark-button' onClick={type17}>Dark</button>
                        <button id='fairy-button' onClick={type18}>Fairy</button>
                    </div>

                    <div className='type-results'>
                        <h4>{pokemon?.name?.toUpperCase()}</h4>
                        <p>Weak to: {pokemon?.damage_relations?.double_damage_from?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[1]?.name?.toUpperCase()}  </p>
                        <p>Strong against: {pokemon?.damage_relations?.double_damage_to?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[1]?.name?.toUpperCase()}</p>
                        {/* <p>Resistant From: {pokemon?.damage_relations?.half_damage_from?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[2]?.name?.toUpperCase()}</p>
                        <p>Resistant to: {pokemon?.damage_relations?.half_damage_to?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[2]?.name?.toUpperCase()}</p> */}
                        <p>No Damage to: {pokemon?.damage_relations?.no_damage_to?.[0]?.name?.toUpperCase()}</p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default TypeSelect
