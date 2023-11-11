const results = document.querySelector('.recipes-card-container');

function displayRecipes(recipes) {
    results.innerHTML = "";
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        recipeContainerImg = document.createElement('div');
        recipeContainerImg.classList.add('picture-info');
        recipeImg = document.createElement('img');
        recipeImg.src = `../assets/photos/${recipe.image}`;
        recipeContainerImg.appendChild(recipeImg);
        recipeTime = document.createElement('p');
        recipeTime.classList.add('prep-time');
        recipeTime.innerText = `${recipe.time}min`;
        recipeContainerImg.appendChild(recipeTime);


        card.appendChild(recipeContainerImg);
        results.appendChild(card);
    });
}

        /* let card =`
            <div class="recipe-card">
                <div class="picture-info">
                    <img src="/assets/images/header/lampos-aritonang-24gR_9lCdes-unsplash 1.jpg" alt="plat1">
                    <p class="prep-time">60min</p>
                </div>
                <div class="recipe">
                    <h2 class="recipes-name">Poulet Coco</h2>
                    <div class="preparation">
                        <div class="title">Recette</div>
                        <p>Découper le thon en dés, le mettre dans un plat et le recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures.</p>
                    </div>
                    <div class="ingredients">
                        <div class="title">Ingredients</div>
                        <ul>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>  
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>  
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
`; */


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

init()

/* let card =`
<div class="recipe-card">
                <div class="picture-info">
                    <img src="/assets/images/header/lampos-aritonang-24gR_9lCdes-unsplash 1.jpg" alt="plat1">
                    <p class="prep-time">60min</p>
                </div>
                <div class="recipe">
                    <h2 class="recipes-name">Poulet Coco</h2>
                    <div class="preparation">
                        <div class="title">Recette</div>
                        <p>Découper le thon en dés, le mettre dans un plat et le recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures.</p>
                    </div>
                    <div class="ingredients">
                        <div class="title">Ingredients</div>
                        <ul>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>  
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>  
                            <li>
                                <p>Thon Rouge (ou blanc)</p>
                                <span>200g</span>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
`;

let cardInserted = results.insertAdjacentHTML('beforeend', card); */