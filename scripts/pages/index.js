/**
 * Functions for the index page
 */
async function init() {
    //catch json data
    const datas = await getData()

    //create objects
    const recipes = new Recipes(datas)
    const filter = new Filter()
    const searchBar = new SearchBar()

    //display element page
    recipes.createCard()
    recipes.numberOfRecipe()
    filter.initializeFilter()
    searchBar.handleInput()
}

init()

