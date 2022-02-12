const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

window.addEventListener('DOMContentLoaded', () => {
    generateCocktails()
    buildRerollButton()
})

async function generateCocktails() {
    const ul = document.getElementById('cocktail-list')
    let addedToList = 0
    while (addedToList < 3) {
        await fetchCocktails('random.php')
        .then(data => {
            if (isCocktail(data.drinks[0].strCategory) === true) {
                ul.innerHTML += `<li><a href="#" data-id="${data.drinks[0].idDrink}">${data.drinks[0].strDrink}</a></li>`
                addedToList ++
            }      
            })
    attachClicksToDrinkList()
    }
    }

const attachClicksToDrinkList = () => {
    const drinks = document.querySelectorAll('a')
    drinks.forEach((drink) => {
        drink.addEventListener('click', displayDrinkDetails)
    })
    }

const displayDrinkDetails = (event) => {
    const drinkId = event.target.dataset.id
    const ul = document.getElementById('cocktail-list')
    fetchCocktails("lookup.php?i=" + drinkId)
    .then(data => {
        const drinkPrefix = data.drinks[0]
        ul.innerHTML = `
        <img src=${drinkPrefix.strDrinkThumb} alt=Image of ${drinkPrefix.strDrink} height = "25%" width = "25%">
        <br>
        <strong>${drinkPrefix.strDrink}</strong>   
        <br>
        <br>
        <strong><u>Ingredients:</u></strong>
        <br>
        ${buildIngredientsList(drinkPrefix)}
        <br>
        <strong><u>Instructions:</u></strong>
        <br>
        ${drinkPrefix.strInstructions}
        `


    })
}

const buildIngredientsList = (drink) => {
    let list = ""
    if (ingredientChecker(drink.strIngredient1) === true) {list += `${drink.strMeasure1} ${drink.strIngredient1}<br>`}
    if (ingredientChecker(drink.strIngredient2) === true) {list += `${drink.strMeasure2} ${drink.strIngredient2}<br>`}
    if (ingredientChecker(drink.strIngredient3) === true) {list += `${drink.strMeasure3} ${drink.strIngredient3}<br>`}
    if (ingredientChecker(drink.strIngredient4) === true) {list += `${drink.strMeasure4} ${drink.strIngredient4}<br>`}
    if (ingredientChecker(drink.strIngredient5) === true) {list += `${drink.strMeasure5} ${drink.strIngredient5}<br>`}
    if (ingredientChecker(drink.strIngredient6) === true) {list += `${drink.strMeasure6} ${drink.strIngredient6}<br>`}
    if (ingredientChecker(drink.strIngredient7) === true) {list += `${drink.strMeasure7} ${drink.strIngredient7}<br>`}
    if (ingredientChecker(drink.strIngredient8) === true) {list += `${drink.strMeasure8} ${drink.strIngredient8}<br>`}
    if (ingredientChecker(drink.strIngredient9) === true) {list += `${drink.strMeasure9} ${drink.strIngredient9}<br>`}
    if (ingredientChecker(drink.strIngredient10) === true) {list += `${drink.strMeasure10} ${drink.strIngredient10}<br>`}
    return list
}

async function fetchCocktails(requestType) {
    let res = await fetch(baseUrl + requestType )
    console.log(res)
    let data = await res.json()
    return data
}

let isCocktail = (bev) => bev === "Cocktail" || bev === "Ordinary Drink"

const ingredientChecker = (ingredient) => {
//checks to see if ingredient exists/has value
    if (ingredient != undefined && ingredient != null){
        if(ingredient.length > 0) {
            return true
        }
    }
    return false
}

function reroll() {
    const ul = document.getElementById('cocktail-list')
    ul.innerHTML = ""
    generateCocktails()

}

function buildRerollButton() {
    const button = document.getElementById('reroll')
    button.addEventListener('click', reroll)
}