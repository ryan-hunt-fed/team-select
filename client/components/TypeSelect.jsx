import React, { useState } from 'react'

import { pokemonTypeApi, pokemonAbilityApi } from '../apis/pokemonApi'

function TypeSelect() {

    const [pokemon, setPokemon] = useState([])

    const [recievedSearch, setRecievedSearch] = useState([])
    // // const [specialData, setSpecialData] = useState([])
    const [inputData, setInputData] = useState('')



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

    const searchHandle = async (evt) => {
        evt.preventDefault()
        const pokemonAbility = await pokemonAbilityApi(inputData)
        setRecievedSearch(pokemonAbility)

        // console.log('gathered data', search)
        setInputData('')


    }

    const typeHandle = (evt) => {
        setInputData(evt.target.value)
        // console.log('handle', search)
    }


    return (
        <>
            <section className='type-section' id='poke-types'>

                <div className='type-header'>
                    <h2 >POKEMON TYPES</h2>
                    <p>Select a type to see what it is strong against and weak to.</p>
                </div>

                <div className='type-container'>

                    <div className='type-buttons'>
                        <button id='normal-button' onClick={type1}>NORMAL</button>
                        <button id='fighting-button' onClick={type2}>FIGHTING</button>
                        <button id='flying-button' onClick={type3}>FLYING</button>
                        <button id='poison-button' onClick={type4}>POISON</button>
                        <button id='ground-button' onClick={type5}>GROUND</button>
                        <button id='rock-button' onClick={type6}>ROCK</button>
                        <button id='bug-button' onClick={type7}>BUG</button>
                        <button id='ghost-button' onClick={type8}>GHOST</button>
                        <button id='steel-button' onClick={type9}>STEEL</button>
                        <button id='fire-button' onClick={type10}>FIRE</button>
                        <button id='water-button' onClick={type11}>WATER</button>
                        <button id='grass-button' onClick={type12}>GRASS</button>
                        <button id='electric-button' onClick={type13}>ELECTRIC</button>
                        <button id='psychic-button' onClick={type14}>PSYCHIC</button>
                        <button id='ice-button' onClick={type15}>ICE</button>
                        <button id='dragon-button' onClick={type16}>DRAGON</button>
                        <button id='dark-button' onClick={type17}>DARK</button>
                        <button id='fairy-button' onClick={type18}>FAIRY</button>
                    </div>

                    <div className='type-results'>
                        <h4>{pokemon?.name?.toUpperCase()}</h4>
                        <p>Weak to: {pokemon?.damage_relations?.double_damage_from?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[2]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[3]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[4]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_from?.[5]?.name?.toUpperCase()}</p>
                        <p>Strong against: {pokemon?.damage_relations?.double_damage_to?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[2]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[3]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[4]?.name?.toUpperCase()} {pokemon?.damage_relations?.double_damage_to?.[5]?.name?.toUpperCase()}</p>
                        {/* <p>Resistant From: {pokemon?.damage_relations?.half_damage_from?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[2]?.name?.toUpperCase()}</p>
                        <p>Resistant to: {pokemon?.damage_relations?.half_damage_to?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.half_damage_from?.[2]?.name?.toUpperCase()}</p> */}
                        <p>No Damage to: {pokemon?.damage_relations?.no_damage_to?.[0]?.name?.toUpperCase()} {pokemon?.damage_relations?.no_damage_to?.[1]?.name?.toUpperCase()} {pokemon?.damage_relations?.no_damage_to?.[2]?.name?.toUpperCase()} {pokemon?.damage_relations?.no_damage_to?.[3]?.name?.toUpperCase()}</p>
                    </div>

                </div>

                {/* <div>
                    <h2>POKEMON ABILITIES</h2>
                    <p>Search for information about pokemon abilities. Use - between words and lowercase.</p>
                    <form onSubmit={searchHandle} className='form'>
                        <label htmlFor='search'></label>
                        <input type='text' id='search' value={inputData} onChange={typeHandle} ></input>
                        <button>SEARCH</button>
                    </form>

                </div>
                <div>
                    <h4>{recievedSearch?.name?.toUpperCase()}</h4>
                    <p>{recievedSearch?.effect_entries?.[1]?.effect}</p>
                    <p>{recievedSearch?.effect_entries?.[1]?.short_effect}</p>
                </div> */}
                <div className='ability-header'>
                    <h2>POKEMON ABILITIES</h2>
                    <p>Select from the list to see details about Pokemon abilities.</p>
                </div>
                <div className='ability-container'>
                    <form onSubmit={searchHandle} className='form'>
                        <label htmlFor='ability'>Ability:</label>
                        {/* <input type='submit' value={inputData} onChange={typeHandle} ></input> */}
                        <select name='abilities' id='ability' onChange={typeHandle}>
                            <option value='adaptability'>Adaptability</option>
                            <option value='aerilate'>Aerilate</option>
                            <option value='aftermath'>Aftermath</option>
                            <option value='air-lock'>Air Lock</option>
                            <option value='analytic'>Analytic</option>
                            <option value='anger-point'>Anger Point</option>
                            <option value='anger-shell'>Anger Shell</option>
                            <option value='anticipation'>Anticipation</option>
                            <option value='arena-trap'>Arena Trap</option>
                            <option value='armor-tail'>Armor Tail</option>
                            <option value='aroma-veil'>Aroma Veil</option>
                            {/* <option value='as-one'>As One</option> */}
                            <option value='aura-break'>Aura Break</option>
                            <option value='bad-dreams'>Bad Dreams</option>
                            <option value='ball-fetch'>Ball Fetch</option>
                            <option value='battery'>Battery</option>
                            <option value='battle-armor'>Battle Armor</option>
                            <option value='battle-bond'>Battle Bond</option>
                            <option value='beads-of-ruin'>Beads of Ruin</option>
                            <option value='beast-boost'>Beast Boost</option>
                            <option value='beserk'>Berserk</option>
                            <option value='big-pecks'>Big Pecks</option>
                            <option value='blaze'>Blaze</option>
                            <option value='bulletproof'>Bulletproof</option>
                            <option value='cheek-pouch'>Cheek Pouch</option>
                            <option value='chilling-neigh'>Chilling Neigh</option>
                            <option value='chlorophyll'>Chlorophyll</option>
                            <option value='clear-body'>Clear Body</option>
                            <option value='cloud-nine'>Cloud Nine</option>
                            <option value='color-change'>Color Change</option>
                            <option value='comatose'>Comatose</option>
                            <option value='commander'>Commander</option>
                            <option value='competitive'>Competitive</option>
                            <option value='compound-eyes'>Compound Eyes</option>
                            <option value='contrary'>Contrary</option>
                            <option value='corrosion'>Corrosion</option>
                            <option value='costar'>Costar</option>
                            <option value='cotton-down'>Cotton Down</option>
                            <option value='cud-chew'>Cud Chew</option>
                            {/* <option value='curious-medicine'>Curious Medicine</option> */}
                            <option value='cursed-body'>Cursed Body</option>
                            <option value='cute-charm'>Cute Charm</option>
                            <option value='damp'>Damp</option>
                            <option value='dancer'>Dancer</option>
                            <option value='dark-aura'>Dark Aura</option>
                            <option value='dauntless-shield'>Dauntless Shield</option>
                            <option value='dazzling'>Dazzling</option>
                            <option value='defeatist'>Defeatist</option>
                            <option value='defiant'>Defiant</option>
                            <option value='delta-stream'>Delta Stream</option>
                            <option value='desolate-land'>Desolate Land</option>
                            <option value='disguise'>Disguise</option>
                            <option value='download'>Download</option>
                            <option value='dragons-maw'>Dragons Maw</option>
                            <option value='drizzle'>Drizzle</option>
                            <option value='drought'>Drought</option>
                            <option value='dry-skin'>Dry Skin</option>
                            <option value='early-bird'>Early Bird</option>
                            <option value='earth-eater'>Earth Eater</option>
                            <option value='effect-spore'>Effect Spore</option>
                            <option value='electric-surge'>Electric Surge</option>
                            <option value='electromorphosis'>Electromorphosis</option>
                            <option value='emergency-exit'>Emergency Exit</option>
                            <option value='fairy-aura'>Fairy Aura</option>
                            <option value='filter'>Filter</option>
                            <option value='flame-body'>Flame Body</option>
                            <option value='flare-boost'>Flare Boost</option>
                            <option value='flash-fire'>Flash Fire</option>
                            <option value='flower-gift'>Flower Gift</option>
                            <option value='flower-veil'>Flower Veil</option>
                            <option value='fluffy'>Fluffy</option>
                            <option value='forcast'>Forecast</option>
                            <option value='forewarn'>Forewarn</option>
                            <option value='friend-guard'>Friend Guard</option>
                            <option value='frisk'>Frisk</option>
                            <option value='full-metal-body'>Full Metal Body</option>
                            <option value='fur-coat'>Fur Coat</option>
                            <option value='gale-wings'>Gale Wings</option>
                            <option value='galvanize'>Galvanize</option>
                            <option value='gluttony'>Gluttony</option>
                            <option value='good-as-gold'>Good as Gold</option>
                            <option value='gooey'>Gooey</option>
                            <option value='gorilla-tactics'>Gorilla Tactics</option>
                            <option value='grass-pelt'>Grass Pelt</option>
                            <option value='grassy-surge'>Grassy Surge</option>
                            <option value='grim-neigh'>Grim Neigh</option>
                            <option value='guard-dog'>Guard Dog</option>
                            <option value='gulp-missile'>Gulp Missile</option>
                            <option value='guts'>Guts</option>
                            <option value='hadron-engine'>Hadron Engine</option>
                            <option value='harvest'>Harvest</option>
                            <option value='healer'>Healer</option>
                            <option value='heatproof'>Heatproof</option>
                            <option value='heavy-metal'>Heavy Metal</option>
                            <option value='honey-gather'>Honey Gather</option>
                            <option value='huge-power'>Huge Power</option>
                            <option value='hunger-switch'>Hunger Switch</option>
                            <option value='hustle'>Hustle</option>
                            <option value='hydration'>Hydration</option>
                            <option value='hyper-cutter'>Hyper Cutter</option>
                            <option value='ice-body'>Ice Body</option>
                            <option value='ice-face'>Ice Face</option>
                            <option value='ice-scales'>Ice Scales</option>
                            <option value='illuminate'>Illuminate</option>
                            <option value='illusion'>Illusion</option>
                            <option value='immunity'>Immunity</option>
                            <option value='imposter'>Imposter</option>
                            <option value='infiltrator'>Infiltrator</option>
                            <option value='innards-out'>Innards Out</option>
                            <option value='inner-focus'>Inner Focus</option>
                            <option value='insomnia'>Insomnia</option>
                            <option value='intimidate'>Intimidate</option>
                            <option value='intrepid-sword'>Intrepid Sword</option>
                            <option value='iron-barbs'>Iron Barbs</option>
                            <option value='iron-fist'>Iron Fist</option>
                            <option value='justified'>Justified</option>
                            <option value='keen-eye'>Keen Eye</option>
                            <option value='klutz'>Klutz</option>
                            <option value='leaf-guard'>Leaf Guard</option>
                            <option value='levitate'>Levitate</option>
                            <option value='libero'>Libero</option>
                            <option value='light-metal'>Light Metal</option>
                            <option value='lightning-rod'>Lightning Rod</option>
                            <option value='limber'>Limber</option>
                            <option value='lingering-aroma'>Lingering Aroma</option>
                            <option value='liquid-ooze'>Liquid Ooze</option>
                            <option value='liquid-voice'>Liquid Voice</option>
                            <option value='long-reach'>Long Reach</option>
                            <option value='magic-bounce'>Magic Bounce</option>
                            <option value='magic-guard'>Magic Guard</option>
                            <option value='magician'>Magician</option>
                            <option value='magma-armor'>Magma Armor</option>
                            <option value='magnet-pull'>Magnet Pull</option>
                            <option value='marvel-scale'>Marvel Scale</option>
                            <option value='mega-launcher'>Mega Launcher</option>
                            <option value='merciless'>Merciless</option>
                            <option value='mimicry'>Mimicry</option>
                            <option value='minus'>Minus</option>
                            <option value='mirror-armor'>Mirror Armor</option>
                            <option value='misty-surge'>Misty Surge</option>
                            <option value='mold-breaker'>Mold Breaker</option>
                            <option value='moody'>Moody</option>
                            <option value='motor-drive'>Motor Drive</option>
                            <option value='moxie'>Moxie</option>
                            <option value='multiscale'>Multiscale</option>
                            <option value='multitype'>Multitype</option>
                            <option value='mummy'>Mummy</option>
                            <option value='mycelium-might'>Mycelium Might</option>
                            <option value='natural-cure'>Natural Cure</option>
                            <option value='neuroforce'>Neuroforce</option>
                            <option value='neutralizing-gas'>Neutralizing Gas</option>
                            <option value='no-guard'>No Guard</option>
                            <option value='normalize'>Normalize</option>
                            <option value='oblivious'>Oblivious</option>
                            <option value='oppertunist'>Opportunist</option>
                            <option value='orichalcum-pulse'>Orichalcum Pulse</option>
                            <option value='overcoat'>Overcoat</option>
                            <option value='overgrow'>Overgrow</option>
                            <option value='own-tempo'>Own Tempo</option>
                            <option value='parental-bond'>Parental Bond</option>
                            <option value='pastel-veil'>Pastel Veil</option>
                            <option value='perish-body'>Perish Body</option>
                            <option value='pickpocket'>Pickpocket</option>
                            <option value='pickup'>Pickup</option>
                            <option value='pixilate'>Pixilate</option>
                            <option value='plus'>Plus</option>
                            <option value='poison-heal'>Poison Heal</option>
                            <option value='poison-point'>Poison Point</option>
                            <option value='poison-touch'>Poison Touch</option>
                            <option value='power-construct'>Power Construct</option>
                            <option value='power-of-alchemy'>Power of Alchemy</option>
                            <option value='power-spot'>Power Spot</option>
                            <option value='prankster'>Prankster</option>
                            <option value='pressure'>Pressure</option>
                            <option value='primordial-sea'>Primordial Sea</option>
                            <option value='prism-armor'>Prism Armor</option>
                            <option value='propeller-tail'>Propeller Tail</option>
                            <option value='protean'>Protean</option>
                            <option value='protosynthesis'>Protosynthesis</option>
                            <option value='psychic-surge'>Psychic Surge</option>
                            <option value='punk-rock'>Punk Rock</option>
                            <option value='pure-power'>Pure Power</option>
                            <option value='purifying-salt'>Purifying Salt</option>
                            <option value='quark-drive'>Quark Drive</option>
                            <option value='queenly-majesty'>Queenly Majesty</option>
                            <option value='quick-draw'>Quick Draw</option>
                            <option value='quick-feet'>Quick Feet</option>
                            <option value='rain-dish'>Rain Dish</option>
                            <option value='rattled'>Rattled</option>
                            <option value='receiver'>Receiver</option>
                            <option value='reckless'>Reckless</option>
                            <option value='refrigerate'>Refrigerate</option>
                            <option value='regenerator'>Regenerator</option>
                            <option value='ripen'>Ripen</option>
                            <option value='rivalry'>Rivalry</option>
                            <option value='rks-system'>RKS System</option>
                            <option value='rock-head'>Rock Head</option>
                            <option value='rocky-payload'>Rocky Payload</option>
                            <option value='rough-skin'>Rough Skin</option>
                            <option value='run-away'>Run Away</option>
                            <option value='sand-force'>Sand Force</option>
                            <option value='sand-rush'>Sand Rush</option>
                            <option value='sand-spit'>Sand Spit</option>
                            <option value='sand-stream'>Sand Stream</option>
                            <option value='sand-veil'>Sand Veil</option>
                            <option value='sap-sipper'>Sap Sipper</option>
                            <option value='schooling'>Schooling</option>
                            <option value='scrappy'>Scrappy</option>
                            <option value='screen-cleaner'>Screen Cleaner</option>
                            <option value='seed-sower'>Seed Sower</option>
                            <option value='serene-grace'>Serene Grace</option>
                            <option value='shadow-shield'>Shadow Shield</option>
                            <option value='shadow-tag'>Shadow Tag</option>
                            <option value='sharpness'>Sharpness</option>
                            <option value='shed-skin'>Shed Skin</option>
                            <option value='sheer-force'>Sheer Force</option>
                            <option value='shell-armor'>Shell Armor</option>
                            <option value='shiled-dust'>Shield Dust</option>
                            <option value='shields-down'>Shields Down</option>
                            <option value='simple'>Simple</option>
                            <option value='skill-link'>Skill Link</option>
                            <option value='slow-start'>Slow Start</option>
                            <option value='slush-rush'>Slush Rush</option>
                            <option value='sniper'>Sniper</option>
                            <option value='snow-cloak'>Snow Cloak</option>
                            <option value='snow-warning'>Snow Warning</option>
                            <option value='solar-power'>Solar Power</option>
                            <option value='solid-rock'>Solid Rock</option>
                            <option value='soul-heart'>Soul Heart</option>
                            <option value='soundproof'>Soundproof</option>
                            <option value='speed-boost'>Speed Boost</option>
                            <option value='stakeout'>Stakeout</option>
                            <option value='stall'>Stall</option>
                            <option value='stalwart'>Stalwart</option>
                            <option value='stamina'>Stamina</option>
                            <option value='stance-change'>Stance Change</option>
                            <option value='static'>Static</option>
                            <option value='steadfast'>Steadfast</option>
                            <option value='steam-engine'>Steam Engine</option>
                            <option value='steelworker'>Steelworker</option>
                            <option value='steely-spirit'>Steely Spirit</option>
                            <option value='stench'>Stench</option>
                            <option value='sticky-hold'>Sticky Hold</option>
                            <option value='storm-drain'>Storm Drain</option>
                            <option value='strong-jaw'>Strong Jaw</option>
                            <option value='sturdy'>Sturdy</option>
                            <option value='suction-cups'>Suction Cups</option>
                            <option value='super-luck'>Super Luck</option>
                            <option value='supreme-overlord'>Supreme Overlord</option>
                            <option value='surge-surfer'>Surge Surfer</option>
                            <option value='swarm'>Swarm</option>
                            <option value='sweet-veil'>Sweet Veil</option>
                            <option value='swift-swim'>Swift Swim</option>
                            <option value='sword-of-ruin'>Sword of Ruin</option>
                            <option value='symbiosis'>Symbiosis</option>
                            <option value='synchronize'>Synchronize</option>
                            <option value='tablets-of-ruin'>Tablets of Ruin</option>
                            <option value='tangled-feet'>Tangled Feet</option>
                            <option value='tangling-hair'>Tangling Hair</option>
                            <option value='technician'>Technician</option>
                            <option value='telepathy'>Telepathy</option>
                            <option value='teravolt'>Teravolt</option>
                            <option value='thermal-exchange'>Thermal Exchange</option>
                            <option value='thick-fat'>Thick Fat</option>
                            <option value='tinted-lens'>Tinted Lens</option>
                            <option value='torrent'>Torrent</option>
                            <option value='tough-claws'>Tough Claws</option>
                            <option value='toxic-boost'>Toxic Boost</option>
                            <option value='toxic-debris'>Toxic Debris</option>
                            <option value='trace'>Trace</option>
                            <option value='transistor'>Transistor</option>
                            <option value='triage'>Triage</option>
                            <option value='truant'>Truant</option>
                            <option value='turboblaze'>Turboblaze</option>
                            <option value='unaware'>Unaware</option>
                            <option value='unburden'>Unburden</option>
                            <option value='unnerve'>Unnerve</option>
                            <option value='unseen-fist'>Unseen Fist</option>
                            <option value='vessel-of-ruin'>Vessel of Ruin</option>
                            <option value='victory-star'>Victory Star</option>
                            <option value='vital-spirit'>Vital Spirit</option>
                            <option value='volt-absorb'>Volt Absorb</option>
                            <option value='wandering-spirit'>Wandering Spirit</option>
                            <option value='water-absorb'>Water Absorb</option>
                            <option value='water-bubble'>Water Bubble</option>
                            <option value='water-compaction'>Water Compaction</option>
                            <option value='water-veil'>Water Veil</option>
                            <option value='weak-armor'>Weak Armor</option>
                            <option value='well-baked-body'>Well-Baked Body</option>
                            <option value='white-smoke'>White Smoke</option>
                            <option value='wimp-out'>Wimp Out</option>
                            <option value='wind-power'>Wind Power</option>
                            <option value='wind-rider'>Wind Rider</option>
                            <option value='wonder-guard'>Wonder Guard</option>
                            <option value='wonder-skin'>Wonder Skin</option>
                            <option value='zen-mode'>Zen Mode</option>
                            <option value='zero-to-hero'>Zero to Hero</option>
                        </select>


                        <button type='submit'>SEARCH</button>
                    </form>
                    <div className='ability-results'>
                        <h4>{recievedSearch?.name?.toUpperCase()}</h4>
                        {/* <p>{recievedSearch?.effect_entries?.[0]?.effect}</p> */}
                        <p>{recievedSearch?.effect_entries?.[1]?.effect}</p>
                        <p>{recievedSearch?.effect_entries?.[1]?.short_effect}</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default TypeSelect
