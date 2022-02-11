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
    let o = 0
    while (i < 3) {
    await fetchCocktails()
    .then(data => {
        
        if (isCocktail(data.drinks[0].strCategory) === true) {
            ul.innerHTML += `<li>${data.drinks[0].strDrink}</li>`
            i ++
            console.log("i = " + i)
        }      
        })
    o++
    console.log('o = ' + o)
    }
    }



async function fetchCocktails() {
    let res = await fetch(baseUrl + 'random.php' )
    let data = await res.json()
    return data
}

let isCocktail = (bev) => bev === "Cocktail" || bev === "Ordinary Drink"

