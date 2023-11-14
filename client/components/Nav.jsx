import React from 'react'

function Nav() {
    return (
        <>
            <div className='nav-container'>
                {/* <div className='nav-img'>
                    <img src='./images/pokemonlogo.png' alt='pokemon-logo' id='pokemon-header' />
                </div> */}
                <br />
                <div className='nav-links' id='pokemon-header'>
                    <p><a href='#poke-search'>Search</a></p>
                    <p><a href='#poke-types'>Types</a></p>
                    <p><a href='#poke-team'>Random Team</a></p>
                </div>

            </div>
        </>
    )
}

export default Nav
