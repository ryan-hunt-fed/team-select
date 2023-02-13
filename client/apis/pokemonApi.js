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

// export function pokemonType1Api(){
//     return request.get('https://pokeapi.co/api/v2/type/1')
//     .then( res => {
//         return res.body
//     })
// }

// export function pokemonType2Api(){
//     return request.get('https://pokeapi.co/api/v2/type/2')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType3Api(){
//     return request.get('https://pokeapi.co/api/v2/type/3')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType4Api(){
//     return request.get('https://pokeapi.co/api/v2/type/4')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType5Api(){
//     return request.get('https://pokeapi.co/api/v2/type/5')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType6Api(){
//     return request.get('https://pokeapi.co/api/v2/type/6')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType7Api(){
//     return request.get('https://pokeapi.co/api/v2/type/7')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType8Api(){
//     return request.get('https://pokeapi.co/api/v2/type/8')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType9Api(){
//     return request.get('https://pokeapi.co/api/v2/type/9')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType10Api(){
//     return request.get('https://pokeapi.co/api/v2/type/10')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType11Api(){
//     return request.get('https://pokeapi.co/api/v2/type/11')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType12Api(){
//     return request.get('https://pokeapi.co/api/v2/type/12')
//     .then( res => {
//         return res.body
//     })
// }

// export function pokemonType13Api(){
//     return request.get('https://pokeapi.co/api/v2/type/13')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType14Api(){
//     return request.get('https://pokeapi.co/api/v2/type/14')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType15Api(){
//     return request.get('https://pokeapi.co/api/v2/type/15')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType16Api(){
//     return request.get('https://pokeapi.co/api/v2/type/16')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType17Api(){
//     return request.get('https://pokeapi.co/api/v2/type/17')
//     .then( res => {
//         return res.body
//     })
// }


// export function pokemonType18Api(){
//     return request.get('https://pokeapi.co/api/v2/type/18')
//     .then( res => {
//         return res.body
//     })
// }


