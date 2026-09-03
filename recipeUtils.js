const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')


async function createRecipe(newRecipe) {
    try {
        const createdRecipe = await Recipe.create({
            name: 'Um Ali',
            instructions: 'bake at 180C',
            prepTime: 120,
            difficulty: 'Medium',
        });

        console.log(createdRecipe);
    } catch (err) {
        console.log("Failed to create recipe.", err);
    }
}


async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find({});

        allRecipes.forEach(recipe => {
            console.log(
                `${recipe.name} is a ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`
            );
        });
    } catch (err) {
        console.log("Failed to get recipes.", err);
    }
}


async function getRecipeById(id) {
    try {
        const foundRecipe = await Recipe.findById(id);

        if (foundRecipe) {
            console.log(foundRecipe);
        } else {
            console.log("No recipe with this ID exists.");
        }
    } catch (err) {
        console.log("Failed to find recipe.", err);
    }
}


async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updatedRecipeData = await Recipe.findByIdAndUpdate(
            recipeId,
            newRecipeData,
            { new: true }
        );

        console.log(updatedRecipeData);
    } catch (err) {
        console.log("Failed to update recipe.", err);
    }
}


async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await Recipe.findOneAndDelete({
            _id: recipeId
        });

        console.log("Recipe successfully deleted.");
    } catch (err) {
        console.log("Failed to delete recipe.", err);
    }
}


module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};