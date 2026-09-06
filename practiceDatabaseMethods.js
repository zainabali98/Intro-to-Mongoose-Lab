const Recipe = require("./models/Recipe")
const mongoose = require('mongoose')
const connectToDB = require('./db')


const {
    createRecipe,
    getAllRecipes,
    updateRecipe,
    deleteRecipe,
    getRecipeById,
} = require('./recipeUtils');



async function main() {
    try {
        await connectToDB();

        createRecipe();

        getRecipeById('ID');

        getAllRecipes();

        updateRecipe(
            'ID',
            {
                name: 'Pizza',
                instructions: 'smother it in sauce',
                prepTime: 30,
                difficulty: 'Easy'
            }
        );

        deleteRecipe('ID');

    } catch (error) {
        console.log(error);
    }
}


main();
