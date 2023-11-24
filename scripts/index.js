const searchInput = document.querySelector('#search-plate');
const searchResults = document.querySelector('.recipes-card-container');

let dataArray;

async function getRecipes() {
    const res = await fetch('data/recipes.json');
    const { recipes } = await res.json();
    dataArray = orderList(recipes);
    createRecipeList(dataArray);
}

getRecipes();

function orderList(data) {
    const orderedData = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }

        return 0;
    })
    return orderedData;
}

function createRecipeList(recipeList) {
    recipeList.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.setAttribute('class', 'recipe-card');
        let fileName = "./assets/photos/";

        recipeCard.innerHTML = `
            <div class="picture-info">
                <img src=${fileName}${recipe.image} alt=${recipe.name}>
                <p class="prep-time">${recipe.time}min</p>
            </div>
            <div class="recipe">
                <h2 class="recipes-name">${recipe.name}</h2>
                <div class="preparation">
                    <h3 class="title">Recette</h3>
                    <p>${recipe.description.substring(0, 180)}${recipe.description.length > 180 ? "..." : ""
                    }</p>
                    </div>
                    <div class="ingredients">
                    <h3 class="title">Ingrédient</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => {

                            if (ingredient.quantity !== undefined && ingredient.unit !== undefined) {
                                return `<li>
                                <p>${ingredient.ingredient}</p>
                                <span>${ingredient.quantity} ${ingredient.unit}</span>
                            </li>`;
                            } else if(ingredient.quantity !== undefined) {
                                return `
                                    <li>
                                        <p>${ingredient.ingredient}</p>
                                        <span>${ingredient.quantity}</span>
                                    </li>
                                `
                            }                           
                        }).join('')}
                    </ul>
                </div>
            </div>
        `;

        searchResults.appendChild(recipeCard);
    });
}

searchInput.addEventListener("input", filterData);

/**
 * Filters the data based on the given search value and updates the UI.
 *
 * @param {Event} e - The event object representing the input event.
 * @return {void} No return value.
 */
function filterData(e) {
    searchResults.innerHTML = "";
    const value = e.target.value.toLowerCase();
    const filteredData = dataArray.filter((data) => {
        return data.name.toLowerCase().includes(value);
    });
    createRecipeList(filteredData);
}