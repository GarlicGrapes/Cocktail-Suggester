const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

window.addEventListener('DOMContentLoaded', () => {
    generateCocktails()
})

// function getCocktails() {
//     const ul = document.getElementById('cocktail-list')
    
//     fetchCocktails()
//     .then(data => {
//         console.log(data)
//         data.drinks.forEach(drink => { 
//             if(drink.strCategory === "Shot") {
//             ul.innerHTML += `<li>${drink.strDrink} is served in a ${drink.strGlass}</li>`
//             }
//         })
//     })
// }

async function generateCocktails() {
    const ul = document.getElementById('cocktail-list')
    let i = 0
    while (i < 3) {
        await fetchCocktails('random.php')
        .then(data => {
            if (isCocktail(data.drinks[0].strCategory) === true) {
                ul.innerHTML += `<li><a href="#" data-id="${data.drinks[0].idDrink}">${data.drinks[0].strDrink}</a></li>`
                i ++
                console.log("i = " + i)
            }      
            })
    attachClicksToDrinkList()
    }
    }

const attachClicksToDrinkList = () => {
    const drinks = document.querySelectorAll('a')
    drinks.forEach((drink) => {
        drink.addEventListener('click', displayDrinkDetails)
        console.log(`im adding a listener for ${drink}`)
    })
    }

const displayDrinkDetails = (event) => {
    const drinkId = event.target.dataset.id
    console.log(event.target.dataset.id)
    const ul = document.getElementById('cocktail-list')
    fetchCocktails("lookup.php?i=" + drinkId)
    .then(data => {
        const drinkPrefix = data.drinks[0]
        ul.innerHTML = `
        <img src=${drinkPrefix.strDrinkThumb} alt=Image of ${drinkPrefix.strDrink} height = "25%" width = "25%">
        <br>    
        <ul>
            <li> ${drinkPrefix.strDrink}</li>
            <li>ingredients: </li>
            ${buildIngredientsList(drinkPrefix)}
            <li>${drinkPrefix.strInstructions}</li>
        `
    })
}

function buildIngredientsList(drink) {
    let list = ""
    if (drink.strIngredient1 == true) {list += `<li>${drink.strMeasure1} ${drink.strIngredient1}</li>`}
    if (drink.strIngredient2 == true) {list += `<li>${drink.strMeasure2} ${drink.strIngredient2}</li>`}
    if (drink.strIngredient3 == true) {list += `<li>${drink.strMeasure3} ${drink.strIngredient3}</li>`}
    if (drink.strIngredient4 == true) {list += `<li>${drink.strMeasure4} ${drink.strIngredient4}</li>`}
    if (drink.strIngredient5 == true) {list += `<li>${drink.strMeasure5} ${drink.strIngredient5}</li>`}
    if (drink.strIngredient6 == true) {list += `<li>${drink.strMeasure6} ${drink.strIngredient6}</li>`}
    if (drink.strIngredient7 == true) {list += `<li>${drink.strMeasure7} ${drink.strIngredient7}</li>`}
    if (drink.strIngredient8 == true) {list += `<li>${drink.strMeasure8} ${drink.strIngredient8}</li>`}
    if (drink.strIngredient9 == true) {list += `<li>${drink.strMeasure9} ${drink.strIngredient9}</li>`}
    if (drink.strIngredient10 == true) {list += `<li>${drink.strMeasure10} ${drink.strIngredient10}</li>`}
    return list
}

async function fetchCocktails(requestType) {
    let res = await fetch(baseUrl + requestType )
    console.log(res)
    let data = await res.json()
    return data
}

let isCocktail = (bev) => bev === "Cocktail" || bev === "Ordinary Drink"

