async function init() {
    const datas = await getData()
    const recipes = new Recipes(datas)
    console.log('recipes', recipes) 
    recipes.createCard()
}

init()

