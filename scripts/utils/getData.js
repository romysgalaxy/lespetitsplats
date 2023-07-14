/**
 * Catch the recipe data inside json
 * @returns an object with a table with all the recipes
 */
async function getData() {
    const reponse = await fetch('./data/recipes.json')
    let datas = await reponse.json()
    return datas
}
