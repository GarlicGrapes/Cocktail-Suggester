const baseUrl = 'https://www.thecocktaildb.com'

window.addEventListener('DOMContentLoaded', () => {
    getCocktails()
})

function getCocktails() {
//    const ul = document.getElementById('cocktail-list')
    
    fetchCocktails()
    .then(data => console.log(data))
}

async function fetchCocktails() {
    let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    let data = await res.json()
    return data
}