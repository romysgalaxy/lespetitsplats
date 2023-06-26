async function getData() {
    const reponse = await fetch('./data/recipes.json')
    let datas = await reponse.json()
    return datas
}
