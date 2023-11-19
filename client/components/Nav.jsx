import React from 'react'

function Nav() {
    return (
        <>
            <div className='nav-container' id='pokemon-header'>


                <div className='nav-links' >
                    <p><a href='#poke-search'>SEARCH</a></p>
                    <p><a href='#poke-types'>TYPES</a></p>
                    {/* <div > */}
                    {/* <img src='./images/pokemonlogo.png' alt='pokemon-logo' id='pokemon-header' className='nav-img' /> */}
                    {/* </div> */}
                    <p><a href='#poke-ability'>ABILITIES</a></p>
                    <p><a href='#poke-team'>RANDOM TEAM</a></p>
                </div>

            </div>
        </>
    )
}

export default Nav
