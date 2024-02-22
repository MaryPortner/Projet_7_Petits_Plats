/**
 * Récupère les données du fichier json
 * @return {Promise<Array>}
 */

async function getDatas() {
    const response = await fetch("./../../data/recipes.json");
    const dataRecipes = await response.json();
    return dataRecipes;
}

export {getDatas};
