const baseUrl = 'https://www.thecocktaildb.com'

window.addEventListener('DOMContentLoaded', () => {
    getCocktails()
})

function getCocktails() {
//    const ul = document.getElementById('cocktail-list')
    fetch( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => console.log(data))
}

// window.addEventListener('DOMContentLoaded', () => {
//     getCocktails()
// })

// function getCocktails() {
// //    const ul = document.getElementById('cocktail-list')
//     fetch('https://api.magicthegathering.io/v1/cards', {
// //        mode: 'cors',
//  //       credentials: 'include'
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }