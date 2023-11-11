const results = document.querySelector('.recipes-card-container');

function displayRecipes(recipes) {
    results.innerHTML = "";
    recipes.forEach(recipe => {

        // Container card principal
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        // Container image
        recipeContainerImg = document.createElement('div');
        recipeContainerImg.classList.add('picture-info');
        recipeImg = document.createElement('img');
        recipeImg.src = `../assets/photos/${recipe.image}`;
        recipeImg.alt = recipe.name;
        recipeContainerImg.appendChild(recipeImg);
        recipeTime = document.createElement('p');
        recipeTime.classList.add('prep-time');
        recipeTime.innerText = `${recipe.time}min`;
        recipeContainerImg.appendChild(recipeTime);

        //Nom de la recette
        recipeMain = document.createElement('div');
        recipeMain.classList.add('recipe');
        recipeName = document.createElement('h2');
        recipeName.classList.add('recipes-name');
        recipeName.innerText = recipe.name;
        recipeMain.appendChild(recipeName);

        // Preparation
        recipePreparation = document.createElement('div');
        recipePreparation.classList.add('preparation');
        recipeMain.appendChild(recipePreparation);
        recipeTitle = document.createElement('h3');
        recipeTitle.classList.add('title');
        recipeTitle.innerText = "Recette";
        recipeDescription = document.createElement('p');
        recipeDescription.innerText = recipe.description.substring(0, 200);
        
        recipePreparation.appendChild(recipeTitle);
        recipePreparation.appendChild(recipeDescription);

        //Ingredient
        recipeIngredientMain = document.createElement('div');
        recipeIngredientMain.classList.add('ingredients');
        recipeMain.appendChild(recipeIngredientMain);
        ingredientName = document.createElement('h3');
        ingredientName.classList.add('title');
        ingredientName.innerText = "Ingrédient";
        recipeIngredientMain.appendChild(ingredientName);
        ingredientList = document.createElement('ul');
        recipeIngredientMain.appendChild(ingredientList);
        // Ingredient List
        recipe.ingredients.map(item => {
            if (item.quantity !== undefined && item.unit !== undefined) {
                return ingredientList.innerHTML += `
                    <li>
                        <p>${item.ingredient}</p>
                        <span>${item.quantity} ${item.unit}</span>
                    </li>
                `
            } else if (item.quantity !== undefined) {
                return ingredientList.innerHTML += `
                    <li>
                        <p>${item.ingredient}</p>
                        <span>${item.quantity}</span>
                    </li>
                `
            }
        });

        card.appendChild(recipeContainerImg);
        card.appendChild(recipeMain);

        results.appendChild(card);
    });
};

async function getRecipes() {
    const response = await fetch('../data/recipes.json')

    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);
}

init();

