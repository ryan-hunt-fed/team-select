import request from "superagent"


export function pokemonSearchApi(data) {
    return request.get('https://pokeapi.co/api/v2/pokemon/' + data)
    .then( res => {
        // console.log('all search', res.body)
        return res.body
    })
}

export function pokemonSpecialApi(data) {
    return request.get('https://pokeapi.co/api/v2/pokemon-species/' + data)
    .then( res => {
        console.log('special', res.body)
        return res.body
    })
}

export function pokemonTypeApi(data){
    return request.get('https://pokeapi.co/api/v2/type/' + data)
    .then( res => {
        console.log('api', res.body)
        return res.body
    })
}

export function pokemonAbilityApi(data){
    return request.get('https://pokeapi.co/api/v2/ability/' + data)
    .then ( res => {
        console.log('ability', res.body)
        return res.body
    })
}


