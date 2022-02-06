const baseUrl = 'www.thecocktaildb.com/api/json/v1/1/'

window.addEventListener('DOMContentLoaded', () => {
    getCocktails()
})

function getCocktails() {
//    const ul = document.getElementById('cocktail-list')
    fetch(baseUrl + 'search.php?s=')
    .then(res => res.json())
    .then(data => console.log(data))
}