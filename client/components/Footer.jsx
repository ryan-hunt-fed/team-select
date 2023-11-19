import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <p className='return-arrow'><a href='#pokemon-header'>&#11014;</a></p>
                <p>Created with <a href='https://pokeapi.co/' target="_blank" rel="noreferrer">PokiAPI</a></p>
                <p>Created by <a href='https://ryan-hunt-fwd-portfolio.web.app/' target="_blank" rel="noreferrer">Ryan Hunt</a></p>
                <div className='nav-img'>
                    <img src='./images/pokemonlogo.png' alt='pokemon-logo' id='pokemon-header' />
                </div>

            </div>
        </>
    )
}

export default Footer
