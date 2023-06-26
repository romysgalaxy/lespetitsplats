class Recipes {
    constructor(data) {
        this.data = data
        //this.image = this.data.image
        // this.imageUrl = `./assets/recipes/${this.image}`
    }

    createCard() {
        const recipeCard = document.querySelector('.recipeCard')
        const recipes = this.data.recipes

        recipes.forEach((recipe) => {
            const card = document.createElement('article')
            card.setAttribute('class', 'card')
            const image = document.createElement('img')
            image.setAttribute('class', 'card_img')
            const label = document.createElement('p')
            label.setAttribute('class', 'card_label')
            const content = document.createElement('div')
            content.setAttribute('class', 'card_content')
            const name = document.createElement('p')
            name.setAttribute('class', 'card_name')
            const recipeTitle = document.createElement('p')
            recipeTitle.setAttribute('class', 'card_title')
            const description = document.createElement('p')
            const ingredients = document.createElement('p')
            ingredients.setAttribute('class', 'card_title')
            const ingredientsContainer = document.createElement('div')
            ingredientsContainer.setAttribute('class', 'card_ingredients')
            const ingredientList = document.createElement('ul');

            const imageName = recipe.image
            const imageUrl = `./assets/recipes/${imageName}`
            image.setAttribute('src', imageUrl)
            label.textContent = `${recipe.time}min`
            name.textContent = recipe.name
            recipeTitle.textContent = "Recette"
            description.textContent = recipe.description
            ingredients.textContent = "Ingredients"

            recipe.ingredients.forEach((ingredient) => {
                const ingredientItem = document.createElement('li');
                const ingredientText = document.createElement('p');
                const quantityText = document.createElement('p');
                quantityText.textContent = ingredient.quantity ? `${ingredient.quantity} ${ingredient.unit || ''}` : '';
                ingredientText.textContent = ingredient.ingredient;
                ingredientItem.appendChild(ingredientText)
                ingredientItem.appendChild(quantityText)
                ingredientList.appendChild(ingredientItem);
            });
            
            card.appendChild(image)
            card.appendChild(label)
            content.appendChild(name)
            content.appendChild(recipeTitle)
            content.appendChild(description)
            content.appendChild(ingredients)
            ingredientsContainer.appendChild(ingredientList);
            content.appendChild(ingredientsContainer)
            card.appendChild(content)

            recipeCard.appendChild(card)
        });

    }
}